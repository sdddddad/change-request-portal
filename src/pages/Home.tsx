
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, GraduationCap, Settings, ClipboardList, Search, Car } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const navigate = useNavigate();

  const handleTrackRequestClick = () => {
    window.open('https://docs.google.com/spreadsheets/d/1RAWCY4qPxScflYlHRYdTcCNp1CyXKDrOgAzf9qf0hJ0/edit?usp=sharing', '_blank');
  };

  const menuItems = [
    {
      title: 'Process Documents',
      description: 'Access process documentation and procedures',
      icon: FileText,
      path: '/process-documents',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Learning',
      description: 'Training materials and learning resources',
      icon: GraduationCap,
      path: '/learning',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Change Management',
      description: 'Submit and track change requests',
      icon: Settings,
      path: '/change-management',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Audits & NCs',
      description: 'Audit reports and non-conformance tracking',
      icon: ClipboardList,
      path: '/audits',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Track Your Request',
      description: 'View request ID, date, and approval status',
      icon: Search,
      path: null,
      color: 'from-red-500 to-red-600',
      onClick: handleTrackRequestClick
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8 flex items-center space-x-3">
          <Car className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to PDMS</h1>
            <p className="text-gray-600">Choose an option below to get started</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {menuItems.map((item) => (
            <Card 
              key={item.title}
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
              onClick={() => item.onClick ? item.onClick() : navigate(item.path)}
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`} />
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
