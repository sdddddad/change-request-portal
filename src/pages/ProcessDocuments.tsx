
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowLeft, Car, Wrench, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const ProcessDocuments = () => {
  const [currentView, setCurrentView] = useState('main');
  const [currentPath, setCurrentPath] = useState(['Process Documents']);

  const navigateTo = (view: string, pathSegment: string) => {
    setCurrentView(view);
    if (view === 'main') {
      setCurrentPath(['Process Documents']);
    } else {
      const newPath = [...currentPath];
      if (!newPath.includes(pathSegment)) {
        newPath.push(pathSegment);
      }
      setCurrentPath(newPath);
    }
  };

  const goBack = () => {
    if (currentView === 'workshop') {
      navigateTo('repairs-maintenance', 'Repairs & Maintenance');
      setCurrentPath(['Process Documents', 'Repairs & Maintenance']);
    } else if (currentView === 'repairs' || currentView === 'spares') {
      navigateTo('workshop', 'Workshop');
      setCurrentPath(['Process Documents', 'Repairs & Maintenance', 'Workshop']);
    } else if (currentView === 'ev-process') {
      navigateTo('operations', 'Operations');
      setCurrentPath(['Process Documents', 'Operations']);
    } else {
      navigateTo('main', '');
    }
  };

  const getBreadcrumbItems = () => {
    return currentPath.map((segment, index) => ({
      label: segment,
      onClick: index < currentPath.length - 1 ? () => {
        const newPath = currentPath.slice(0, index + 1);
        setCurrentPath(newPath);
        
        if (index === 0) {
          setCurrentView('main');
        } else if (segment === 'Repairs & Maintenance') {
          setCurrentView('repairs-maintenance');
        } else if (segment === 'Workshop') {
          setCurrentView('workshop');
        } else if (segment === 'Operations') {
          setCurrentView('operations');
        }
      } : undefined
    }));
  };

  const mainCategories = [
    {
      title: 'Recruitment',
      description: 'Hiring and onboarding processes',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      onClick: () => navigateTo('recruitment', 'Recruitment')
    },
    {
      title: 'Operations',
      description: 'Operational procedures and workflows',
      icon: Car,
      color: 'from-green-500 to-green-600',
      onClick: () => navigateTo('operations', 'Operations')
    },
    {
      title: 'FSE',
      description: 'Field Service Engineer documentation',
      icon: Wrench,
      color: 'from-purple-500 to-purple-600',
      onClick: () => navigateTo('fse', 'FSE')
    },
    {
      title: 'Repairs & Maintenance',
      description: 'Vehicle repair and maintenance procedures',
      icon: Wrench,
      color: 'from-orange-500 to-orange-600',
      onClick: () => navigateTo('repairs-maintenance', 'Repairs & Maintenance')
    }
  ];

  const repairDocuments = [
    { name: 'Appointment Process', level: 'L3', docNo: 'EFPL-WOP-SAP-L3-1.0', link: '#' },
    { name: 'Vehicle Inward Process', level: 'L3', docNo: 'EFPL-WOP-VIP-L3-1.0', link: '#' },
    { name: 'Pre Repair Inspection Process', level: 'L3', docNo: 'EFPL-WOP-PRI-L3-1.0', link: '#' },
    { name: 'Repair Process', level: 'L3', docNo: 'EFPL-WOP-RP-L3-1.0', link: '#' },
    { name: 'Vendor Repairing Process', level: 'L3', docNo: 'EFPL-WOP-VRP-L3-1.0', link: '#' },
    { name: 'Post Repair Inspection Process', level: 'L3', docNo: 'EFPL-WOP-PRP-L3-1.0', link: '#' },
    { name: 'Job Closure And Handover Process', level: 'L3', docNo: 'EFPL-WOP-JCP-L3-1.0', link: '#' },
    { name: 'Breakdown Process', level: 'L3', docNo: 'EFPL-WOP-BDP-L3-1.0', link: '#' },
    { name: 'Petrol Consumption Process (Proposed)', level: 'L3', docNo: 'EFPL-WOP-PCP-L3-1.0', link: '#' },
    { name: 'Bill Approval Process - Vendor, Towing / RSA', level: 'L3', docNo: 'EFPL-WOP-BAP-L3-1.0', link: '#' },
    { name: 'Reconciliation Process - Petrol', level: 'L3', docNo: 'EFPL-WOP-RPP-L3-1.0', link: '#' },
    { name: 'Petrol Procurement Process (Proposed)', level: 'L3', docNo: 'EFPL-WOP-PPP-L3-1.0', link: '#' },
    { name: 'Workshop Tools and Equipment Procurement process', level: 'L3', docNo: 'N/A', link: '#' },
    { name: 'Workshop Tools and Equipment Inventory process', level: 'L3', docNo: 'N/A', link: '#' },
    { name: 'Repair and Maintenance of Workshop Tools and Equipment', level: 'L3', docNo: 'N/A', link: '#' }
  ];

  const spareDocuments = [
    { name: 'Spare Parts issue and consumption Process', level: 'L3', docNo: 'EFPL- WOP-SPI-L3-1.0', link: '#' },
    { name: 'Spares Parts Threshold for Ordering Process', level: 'L3', docNo: 'EFPL-WOP-SPR-L3-1.0', link: '#' },
    { name: 'Spares Parts Ordering Process', level: 'L3', docNo: 'EFPL-WOP-SPO-L3-1.0', link: '#' },
    { name: 'Spares Part GRN Process', level: 'L3', docNo: 'EFPL-WOP-SPG-L3-1.0', link: '#' },
    { name: 'Inter Store Stock Transfer', level: 'L3', docNo: 'EFPL-WOP-IST-L3-1.0', link: '#' },
    { name: 'Bill Approval Process - Spare parts Vendor', level: 'L3', docNo: 'EFPL-WOP-BAP-L3-1.0', link: '#' },
    { name: 'Old Parts Inward Exchange - Refurb / Warranty', level: 'L3', docNo: 'EFPL-WOP-SPG-L3-1.0', link: '#' },
    { name: 'Spare Parts audit and Reconciliation Process (External)', level: 'L3', docNo: 'EFPL-WOP-SPR-L3-1.0', link: '#' },
    { name: 'Spare Parts audit and Reconciliation Process (Internal)', level: 'L3', docNo: 'N/A', link: '#' },
    { name: 'Scraps Sale Process', level: 'L3', docNo: 'EFPL-WOP-SSP-L3-1.0', link: '#' }
  ];

  const evDocuments = [
    { name: 'Car Readiness -EV', level: 'L3', docNo: 'EFPL-FOP-EVCR-L3-1.0', link: '#' },
    { name: 'Car CheckIn Process -EV', level: 'L3', docNo: 'EFPL-FOP-EVCI-L3-1.0', link: '#' },
    { name: 'EV Audit Process', level: 'L3', docNo: 'EFPL-FOP-ECA-L3- 1.0', link: '#' },
    { name: 'Car Allocation-EV', level: 'L3', docNo: 'EFPL-FOP-CAP-L3-1.0', link: '#' },
    { name: 'Driver Readiness', level: 'L3', docNo: 'EFPL-FOP-EVDR-L3-1.0', link: '#' },
    { name: 'CAR Charging -EV', level: 'L3', docNo: 'EFPL-FOP-ECC-L3-1.0', link: '#' },
    { name: 'Vehicle Check out -EV', level: 'L3', docNo: 'EFPL-FOP-CAP-L3-1.0', link: '#' },
    { name: 'Car Drop Off Process -EV', level: 'L3', docNo: 'EFPL-FOP-EVCI-L3-1.0', link: '#' },
    { name: 'Driver_Performance_Monitoring', level: 'L3', docNo: 'EFPL-FOP-DRM-L3-1.0', link: '#' },
    { name: 'Nerve Centre Ticket Count Optimisation Process', level: 'L3', docNo: 'EFPL-FOP-NTR-L3-1.0', link: '#' }
  ];

  const renderDocumentTable = (documents: typeof repairDocuments) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-2 py-2 text-left text-sm font-medium">
              <Car className="inline h-4 w-4 mr-1 text-blue-600" />
              Doc. Name
            </th>
            <th className="border border-gray-300 px-2 py-2 text-left text-sm font-medium">Doc. Level</th>
            <th className="border border-gray-300 px-2 py-2 text-left text-sm font-medium">Doc. No.</th>
            <th className="border border-gray-300 px-2 py-2 text-left text-sm font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-2 py-2 text-sm max-w-[200px]">
                <div className="break-words leading-tight">{doc.name}</div>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-center">{doc.level}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm">{doc.docNo}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm">
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open(doc.link, '_blank')}
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderMainView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      {mainCategories.map((category) => (
        <Card 
          key={category.title}
          className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
          onClick={category.onClick}
        >
          <div className={`h-2 bg-gradient-to-r ${category.color}`} />
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {category.title}
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 leading-relaxed">
              {category.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderRepairsMaintenanceView = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={goBack}
          className="hover:bg-gray-100"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </div>
      
      <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
        onClick={() => navigateTo('workshop', 'Workshop')}
      >
        <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-600" />
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white group-hover:scale-110 transition-transform duration-300">
              <Wrench className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                Workshop
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 leading-relaxed">
            Workshop repair and spare parts processes
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );

  const renderWorkshopView = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={goBack}
          className="hover:bg-gray-100"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <Card 
          className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
          onClick={() => navigateTo('repairs', 'Repairs')}
        >
          <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                <Wrench className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  Repairs
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 leading-relaxed">
              Vehicle repair processes and procedures
            </CardDescription>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
          onClick={() => navigateTo('spares', 'Spares')}
        >
          <div className="h-2 bg-gradient-to-r from-green-500 to-green-600" />
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white group-hover:scale-110 transition-transform duration-300">
                <Car className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  Spares
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 leading-relaxed">
              Spare parts management and inventory
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderOperationsView = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={goBack}
          className="hover:bg-gray-100"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </div>
      
      <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
        onClick={() => navigateTo('ev-process', 'EV Process')}
      >
        <div className="h-2 bg-gradient-to-r from-green-500 to-green-600" />
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                EV Process
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 leading-relaxed">
            Electric vehicle operational processes
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );

  const renderCurrentView = () => {
    switch (currentView) {
      case 'repairs-maintenance':
        return renderRepairsMaintenanceView();
      case 'workshop':
        return renderWorkshopView();
      case 'operations':
        return renderOperationsView();
      case 'repairs':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={goBack}
                className="hover:bg-gray-100"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Wrench className="h-5 w-5 mr-2 text-blue-600" />
                Repair Processes
              </h3>
              {renderDocumentTable(repairDocuments)}
            </div>
          </div>
        );
      case 'spares':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={goBack}
                className="hover:bg-gray-100"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Car className="h-5 w-5 mr-2 text-green-600" />
                Spare Parts Processes
              </h3>
              {renderDocumentTable(spareDocuments)}
            </div>
          </div>
        );
      case 'ev-process':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={goBack}
                className="hover:bg-gray-100"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-green-600" />
                EV Process Documents
              </h3>
              {renderDocumentTable(evDocuments)}
            </div>
          </div>
        );
      default:
        return renderMainView();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Breadcrumb items={getBreadcrumbItems()} />
        
        <div className="mb-8 flex items-center space-x-3">
          <Car className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Process Documents</h1>
            <p className="text-gray-600">Access process documentation and standard operating procedures</p>
          </div>
        </div>

        {renderCurrentView()}
      </main>

      <Footer />
    </div>
  );
};

export default ProcessDocuments;
