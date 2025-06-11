
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Wrench, Users, Cog, TrendingUp, DollarSign, FolderOpen, Lock, Clock } from 'lucide-react';
import Header from '@/components/Header';
import { toast } from '@/hooks/use-toast';

const ProcessDocuments = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [showAccessDialog, setShowAccessDialog] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<string>('');
  const [accessStatus, setAccessStatus] = useState<'request' | 'pending'>('request');

  const documentSections = [
    {
      id: 'repairs',
      title: 'Repairs & Maintenance',
      icon: Wrench,
      color: 'from-red-500 to-red-600',
      subItems: [
        'Preventive Maintenance Procedures',
        'Equipment Repair Guidelines',
        'Maintenance Scheduling',
        'Safety Protocols'
      ]
    },
    {
      id: 'recruitment',
      title: 'Recruitment',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      subItems: [
        'Hiring Process',
        'Interview Guidelines',
        'Onboarding Procedures',
        'Background Verification'
      ]
    },
    {
      id: 'operations',
      title: 'Operations',
      icon: Cog,
      color: 'from-green-500 to-green-600',
      subItems: [
        'Standard Operating Procedures',
        'Quality Control',
        'Production Guidelines',
        'Safety Management'
      ]
    },
    {
      id: 'excellence',
      title: 'Process Excellence',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      subItems: [
        'Continuous Improvement',
        'Best Practices',
        'Process Optimization',
        'Performance Metrics'
      ]
    },
    {
      id: 'finance',
      title: 'Finance',
      icon: DollarSign,
      color: 'from-yellow-500 to-yellow-600',
      subItems: [
        'Budget Management',
        'Expense Procedures',
        'Financial Reporting',
        'Audit Guidelines'
      ]
    },
    {
      id: 'common',
      title: 'Common Documents',
      icon: FolderOpen,
      color: 'from-gray-500 to-gray-600',
      subItems: [
        'Company Policies',
        'Employee Handbook',
        'Code of Conduct',
        'Emergency Procedures'
      ]
    }
  ];

  const handleDocumentClick = (sectionId: string, document: string) => {
    // Check if user has access (simulate access control)
    const hasAccess = sectionId === 'common' || Math.random() > 0.5;
    
    if (hasAccess) {
      toast({
        title: "Document Opened",
        description: `Opening ${document}...`
      });
      // Open document logic here
    } else {
      setSelectedDocument(document);
      setAccessStatus('request');
      setShowAccessDialog(true);
    }
  };

  const handleAccessRequest = () => {
    setAccessStatus('pending');
    toast({
      title: "Access Requested",
      description: "Your access request has been submitted for approval"
    });
    setShowAccessDialog(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Process Documents</h1>
          <p className="text-gray-600">Access process documentation and procedures by category</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentSections.map((section) => (
            <div
              key={section.id}
              className="relative"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <Card className="h-full cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${section.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <section.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {section.subItems.length} documents available
                  </CardDescription>
                </CardContent>

                {/* Hover dropdown */}
                {hoveredSection === section.id && (
                  <div className="absolute top-full left-0 right-0 bg-white border shadow-lg rounded-b-lg z-10 animate-fade-in">
                    <div className="p-4 space-y-2">
                      {section.subItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors"
                          onClick={() => handleDocumentClick(section.id, item)}
                        >
                          <span className="text-sm text-gray-700">{item}</span>
                          {section.id !== 'common' && Math.random() > 0.5 && (
                            <Lock className="h-4 w-4 text-gray-400" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </main>

      {/* Access Request Dialog */}
      <Dialog open={showAccessDialog} onOpenChange={setShowAccessDialog}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              {accessStatus === 'request' ? (
                <>
                  <Lock className="h-5 w-5 text-red-500" />
                  <span>Access Required</span>
                </>
              ) : (
                <>
                  <Clock className="h-5 w-5 text-yellow-500" />
                  <span>Waiting for Approval</span>
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              {accessStatus === 'request'
                ? `You don't have access to "${selectedDocument}". Would you like to request access?`
                : `Your request for access to "${selectedDocument}" is pending approval.`
              }
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setShowAccessDialog(false)}>
              Close
            </Button>
            {accessStatus === 'request' && (
              <Button onClick={handleAccessRequest} className="bg-blue-600 hover:bg-blue-700">
                Request Access
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProcessDocuments;
