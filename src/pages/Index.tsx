
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const employee = localStorage.getItem('employee');
    if (employee) {
      navigate('/home');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return null;
};

export default Index;
