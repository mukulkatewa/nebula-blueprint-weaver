
import { useState } from 'react';
import LandingPage from '../components/LandingPage';
import Questionnaire from '../components/Questionnaire';
import DynamicBlueprintResults from '../components/DynamicBlueprintResults';
import ApiKeyPrompt from '../components/ApiKeyPrompt';

export type QuestionnaireData = {
  businessOverview: string;
  currentAITools: string;
  aiUsageAreas: string;
  aiSpending: string;
  effectiveAITools: string;
  technologyInfrastructure: string;
  aiTeamMembers: string;
  sensitiveInformation: string;
  complianceRequirements: string;
};

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'landing' | 'questionnaire' | 'apiKeyPrompt' | 'results'>('landing');
  const [questionnaireData, setQuestionnaireData] = useState<QuestionnaireData | null>(null);
  const [apiKey, setApiKey] = useState<string>(() => localStorage.getItem('pplx-api-key') || '');

  const handleStartJourney = () => {
    setCurrentStep('questionnaire');
  };

  const handleQuestionnaireComplete = (data: QuestionnaireData) => {
    setQuestionnaireData(data);
    if (!apiKey) {
      setCurrentStep('apiKeyPrompt');
    } else {
      setCurrentStep('results');
    }
  };
  
  const handleApiKeySubmit = (key: string) => {
    localStorage.setItem('pplx-api-key', key);
    setApiKey(key);
    setCurrentStep('results');
  };

  const handleBackToLanding = () => {
    setCurrentStep('landing');
    setQuestionnaireData(null);
  };
  
  const handleBackToQuestionnaire = () => {
    setCurrentStep('questionnaire');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      {currentStep === 'landing' && (
        <LandingPage onStartJourney={handleStartJourney} />
      )}
      {currentStep === 'questionnaire' && (
        <Questionnaire 
          onComplete={handleQuestionnaireComplete}
          onBack={handleBackToLanding}
        />
      )}
      {currentStep === 'apiKeyPrompt' && (
        <ApiKeyPrompt 
          onSubmit={handleApiKeySubmit}
          onBack={handleBackToQuestionnaire}
        />
      )}
      {currentStep === 'results' && questionnaireData && (
        <DynamicBlueprintResults 
          questionnaireData={questionnaireData}
          apiKey={apiKey}
          onBack={handleBackToLanding}
        />
      )}
    </div>
  );
};

export default Index;
