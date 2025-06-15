
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { QuestionnaireData } from '../pages/Index';

interface QuestionnaireProps {
  onComplete: (data: QuestionnaireData) => void;
  onBack: () => void;
}

const questions = [
  {
    id: 'businessOverview',
    title: 'Business Overview',
    question: 'What kind of business do you run, and how big is your team or company?',
    placeholder: 'Example: We run a mid-sized e-commerce platform specializing in sustainable fashion. We have around 45 employees and generate approximately $2M in annual revenue.'
  },
  {
    id: 'currentAITools',
    title: 'Current AI Tools',
    question: 'Are you currently using any AI tools or services in your business?',
    placeholder: 'Example: Yes, we use Zendesk chatbots for customer service ($89/month), Mailchimp for email automation ($299/month), and Google Analytics with AI insights (free tier).'
  },
  {
    id: 'aiUsageAreas',
    title: 'AI Usage Areas',
    question: 'Where in your business are you currently using AI, or thinking about using it?',
    placeholder: 'Example: Currently using AI in customer service and email marketing. Considering AI for inventory forecasting, personalized product recommendations, and social media content generation.'
  },
  {
    id: 'aiSpending',
    title: 'AI Investment',
    question: 'Around how much do you spend on AI tools, software, or related staff every month or year?',
    placeholder: 'Example: Approximately $1,200 per month on AI tools and subscriptions, plus one part-time data analyst salary ($4,000/month) who works with our analytics and automation.'
  },
  {
    id: 'effectiveAITools',
    title: 'AI Effectiveness',
    question: 'Are there any AI tools or solutions you\'re using that are clearly helping your business grow?',
    placeholder: 'Example: Our email automation has increased conversion rates by 25%, and the chatbot handles 60% of customer queries. However, our inventory forecasting tool hasn\'t been as accurate as hoped.'
  },
  {
    id: 'technologyInfrastructure',
    title: 'Technology Infrastructure',
    question: 'Where does your technology live — is it on the cloud, on your own servers, or a mix of both?',
    placeholder: 'Example: Primarily cloud-based using AWS for our main platform, Google Workspace for collaboration, and Shopify for e-commerce. We have minimal on-premise infrastructure.'
  },
  {
    id: 'aiTeamMembers',
    title: 'AI Team & Expertise',
    question: 'Do you have any team members who work directly with AI or machine learning?',
    placeholder: 'Example: We have one data analyst who works with AI tools and analytics, and our marketing manager has experience with AI-powered marketing platforms. No dedicated ML engineers yet.'
  },
  {
    id: 'sensitiveInformation',
    title: 'Data Sensitivity',
    question: 'Do you work with any sensitive information, like customer details, payment data, or health records?',
    placeholder: 'Example: Yes, we handle customer personal information, payment data through Stripe, and shipping addresses. We also store purchase history and preferences for recommendations.'
  },
  {
    id: 'complianceRequirements',
    title: 'Compliance & Regulations',
    question: 'Are there any legal or industry rules you need to follow when it comes to handling data?',
    placeholder: 'Example: We need to comply with GDPR for our European customers, CCPA for California residents, and PCI DSS for payment processing. We also follow general e-commerce data protection best practices.'
  }
];

const Questionnaire = ({ onComplete, onBack }: QuestionnaireProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onComplete(answers as QuestionnaireData);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const isAnswered = answers[questions[currentQuestion].id]?.trim().length > 0;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <Star className="w-1 h-1 text-blue-200 fill-current" />
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Nebula Navigator Questionnaire
          </h1>
          <p className="text-blue-100 text-lg">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/80 border-blue-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-100 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {currentQuestion + 1}
                </div>
                {questions[currentQuestion].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {questions[currentQuestion].question}
              </p>
              
              <Textarea 
                value={answers[questions[currentQuestion].id] || ''}
                onChange={(e) => handleAnswerChange(questions[currentQuestion].id, e.target.value)}
                placeholder={questions[currentQuestion].placeholder}
                className="min-h-32 bg-gray-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
              />

              {/* Navigation buttons */}
              <div className="flex justify-between items-center pt-6">
                <Button
                  onClick={currentQuestion === 0 ? onBack : handlePrevious}
                  variant="outline"
                  className="border-blue-500/50 text-blue-200 hover:bg-blue-500/20"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {currentQuestion === 0 ? 'Back to Launch' : 'Previous'}
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentQuestion === questions.length - 1 ? 'Generate Blueprint' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
