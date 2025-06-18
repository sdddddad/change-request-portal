
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Building2, Mail } from 'lucide-react';

const Login = () => {
  const [step, setStep] = useState(1);
  const [employeeId, setEmployeeId] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!employeeId.trim()) {
      toast({
        title: "Error",
        description: "Please enter your Employee ID",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      console.log('Validating employee ID:', employeeId);
      console.log('Making request to Google Apps Script...');
      
      const requestBody = { 
        action: 'validateEmployee', 
        employeeId: employeeId.trim() 
      };
      
      console.log('Request body:', JSON.stringify(requestBody));
      
      const response = await fetch('https://script.google.com/macros/s/AKfycbyu4rPT1bVKlb-w-KgpJpyazamYK66qWalUp8yklZddwNgWMkdySBqGVgdxuYTnj3Ce/exec', {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      console.log('Response received:', response);
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const responseText = await response.text();
      console.log('Raw response text:', responseText);
      
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError);
        throw new Error('Invalid response format from server');
      }
      
      console.log('Parsed validation result:', result);
      
      if (!result.success || !result.isValid) {
        toast({
          title: "Error",
          description: result.message || "Invalid Employee ID. Please check and try again.",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      // If validation successful, proceed to OTP step
      setStep(2);
      toast({
        title: "OTP Sent",
        description: "Please check your email for the verification code"
      });
      
    } catch (error) {
      console.error('Error validating employee:', error);
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
      let errorMessage = "Failed to validate Employee ID. ";
      
      if (error.message === 'Failed to fetch') {
        errorMessage += "This might be a network issue or the Google Apps Script needs to be configured to allow cross-origin requests. Please check your internet connection and try again.";
      } else if (error.message.includes('CORS')) {
        errorMessage += "Cross-origin request blocked. The Google Apps Script may need CORS configuration.";
      } else {
        errorMessage += error.message || "Please try again.";
      }
      
      toast({
        title: "Connection Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim()) {
      toast({
        title: "Error",
        description: "Please enter the OTP",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      console.log('Verifying OTP for employee:', employeeId, 'OTP:', otp);
      
      const requestBody = { 
        action: 'verifyOTP', 
        employeeId: employeeId.trim(),
        otp: otp.trim()
      };
      
      console.log('OTP verification request body:', JSON.stringify(requestBody));
      
      const response = await fetch('https://script.google.com/macros/s/AKfycbyu4rPT1bVKlb-w-KgpJpyazamYK66qWalUp8yklZddwNgWMkdySBqGVgdxuYTnj3Ce/exec', {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      console.log('OTP verification response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const responseText = await response.text();
      console.log('OTP verification raw response:', responseText);
      
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse OTP verification JSON response:', parseError);
        throw new Error('Invalid response format from server');
      }
      
      console.log('OTP verification result:', result);
      
      if (!result.success || !result.isValid) {
        toast({
          title: "Error",
          description: result.message || "Invalid OTP. Please check and try again.",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      // Store employee data from Google Sheets response
      const employeeData = {
        id: result.employeeData?.id || employeeId,
        name: result.employeeData?.name || 'Employee',
        role: result.employeeData?.role || 'User',
        email: result.employeeData?.email || '',
        loginTime: Date.now()
      };

      console.log('Storing employee data:', employeeData);
      localStorage.setItem('employee', JSON.stringify(employeeData));
      
      toast({
        title: "Success",
        description: "Login successful! Redirecting to home page..."
      });
      
      navigate('/home');
      
    } catch (error) {
      console.error('Error verifying OTP:', error);
      console.error('OTP verification error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
      let errorMessage = "Failed to verify OTP. ";
      
      if (error.message === 'Failed to fetch') {
        errorMessage += "This might be a network issue or the Google Apps Script needs to be configured to allow cross-origin requests. Please check your internet connection and try again.";
      } else if (error.message.includes('CORS')) {
        errorMessage += "Cross-origin request blocked. The Google Apps Script may need CORS configuration.";
      } else {
        errorMessage += error.message || "Please try again.";
      }
      
      toast({
        title: "Connection Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 bg-blue-600 rounded-full">
              <Building2 className="h-8 w-8 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-600">PDMS</h1>
            <p className="text-sm text-gray-600 mt-1">Project Document Management System</p>
            <p className="text-gray-600 mt-2">Access your workspace securely</p>
          </div>
        </div>

        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              {step === 1 ? 'Sign In' : 'Verify OTP'}
            </CardTitle>
            <CardDescription className="text-center">
              {step === 1 
                ? 'Enter your Employee ID to receive an OTP' 
                : 'Enter the verification code sent to your email'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 ? (
              <form onSubmit={handleSendOTP} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="employeeId">Employee ID</Label>
                  <Input
                    id="employeeId"
                    type="text"
                    placeholder="Enter your Employee ID"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    className="h-11"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-11 bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Validating...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>Send OTP</span>
                    </div>
                  )}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp">Verification Code</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="h-11 text-center text-lg tracking-widest"
                    maxLength={6}
                  />
                </div>
                <div className="flex space-x-2">
                  <Button 
                    type="button"
                    variant="outline"
                    className="flex-1 h-11"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 h-11 bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Verifying...</span>
                      </div>
                    ) : (
                      'Sign In'
                    )}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
