
import { useState } from 'react';
import LandingPage from '../components/LandingPage';
import Questionnaire from '../components/Questionnaire';
import BlueprintResults from '../components/BlueprintResults';

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
  const [currentStep, setCurrentStep] = useState<'landing' | 'questionnaire' | 'results'>('landing');
  const [questionnaireData, setQuestionnaireData] = useState<QuestionnaireData | null>(null);
  const [blueprintData, setBlueprintData] = useState<any>(null);

  const handleStartJourney = () => {
    setCurrentStep('questionnaire');
  };

  const handleQuestionnaireComplete = (data: QuestionnaireData) => {
    setQuestionnaireData(data);
    setCurrentStep('results');
  };

  const handleBackToLanding = () => {
    setCurrentStep('landing');
    setQuestionnaireData(null);
    setBlueprintData(null);
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
      {currentStep === 'results' && questionnaireData && (
        <BlueprintResults 
          questionnaireData={questionnaireData}
          onBack={handleBackToLanding}
        />
      )}
    </div>
  );
};

export default Index;
