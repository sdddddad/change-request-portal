
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
  loginTime: number;
}

export const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [employee, setEmployee] = useState<Employee | null>(null);

  const checkSessionValidity = () => {
    const storedEmployee = localStorage.getItem('employee');
    if (!storedEmployee) {
      return false;
    }

    try {
      const employeeData: Employee = JSON.parse(storedEmployee);
      const now = new Date();
      const loginTime = new Date(employeeData.loginTime);
      const currentDay = now.getDate();
      const loginDay = loginTime.getDate();
      
      // Check if it's a different day or past 12 PM on the same day
      if (currentDay !== loginDay || (currentDay === loginDay && now.getHours() >= 12 && loginTime.getHours() < 12)) {
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Error parsing employee data:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('employee');
    setIsAuthenticated(false);
    setEmployee(null);
    navigate('/', { replace: true });
  };

  const handleSessionExpiry = () => {
    logout();
    // Show session expired message
    alert('Session expired. Please login again.');
  };

  useEffect(() => {
    const checkAuth = () => {
      if (checkSessionValidity()) {
        const storedEmployee = localStorage.getItem('employee');
        if (storedEmployee) {
          const employeeData = JSON.parse(storedEmployee);
          setEmployee(employeeData);
          setIsAuthenticated(true);
        }
      } else {
        const storedEmployee = localStorage.getItem('employee');
        if (storedEmployee) {
          handleSessionExpiry();
        }
      }
    };

    checkAuth();

    // Check session validity every minute
    const interval = setInterval(checkAuth, 60000);

    // Handle browser back/forward navigation
    const handlePopState = () => {
      if (!checkSessionValidity()) {
        handleSessionExpiry();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      clearInterval(interval);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  return {
    isAuthenticated,
    employee,
    logout,
    checkSessionValidity
  };
};
