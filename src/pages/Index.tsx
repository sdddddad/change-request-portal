
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const navigate = useNavigate();
  const { checkSessionValidity } = useAuth();

  useEffect(() => {
    // Check if user has a valid session
    if (checkSessionValidity()) {
      navigate('/home');
    } else {
      // Clear any invalid session data
      localStorage.removeItem('employee');
      navigate('/');
    }
  }, [navigate, checkSessionValidity]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default Index;
