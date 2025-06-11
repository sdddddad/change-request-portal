
import React from 'react';
import Header from '@/components/Header';
import ChangeRequestForm from '@/components/ChangeRequestForm';

const DocumentChangeRequest = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ChangeRequestForm 
        type="document-change" 
        title="Document Change Request Note" 
      />
    </div>
  );
};

export default DocumentChangeRequest;
