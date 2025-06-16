
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChangeRequestForm from '@/components/ChangeRequestForm';

const ProcessDeviation = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-grow">
        <ChangeRequestForm 
          type="deviation" 
          title="Process Deviation Note" 
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProcessDeviation;
