
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileBarChart, AlertCircle, ArrowLeft, Car, Users, Cog, Wrench, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Audits = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleP0AuditClick = (type: string) => {
    // All P0 audit types open the same link
    window.open('https://docs.google.com/spreadsheets/d/1CLh_7_L3uS_balM3aq54QuIOo9OQN-m_cWAioA7axEk/edit?gid=1669167244#gid=1669167244', '_blank');
  };

  const handleNCStatusClick = () => {
    window.open('https://docs.google.com/spreadsheets/d/1_H5fUMCttY_ISlsDYgOxtbsj38xkSc1oa7KBvfoCiVQ/edit?gid=110860608#gid=110860608', '_blank');
  };

  const handleUpdateCAPAClick = () => {
    window.open('https://docs.google.com/spreadsheets/d/1_H5fUMCttY_ISlsDYgOxtbsj38xkSc1oa7KBvfoCiVQ/edit?gid=79182210#gid=79182210', '_blank');
  };

  const handleP1AuditClick = () => {
    window.open('https://docs.google.com/spreadsheets/d/1CLh_7_L3uS_balM3aq54QuIOo9OQN-m_cWAioA7axEk/edit?gid=1669167244#gid=1669167244', '_blank');
  };

  const p0AuditTypes = [
    { name: 'Recruitment', icon: Users, color: 'from-blue-500 to-blue-600' },
    { name: 'Operations', icon: Cog, color: 'from-green-500 to-green-600' },
    { name: 'FSE', icon: Car, color: 'from-purple-500 to-purple-600' },
    { name: 'Workshop', icon: Wrench, color: 'from-orange-500 to-orange-600' }
  ];

  if (selectedSection === 'p0-audit') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        
        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="mb-6 flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => setSelectedSection(null)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
            
            <div className="flex items-center space-x-3">
              <Car className="h-6 w-6 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">P0 Audit Reports</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p0AuditTypes.map((type) => (
              <Card 
                key={type.name}
                className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
                onClick={() => handleP0AuditClick(type.name)}
              >
                <div className={`h-2 bg-gradient-to-r ${type.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${type.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <type.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                        {type.name}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Open Audit Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  if (selectedSection === 'nc-tracker') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        
        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="mb-6 flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => setSelectedSection(null)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
            
            <div className="flex items-center space-x-3">
              <Car className="h-6 w-6 text-red-600" />
              <h1 className="text-3xl font-bold text-gray-900">NC Tracker</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                      NC Status
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-6">
                  View current non-conformance status and tracking
                </CardDescription>
                <Button 
                  onClick={handleNCStatusClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  View NC Status
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-600" />
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <AlertCircle className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">
                      Update Your CAPA
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-6">
                  Update corrective and preventive actions
                </CardDescription>
                <Button 
                  onClick={handleUpdateCAPAClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Update CAPA
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8 flex items-center space-x-3">
          <Car className="h-8 w-8 text-orange-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Audits & Non-Conformances</h1>
            <p className="text-gray-600">Access audit reports and non-conformance records</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
            onClick={() => setSelectedSection('p0-audit')}
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                  <FileBarChart className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                    P0 Audit Reports
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 leading-relaxed">
                Access P0 level audit reports across departments
              </CardDescription>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
            onClick={handleP1AuditClick}
          >
            <div className="h-2 bg-gradient-to-r from-green-500 to-green-600" />
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white group-hover:scale-110 transition-transform duration-300">
                  <FileBarChart className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">
                    P1 Audit Reports
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 leading-relaxed">
                Access P1 level audit reports and findings
              </CardDescription>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
            onClick={() => setSelectedSection('nc-tracker')}
          >
            <div className="h-2 bg-gradient-to-r from-red-500 to-red-600" />
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white group-hover:scale-110 transition-transform duration-300">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-2xl group-hover:text-red-600 transition-colors">
                    NC Tracker
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 leading-relaxed">
                Track and manage non-conformance records
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Audits;
