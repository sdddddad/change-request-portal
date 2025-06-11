
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileBarChart, AlertCircle, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';

const Audits = () => {
  const auditReports = [
    {
      id: 1,
      title: 'Internal Quality Audit Q4 2024',
      date: '2024-12-01',
      status: 'Completed',
      type: 'Quality Audit'
    },
    {
      id: 2,
      title: 'Safety Compliance Audit',
      date: '2024-11-15',
      status: 'In Review',
      type: 'Safety Audit'
    },
    {
      id: 3,
      title: 'Process Excellence Review',
      date: '2024-10-30',
      status: 'Completed',
      type: 'Process Audit'
    }
  ];

  const ncRecords = [
    {
      id: 'NC-2024-001',
      title: 'Documentation Update Required',
      severity: 'Minor',
      status: 'Open',
      department: 'Operations'
    },
    {
      id: 'NC-2024-002',
      title: 'Training Record Missing',
      severity: 'Major',
      status: 'In Progress',
      department: 'HR'
    },
    {
      id: 'NC-2024-003',
      title: 'Equipment Calibration Overdue',
      severity: 'Critical',
      status: 'Resolved',
      department: 'Quality'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'text-red-600 bg-red-50';
      case 'Major': return 'text-orange-600 bg-orange-50';
      case 'Minor': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
      case 'Resolved': return 'text-green-600 bg-green-50';
      case 'In Progress':
      case 'In Review': return 'text-blue-600 bg-blue-50';
      case 'Open': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Audits & Non-Conformances</h1>
          <p className="text-gray-600">Track audit reports and manage non-conformance records</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Audit Reports Section */}
          <div>
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileBarChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Audit Reports</CardTitle>
                    <CardDescription>Recent audit reports and findings</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {auditReports.map((report) => (
                    <div key={report.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">{report.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{report.date}</span>
                            <span>•</span>
                            <span>{report.type}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                            {report.status}
                          </span>
                          <Button size="sm" variant="ghost">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <Button variant="outline" className="w-full">
                    View All Reports
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* NC Tracker Section */}
          <div>
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">NC Tracker</CardTitle>
                    <CardDescription>Non-conformance records and status</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {ncRecords.map((nc) => (
                    <div key={nc.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium text-gray-900">{nc.id}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(nc.severity)}`}>
                              {nc.severity}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{nc.title}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>{nc.department}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(nc.status)}`}>
                            {nc.status}
                          </span>
                          <Button size="sm" variant="ghost">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <Button variant="outline" className="w-full">
                    View All NCs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-1">12</h3>
              <p className="text-blue-100">Total Audits This Year</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-1">8</h3>
              <p className="text-green-100">NCs Resolved</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-1">3</h3>
              <p className="text-orange-100">Open NCs</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Audits;
