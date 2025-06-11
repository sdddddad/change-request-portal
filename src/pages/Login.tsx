
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
    
    // Simulate OTP sending (integrate with Google Apps Script)
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      toast({
        title: "OTP Sent",
        description: "Please check your email for the verification code"
      });
    }, 1500);
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
    
    // Simulate OTP verification (integrate with Google Apps Script)
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('employee', JSON.stringify({
        id: employeeId,
        name: 'John Doe',
        role: 'Manager',
        email: 'john.doe@company.com'
      }));
      navigate('/home');
    }, 1500);
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
            <h1 className="text-3xl font-bold text-gray-900">Employee Portal</h1>
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
                      <span>Sending OTP...</span>
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
