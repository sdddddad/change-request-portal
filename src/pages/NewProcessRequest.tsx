
import React from 'react';
import Header from '@/components/Header';
import ChangeRequestForm from '@/components/ChangeRequestForm';

const NewProcessRequest = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ChangeRequestForm 
        type="new-process" 
        title="New Process Request Note" 
      />
    </div>
  );
};

export default NewProcessRequest;
