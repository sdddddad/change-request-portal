
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Video, FileText, Award } from 'lucide-react';
import Header from '@/components/Header';

const Learning = () => {
  const learningMaterials = [
    {
      id: 1,
      title: 'Employee Onboarding Guide',
      description: 'Complete guide for new employees',
      type: 'PDF',
      icon: FileText,
      color: 'text-red-600',
      url: '#'
    },
    {
      id: 2,
      title: 'Safety Training Module',
      description: 'Essential safety procedures and protocols',
      type: 'Video',
      icon: Video,
      color: 'text-blue-600',
      url: '#'
    },
    {
      id: 3,
      title: 'Quality Management System',
      description: 'Understanding QMS principles',
      type: 'Course',
      icon: BookOpen,
      color: 'text-green-600',
      url: '#'
    },
    {
      id: 4,
      title: 'Leadership Development',
      description: 'Building effective leadership skills',
      type: 'Training',
      icon: Award,
      color: 'text-purple-600',
      url: '#'
    },
    {
      id: 5,
      title: 'Process Excellence Training',
      description: 'Continuous improvement methodologies',
      type: 'Course',
      icon: BookOpen,
      color: 'text-orange-600',
      url: '#'
    },
    {
      id: 6,
      title: 'Communication Skills',
      description: 'Effective workplace communication',
      type: 'Video',
      icon: Video,
      color: 'text-cyan-600',
      url: '#'
    }
  ];

  const handleOpenDocument = (url: string, title: string) => {
    window.open(url, '_blank');
    console.log(`Opening ${title} in new tab`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Resources</h1>
          <p className="text-gray-600">Access training materials and learning resources to enhance your skills</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            Can't find what you're looking for? Contact the HR team or your supervisor for additional learning materials and training opportunities.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Contact HR
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Learning;
