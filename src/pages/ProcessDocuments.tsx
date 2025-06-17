import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowLeft, Car, Wrench, Zap, Users, Award } from 'lucide-react';
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
    if (currentPath.length > 1) {
      const newPath = currentPath.slice(0, -1);
      setCurrentPath(newPath);
      
      // Determine the view based on the new path
      if (newPath.length === 1) {
        setCurrentView('main');
      } else {
        const lastSegment = newPath[newPath.length - 1];
        if (lastSegment === 'Recruitment') {
          setCurrentView('recruitment');
        } else if (lastSegment === 'Operations') {
          setCurrentView('operations');
        } else if (lastSegment === 'Repairs & Maintenance') {
          setCurrentView('repairs-maintenance');
        } else if (lastSegment === 'Workshop') {
          setCurrentView('workshop');
        } else if (lastSegment === 'HR') {
          setCurrentView('hr');
        } else if (lastSegment === 'Process Excellence') {
          setCurrentView('process-excellence');
        }
      }
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
        } else if (segment === 'Recruitment') {
          setCurrentView('recruitment');
        } else if (segment === 'Operations') {
          setCurrentView('operations');
        } else if (segment === 'Repairs & Maintenance') {
          setCurrentView('repairs-maintenance');
        } else if (segment === 'Workshop') {
          setCurrentView('workshop');
        } else if (segment === 'HR') {
          setCurrentView('hr');
        } else if (segment === 'Process Excellence') {
          setCurrentView('process-excellence');
        }
      } : undefined
    }));
  };

  const mainCategories = [
    {
      title: 'Recruitment',
      description: 'Hiring and onboarding processes',
      icon: Users,
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
      title: 'HR',
      description: 'Human Resources documentation',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      onClick: () => navigateTo('hr', 'HR')
    },
    {
      title: 'Process Excellence',
      description: 'Process improvement and excellence procedures',
      icon: Award,
      color: 'from-indigo-500 to-indigo-600',
      onClick: () => navigateTo('process-excellence', 'Process Excellence')
    },
    {
      title: 'Repairs & Maintenance',
      description: 'Vehicle repair and maintenance procedures',
      icon: Wrench,
      color: 'from-orange-500 to-orange-600',
      onClick: () => navigateTo('repairs-maintenance', 'Repairs & Maintenance')
    }
  ];

  const recruitmentCategories = [
    { name: 'Lead Management', onClick: () => navigateTo('lead-management', 'Lead Management') },
    { name: 'Connect with Driver', onClick: () => navigateTo('connect-driver', 'Connect with Driver') },
    { name: 'Calling & Pitch', onClick: () => navigateTo('calling-pitch', 'Calling & Pitch') },
    { name: 'Follow-up - Interested Customer', onClick: () => navigateTo('followup-interested', 'Follow-up - Interested Customer') },
    { name: 'Follow-up - Schedule', onClick: () => navigateTo('followup-schedule', 'Follow-up - Schedule') },
    { name: 'Follow-up - WalkIn', onClick: () => navigateTo('followup-walkin', 'Follow-up - WalkIn') },
    { name: 'Purge Process', onClick: () => navigateTo('purge-process', 'Purge Process') },
    { name: 'Capacity Planning', onClick: () => navigateTo('capacity-planning', 'Capacity Planning') }
  ];

  const leadManagementItems = [
    { name: 'Lead Sourcing', message: 'We will add soon as we finish developing' },
    { name: 'Lead Prioritization', message: 'We will add soon as we finish developing' },
    { name: 'Lead Upload', message: 'We will add soon as we finish developing' },
    { name: 'Campaign Set-Up', link: 'https://docs.google.com/document/u/0/d/1awncGOWff_26M22uN6ZJgKNyKSnGt8t34uwHMDOfmr8/edit' },
    { name: 'Campaign Activation Process', link: 'https://docs.google.com/document/u/0/d/1vWhWBQZVOuqtbKXsTOxOvFkcuzqByA4PIJN6WfuRvPU/edit' }
  ];

  const repairDocuments = [
    { name: 'Appointment Process', level: 'L3', docNo: 'EFPL-WOP-SAP-L3-1.0', link: 'https://docs.google.com/document/d/1yS6TaHjNZS-dOiPHHNiQeEvIaYHV3-8A95epVURxeco/edit?usp=sharing' },
    { name: 'Vehicle Inward Process', level: 'L3', docNo: 'EFPL-WOP-VIP-L3-1.0', link: 'https://docs.google.com/document/d/1WhsTcJaFbQWGhGV1g-z7-X7IvSC6Zz-dt45PLI4tOH8/edit?usp=sharing' },
    { name: 'Pre Repair Inspection Process', level: 'L3', docNo: 'EFPL-WOP-PRI-L3-1.0', link: 'https://docs.google.com/document/d/17tgFHWmQnOb-iQ8vqgdREC8OfHgPg-L4eurZdlX8qRo/edit?usp=sharing' },
    { name: 'Repair Process', level: 'L3', docNo: 'EFPL-WOP-RP-L3-1.0', link: 'https://docs.google.com/document/d/1HCuFnAdQnix_60mnSG6vrBWvgy2D36t6ZgENG2P7_Tg/edit?usp=sharing' },
    { name: 'Vendor Repairing Process', level: 'L3', docNo: 'EFPL-WOP-VRP-L3-1.0', link: 'https://docs.google.com/document/d/1Y7Kkww6RGt6R_xXigE3FBSQ5mQeHoDG0fuxL4aEjf4I/edit?usp=sharing' },
    { name: 'Post Repair Inspection Process', level: 'L3', docNo: 'EFPL-WOP-PRP-L3-1.0', link: 'https://docs.google.com/document/d/1KAAUQ5A7Cn3zQhM-7sASm981Ew3-HAFh-cgadCpBWDs/edit?usp=sharing' },
    { name: 'Job Closure And Handover Process', level: 'L3', docNo: 'EFPL-WOP-JCP-L3-1.0', link: 'https://docs.google.com/document/d/1gwQubI2jb4DULP_dK4RF6U7mdfoKXS0ixzaSNhL15do/edit?usp=sharing' },
    { name: 'Breakdown Process', level: 'L3', docNo: 'EFPL-WOP-BDP-L3-1.0', link: 'https://docs.google.com/document/d/17XDBZFvI3oTTCy76B1I-ErPtp1ogXD8B5biJkR-rrmo/edit?usp=sharing' },
    { name: 'Petrol Consumption Process (Proposed)', level: 'L3', docNo: 'EFPL-WOP-PCP-L3-1.0', link: 'https://docs.google.com/document/d/1YaRslEda4ryGLprjlf7j6r5bQ7SP8d4J60XaCfyuT04/edit?usp=sharing' },
    { name: 'Bill Approval Process - Vendor, Towing / RSA', level: 'L3', docNo: 'EFPL-WOP-BAP-L3-1.0', link: 'https://docs.google.com/document/d/17Y6I2I6vAtMIBeqb2J6fHO0731jdJD4iui86LRox6pk/edit?usp=sharing' },
    { name: 'Reconciliation Process - Petrol', level: 'L3', docNo: 'EFPL-WOP-RPP-L3-1.0', link: 'https://docs.google.com/document/d/1_mOQ5qeq5lqB0O-w3oj7Qg2w-XnFzxrkqkVPe64HYPQ/edit?usp=sharing' },
    { name: 'Petrol Procurement Process (Proposed)', level: 'L3', docNo: 'EFPL-WOP-PPP-L3-1.0', link: 'https://docs.google.com/document/d/1Avg_ZSa5IcOVu0WhTyWSPN9OR86Si-RWmUmrgOk7Yi0/edit?usp=sharing' },
    { name: 'Workshop Tools and Equipment Procurement process', level: 'L3', docNo: 'N/A', link: 'https://docs.google.com/document/d/1Irk4h7NEF0W8VNKYQ9j0yYxKyrHiU_0yjxWTiIw2tjo/edit?usp=sharing' },
    { name: 'Workshop Tools and Equipment Inventory process', level: 'L3', docNo: 'N/A', link: 'https://docs.google.com/document/d/1Um5yCwod16eXImkIag8-JgODebkl5YBHyjIrMEfC2C4/edit?usp=sharing' },
    { name: 'Repair and Maintenance of Workshop Tools and Equipment', level: 'L3', docNo: 'N/A', link: 'https://docs.google.com/document/d/1GK92Di1qDqWhoiP3Y8Bwx9Fb8wtRKYllccUld-aK7zc/edit?usp=sharing' }
  ];

  const spareDocuments = [
    { name: 'Spare Parts issue and consumption Process', level: 'L3', docNo: 'EFPL- WOP-SPI-L3-1.0', link: 'https://docs.google.com/document/d/1Zh2eXPe5fnvACnjQ_5GnCn762mzbF9fyUH6b3C9xp4Y/edit?usp=sharing' },
    { name: 'Spares Parts Threshold for Ordering Process', level: 'L3', docNo: 'EFPL-WOP-SPR-L3-1.0', link: 'https://docs.google.com/document/d/1rUHO8gqdY4Tb81sJYyiy1pz3wzIPzn4zdkjzL_MKnQo/edit?usp=sharing' },
    { name: 'Spares Parts Ordering Process', level: 'L3', docNo: 'EFPL-WOP-SPO-L3-1.0', link: 'https://docs.google.com/document/d/1tTRBnkSTeb71VTM6A8t57pYb6rXO6coolr2AYvrTIJg/edit?usp=sharing' },
    { name: 'Spares Part GRN Process', level: 'L3', docNo: 'EFPL-WOP-SPG-L3-1.0', link: 'https://docs.google.com/document/d/1i0Lo3WMJCiILT6TmKo49FYMF-__l6pJnOATSgR76VAs/edit?usp=sharing' },
    { name: 'Inter Store Stock Transfer', level: 'L3', docNo: 'EFPL-WOP-IST-L3-1.0', link: 'https://docs.google.com/document/d/1mgDn_7Mhy3zIVIOuO8TZzazLhy-qMkoMNv_ZADyOdCw/edit?usp=sharing' },
    { name: 'Bill Approval Process - Spare parts Vendor', level: 'L3', docNo: 'EFPL-WOP-BAP-L3-1.0', link: 'https://docs.google.com/document/d/1gJwr4B_m8iPsldrMsejg_F9Q8NsPUfuE8FyJ7AlPsjU/edit?usp=sharing' },
    { name: 'Old Parts Inward Exchange - Refurb / Warranty', level: 'L3', docNo: 'EFPL-WOP-SPG-L3-1.0', link: 'https://docs.google.com/document/d/1V3GNFVoPGUP6WsajCuvPtY5EURhgbNbXso-5nEP-ulQ/edit?usp=sharing' },
    { name: 'Spare Parts audit and Reconciliation Process (External)', level: 'L3', docNo: 'EFPL-WOP-SPR-L3-1.0', link: 'https://docs.google.com/document/d/1mMlt2V0TjZ7rWDPuifN48JbqoCEIYOnu45H-eaizv4k/edit?usp=sharing' },
    { name: 'Spare Parts audit and Reconciliation Process (Internal)', level: 'L3', docNo: 'N/A', link: 'https://docs.google.com/document/d/1LGS73CVer3aT2lLHGRV0At4kf0YQFB1v2RfG24lO-sI/edit?usp=sharing' },
    { name: 'Scraps Sale Process', level: 'L3', docNo: 'EFPL-WOP-SSP-L3-1.0', link: 'https://docs.google.com/document/d/1TpyVyAtz6iy9n3BhG_gQXpeO3tERLbNaev-eLCT3VJ0/edit?usp=sharing' }
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
            <th className="border border-gray-300 px-2 py-2 text-left text-sm font-medium w-1/2">
              <Car className="inline h-4 w-4 mr-1 text-blue-600" />
              Doc. Name
            </th>
            <th className="border border-gray-300 px-2 py-2 text-left text-sm font-medium w-1/6">Doc. Level</th>
            <th className="border border-gray-300 px-2 py-2 text-left text-sm font-medium w-1/4">Doc. No.</th>
            <th className="border border-gray-300 px-2 py-2 text-left text-sm font-medium w-1/6">Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-2 py-2 text-sm">
                <div className="break-words leading-tight max-w-[250px]">{doc.name}</div>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-center">{doc.level}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm break-words">{doc.docNo}</td>
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

  const renderRecruitmentView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        {recruitmentCategories.map((category) => (
          <Card 
            key={category.name}
            className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
            onClick={category.onClick}
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderLeadManagementView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        {leadManagementItems.map((item) => (
          <Card 
            key={item.name}
            className={`${item.link ? 'cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105' : 'opacity-75'} border-0 bg-white/80 backdrop-blur-sm overflow-hidden group`}
            onClick={item.link ? () => window.open(item.link, '_blank') : undefined}
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </CardTitle>
                  {item.message && (
                    <p className="text-sm text-gray-600 mt-2">{item.message}</p>
                  )}
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
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
      case 'recruitment':
        return renderRecruitmentView();
      case 'lead-management':
        return renderLeadManagementView();
      case 'connect-driver':
      case 'calling-pitch':
      case 'followup-interested':
      case 'followup-schedule':
      case 'followup-walkin':
      case 'purge-process':
      case 'capacity-planning':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Coming Soon</h3>
              <p className="text-gray-600">This section is under development and will be available soon.</p>
            </div>
          </div>
        );
      case 'hr':
      case 'process-excellence':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Coming Soon</h3>
              <p className="text-gray-600">This section is under development and will be available soon.</p>
            </div>
          </div>
        );
      case 'repairs-maintenance':
        return (
          <div className="space-y-6">
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
      case 'workshop':
        return (
          <div className="space-y-6">
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
      case 'operations':
        return (
          <div className="space-y-6">
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
      case 'repairs':
        return (
          <div className="space-y-6">
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
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-sem ibold mb-4 flex items-center">
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
        
        {currentPath.length > 1 && (
          <div className="mb-6">
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
        )}
        
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
