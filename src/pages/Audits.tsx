
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileBarChart, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';

const Audits = () => {
  const handleAuditReportClick = () => {
    window.open('https://docs.google.com/spreadsheets/d/1CLh_7_L3uS_balM3aq54QuIOo9OQN-m_cWAioA7axEk/edit?gid=1669167244#gid=1669167244', '_blank');
  };

  const handleNCClick = () => {
    window.open('https://docs.google.com/spreadsheets/d/1_H5fUMCttY_ISlsDYgOxtbsj38xkSc1oa7KBvfoCiVQ/edit?gid=79182210#gid=79182210', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Audits & Non-Conformances</h1>
          <p className="text-gray-600">Access audit reports and non-conformance records</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Audit Reports Button */}
          <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                  <FileBarChart className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                    Audit Reports
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 leading-relaxed mb-6">
                Access and view all audit reports and findings
              </CardDescription>
              <Button 
                onClick={handleAuditReportClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Open Audit Reports
              </Button>
            </CardContent>
          </Card>

          {/* Non-Compliance Button */}
          <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-red-500 to-red-600" />
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white group-hover:scale-110 transition-transform duration-300">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-2xl group-hover:text-red-600 transition-colors">
                    Non Compliance
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 leading-relaxed mb-6">
                Track and manage non-conformance records
              </CardDescription>
              <Button 
                onClick={handleNCClick}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Open NC Records
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Audits;
