
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, BookOpen, Car } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Learning = () => {
  const [showContactDialog, setShowContactDialog] = useState(false);

  const learningMaterials = [
    {
      id: 1,
      title: 'Lean Basic (PPT)',
      description: 'Complete guide for problem solving by Ganesh Jatadharan',
      type: 'PPT',
      icon: BookOpen,
      color: 'text-blue-600',
      url: 'https://docs.google.com/presentation/d/1YhxM8qSL3BKpXbKeumszsRHzWJgymbR0Z49dn9_DQzk/edit?usp=sharing'
    },
    {
      id: 2,
      title: 'ASPICE - Development Cycle (PPT)',
      description: 'Development lifecycle presentation by Shaik Mohammed Altaf',
      type: 'PPT',
      icon: BookOpen,
      color: 'text-green-600',
      url: 'https://docs.google.com/presentation/d/1-we4FW1ufJhIOK9F9lpBm4FkVpjYm4OwJioDQn07ldk/edit?usp=sharing'
    }
  ];

  const handleOpenDocument = (url: string, title: string) => {
    window.open(url, '_blank');
    console.log(`Opening ${title} in new tab`);
  };

  const handleContactAdmin = () => {
    setShowContactDialog(true);
  };

  const handleCloseDialog = () => {
    setShowContactDialog(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8 flex items-center space-x-3">
          <Car className="h-8 w-8 text-green-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Resources</h1>
            <p className="text-gray-600">Access training materials and learning resources to enhance your skills</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {learningMaterials.map((material) => (
            <Card 
              key={material.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                      <material.icon className={`h-6 w-6 ${material.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors leading-tight">
                        {material.title}
                      </CardTitle>
                      <div className="mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full bg-gray-100 ${material.color} font-medium`}>
                          {material.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-4">
                  {material.description}
                </CardDescription>
                <Button 
                  onClick={() => handleOpenDocument(material.url, material.title)}
                  className="w-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"
                  variant="outline"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Resource
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Need More Resources?</h3>
          <p className="text-blue-800 mb-4">
            Learning is a never-ending story. We will add more modules in the future. Can't find what you're looking for? Contact the admin for additional learning materials and training opportunities.
          </p>
          <Button 
            onClick={handleContactAdmin}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Contact Admin
          </Button>
        </div>
      </main>

      {/* Contact Admin Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Contact Admin</DialogTitle>
            <DialogDescription>
              Please send mail to processexcellence@everestfleet.com
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2 mt-4">
            <Button onClick={handleCloseDialog} className="bg-blue-600 hover:bg-blue-700">
              Thank You
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Learning;
