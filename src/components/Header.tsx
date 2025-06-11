
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Home, User, LogOut } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Header = () => {
  const navigate = useNavigate();
  const [employee] = useState(() => {
    const stored = localStorage.getItem('employee');
    return stored ? JSON.parse(stored) : { name: 'John Doe', id: 'EMP001', role: 'Manager' };
  });

  const handleLogout = () => {
    localStorage.removeItem('employee');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out"
    });
    navigate('/');
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleHome = () => {
    navigate('/home');
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Navigation */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleBack}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleHome}
              className="hover:bg-gray-100"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </div>

          {/* Right side - User info */}
          <div className="flex items-center space-x-4">
            {/* Desktop view */}
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <span className="font-medium">{employee.name}</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">{employee.id}</span>
              <span className="text-gray-500">|</span>
              <span className="text-blue-600 font-medium">{employee.role}</span>
              <span className="text-gray-500">|</span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Logout
              </Button>
            </div>

            {/* Profile dropdown for mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10 bg-blue-600">
                    <AvatarFallback className="bg-blue-600 text-white">
                      {getInitials(employee.name)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white" align="end" forceMount>
                <div className="flex flex-col space-y-1 p-2">
                  <p className="text-sm font-medium leading-none">{employee.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">{employee.id}</p>
                  <p className="text-xs leading-none text-blue-600 font-medium">{employee.role}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/profile')} className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
