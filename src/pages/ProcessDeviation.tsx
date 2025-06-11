
import React from 'react';
import Header from '@/components/Header';
import ChangeRequestForm from '@/components/ChangeRequestForm';

const ProcessDeviation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ChangeRequestForm 
        type="deviation" 
        title="Process Deviation Note" 
      />
    </div>
  );
};

export default ProcessDeviation;
