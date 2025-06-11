
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Upload, Link as LinkIcon, Car } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface ChangeRequestFormProps {
  type: 'new-process' | 'deviation' | 'document-change';
  title: string;
}

const ChangeRequestForm: React.FC<ChangeRequestFormProps> = ({ type, title }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    // Step 1: Basic Details
    requestTitle: '',
    department: '',
    urgency: '',
    description: '',
    
    // Step 2: Document Details
    documentType: '',
    documentTitle: '',
    currentVersion: '',
    proposedChanges: '',
    justification: '',
    
    // Step 3: Distribution
    notificationList: '',
    approvers: '',
    implementationDate: '',
    
    // Step 4: Attachments
    attachments: [],
    links: ''
  });

  const steps = [
    { number: 1, title: 'Basic Details', description: 'Request information' },
    { number: 2, title: 'Document Details', description: 'Document specifications' },
    { number: 3, title: 'Distribution', description: 'Notifications & approvals' },
    { number: 4, title: 'Review & Submit', description: 'Final review' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateTicketId = () => {
    const prefix = type === 'new-process' ? 'NPR' : type === 'deviation' ? 'PDN' : 'DCR';
    const number = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${prefix}-${number}`;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setShowAnimation(true);
    
    // Simulate form submission
    setTimeout(() => {
      const newTicketId = generateTicketId();
      setTicketId(newTicketId);
      setIsSubmitting(false);
      
      toast({
        title: "Request Submitted Successfully!",
        description: `Your ticket ID is ${newTicketId}`
      });
    }, 3000);
  };

  const progressPercentage = (currentStep / 4) * 100;

  if (showAnimation && isSubmitting) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="relative">
                <div className="w-32 h-16 mx-auto bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="h-8 w-8 text-blue-600 animate-bounce" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing Your Request</h3>
            <p className="text-gray-600">Please wait while we submit your change request...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (ticketId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 text-green-600">✓</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Submitted Successfully!</h3>
            <p className="text-gray-600 mb-4">Your ticket ID is:</p>
            <div className="text-2xl font-bold text-blue-600 mb-6">{ticketId}</div>
            
            <div className="space-y-3">
              <Button 
                onClick={() => navigate('/home')}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Go to Home
              </Button>
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
                className="w-full"
              >
                Raise Another Request
              </Button>
              <Button 
                onClick={() => {
                  localStorage.removeItem('employee');
                  navigate('/');
                }}
                variant="ghost"
                className="w-full text-red-600 hover:text-red-700"
              >
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="requestTitle">Request Title *</Label>
              <Input
                id="requestTitle"
                value={formData.requestTitle}
                onChange={(e) => handleInputChange('requestTitle', e.target.value)}
                placeholder="Enter a brief title for your request"
              />
            </div>
            <div>
              <Label htmlFor="department">Department *</Label>
              <Select onValueChange={(value) => handleInputChange('department', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your department" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="it">Information Technology</SelectItem>
                  <SelectItem value="quality">Quality Assurance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="urgency">Urgency Level *</Label>
              <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Provide a detailed description of your request"
                rows={4}
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="documentType">Document Type</Label>
              <Select onValueChange={(value) => handleInputChange('documentType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="procedure">Procedure</SelectItem>
                  <SelectItem value="policy">Policy</SelectItem>
                  <SelectItem value="guideline">Guideline</SelectItem>
                  <SelectItem value="form">Form</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="documentTitle">Document Title</Label>
              <Input
                id="documentTitle"
                value={formData.documentTitle}
                onChange={(e) => handleInputChange('documentTitle', e.target.value)}
                placeholder="Enter document title"
              />
            </div>
            <div>
              <Label htmlFor="currentVersion">Current Version</Label>
              <Input
                id="currentVersion"
                value={formData.currentVersion}
                onChange={(e) => handleInputChange('currentVersion', e.target.value)}
                placeholder="e.g., v1.0, v2.1"
              />
            </div>
            <div>
              <Label htmlFor="proposedChanges">Proposed Changes</Label>
              <Textarea
                id="proposedChanges"
                value={formData.proposedChanges}
                onChange={(e) => handleInputChange('proposedChanges', e.target.value)}
                placeholder="Describe the proposed changes in detail"
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="justification">Justification</Label>
              <Textarea
                id="justification"
                value={formData.justification}
                onChange={(e) => handleInputChange('justification', e.target.value)}
                placeholder="Explain why these changes are necessary"
                rows={3}
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="notificationList">Notification List</Label>
              <Textarea
                id="notificationList"
                value={formData.notificationList}
                onChange={(e) => handleInputChange('notificationList', e.target.value)}
                placeholder="Enter email addresses of people to notify (comma-separated)"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="approvers">Required Approvers</Label>
              <Textarea
                id="approvers"
                value={formData.approvers}
                onChange={(e) => handleInputChange('approvers', e.target.value)}
                placeholder="Enter email addresses of required approvers (comma-separated)"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="implementationDate">Proposed Implementation Date</Label>
              <Input
                id="implementationDate"
                type="date"
                value={formData.implementationDate}
                onChange={(e) => handleInputChange('implementationDate', e.target.value)}
              />
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Request Summary</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Title:</strong> {formData.requestTitle}</div>
                <div><strong>Department:</strong> {formData.department}</div>
                <div><strong>Urgency:</strong> {formData.urgency}</div>
                <div><strong>Type:</strong> {title}</div>
              </div>
            </div>
            
            <div>
              <Label>Attachments (Max 3MB each)</Label>
              <div className="mt-2 space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Files
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <LinkIcon className="h-4 w-4 mr-2" />
                  Add Links
                </Button>
              </div>
            </div>
            
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                Please review all information before submitting. Once submitted, you will receive a ticket ID for tracking.
              </p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/change-management')}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Change Management
            </Button>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-600">Complete the form below to submit your request</p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <CardTitle>Step {currentStep} of 4</CardTitle>
                  <span className="text-sm text-gray-500">{Math.round(progressPercentage)}% Complete</span>
                </div>
                <Progress value={progressPercentage} className="w-full" />
                <div className="flex justify-between text-xs text-gray-500">
                  {steps.map((step) => (
                    <div key={step.number} className={`text-center ${currentStep >= step.number ? 'text-blue-600' : ''}`}>
                      <div className="font-medium">{step.title}</div>
                      <div>{step.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {renderStepContent()}
              
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                
                {currentStep === 4 ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Submit Request
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChangeRequestForm;
