
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, AlertTriangle, Edit } from 'lucide-react';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';

const ChangeManagement = () => {
  const navigate = useNavigate();

  const requestTypes = [
    {
      id: 'new-process',
      title: 'New Process Request Note',
      description: 'Submit a request for implementing a new process',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      path: '/change-management/new-process'
    },
    {
      id: 'deviation',
      title: 'Process Deviation Note',
      description: 'Report and request approval for process deviations',
      icon: AlertTriangle,
      color: 'from-yellow-500 to-yellow-600',
      path: '/change-management/deviation'
    },
    {
      id: 'document-change',
      title: 'Document Change Request Note',
      description: 'Request changes to existing documentation',
      icon: Edit,
      color: 'from-green-500 to-green-600',
      path: '/change-management/document-change'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Change Management</h1>
          <p className="text-gray-600">Submit and track change requests across your organization</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {requestTypes.map((type) => (
            <Card 
              key={type.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
              onClick={() => navigate(type.path)}
            >
              <div className={`h-2 bg-gradient-to-r ${type.color}`} />
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${type.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors leading-tight">
                      {type.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {type.description}
                </CardDescription>
                <Button 
                  className="w-full mt-4 bg-gray-100 text-gray-700 hover:bg-gray-200 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                  variant="outline"
                >
                  Start Request
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">How it works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
              <span className="text-blue-800">Basic Details</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
              <span className="text-blue-800">Document Details</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
              <span className="text-blue-800">Distribution</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
              <span className="text-blue-800">Review & Submit</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChangeManagement;
