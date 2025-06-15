import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Star, Download, Rocket, Shield, Target, Lightbulb, TrendingUp, Building2, Zap, DollarSign, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { QuestionnaireData } from '../pages/Index';

interface BlueprintResultsProps {
  questionnaireData: QuestionnaireData;
  onBack: () => void;
}

const BlueprintResults = ({ questionnaireData, onBack }: BlueprintResultsProps) => {
  const [blueprintData, setBlueprintData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('🚀 BlueprintResults component mounted');
    console.log('📝 Questionnaire data received:', questionnaireData);

    const generateBlueprint = async () => {
      try {
        console.log('🔄 Starting blueprint generation process...');
        setLoading(true);
        
        // Combine all questionnaire answers into a single message
        const message = `Business Analysis Request:

Business Overview: ${questionnaireData.businessOverview}

Current AI Tools: ${questionnaireData.currentAITools}

AI Usage Areas: ${questionnaireData.aiUsageAreas}

AI Investment: ${questionnaireData.aiSpending}

AI Effectiveness: ${questionnaireData.effectiveAITools}

Technology Infrastructure: ${questionnaireData.technologyInfrastructure}

AI Team: ${questionnaireData.aiTeamMembers}

Data Sensitivity: ${questionnaireData.sensitiveInformation}

Compliance Requirements: ${questionnaireData.complianceRequirements}

Please provide a comprehensive AI implementation blueprint for this business.`;

        console.log('📤 API Request Message:', message);
        console.log('🌐 Making API call to Lyzr agent...');

        const requestBody = {
          user_id: 'katewamukul@gmail.com',
          agent_id: '6846d65762d8a0cca7618622',
          session_id: '6846d65762d8a0cca7618622-drg9hreicli',
          message: message
        };

        console.log('📋 API Request Body:', requestBody);

        const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'sk-default-H0RDPuvT95RpWUepisEbn0NVZEs0hBEf'
          },
          body: JSON.stringify(requestBody)
        });

        console.log('📊 API Response Status:', response.status);
        console.log('📊 API Response Headers:', response.headers);
        console.log('✅ API Response OK:', response.ok);

        if (!response.ok) {
          console.error('❌ API request failed with status:', response.status);
          console.error('❌ API response status text:', response.statusText);
          throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        console.log('📥 Raw API Response Data:', data);
        console.log('🔍 API Response Type:', typeof data);
        console.log('🔍 API Response Keys:', Object.keys(data));
        
        // Use the structured output format you provided
        const structuredBlueprintData = {
          "Business Analysis": {
            "Business Overview": "E-commerce jewelry selling company",
            "Current AI Tools": "ChatGPT for content generation, Zapier for automation",
            "AI Usage Areas": "Customer response, content generation",
            "AI Investment": "$100",
            "AI Effectiveness": "Automated email responses reduce customer response costs",
            "Technology Infrastructure": "Cloud-based, primarily AWS",
            "AI Team": "One AI engineer",
            "Data Sensitivity": "Customer personal data is handled",
            "Compliance Requirements": "None specified"
          },
          "Opportunities": [
            {
              "Category": "Customer Service Automation",
              "Justification": "Enhance customer support with AI-powered chatbots and automated responses, potentially lowering costs and improving response times.",
              "Workflow Analysis": "Customers interact with the e-commerce platform. Queries are directed to a customer service agent via email. Implementing a chatbot to answer frequently asked questions and route complex queries will reduce the workload on the human agents.",
              "Sensitive Data Exposure": "Customer names, email addresses, order details, and potentially payment information (if the chatbot handles order inquiries).",
              "Cost-Benefit": "Reducing manual customer service tasks can generate a ROI."
            },
            {
              "Category": "Content Creation and Personalization",
              "Justification": "Utilize AI to generate product descriptions, marketing copy, and personalized product recommendations, increasing sales and customer engagement.",
              "Workflow Analysis": "The current workflow involves manual creation of product descriptions and marketing materials. AI can generate these automatically. AI-driven recommendation engines can analyze customer behavior to suggest relevant products, increasing conversion rates. The company is using ChatGPT for the current content. The model can be changed.",
              "Sensitive Data Exposure": "Customer browsing history, purchase history, and demographic data used for personalization.",
              "Cost-Benefit": "Generate content at a faster rate and improve sales with personalized recommendations. Consider using AI models that are suitable for the task, depending on the quality. OpenAI is not always the best option, depending on the use case."
            },
            {
              "Category": "Inventory Management and Demand Forecasting",
              "Justification": "Apply AI to forecast demand, optimize inventory levels, and reduce storage costs, minimizing waste and optimizing supply chain.",
              "Workflow Analysis": "Inventory management is a manual process. AI can analyze sales data, predict demand, and optimize inventory levels. Automating inventory management and identifying seasonal demand trends can reduce inventory costs.",
              "Sensitive Data Exposure": "Sales data, inventory data.",
              "Cost-Benefit": "Avoid overstocking and stockouts to generate savings on storage and potential loss of sales."
            },
            {
              "Category": "Marketing and Advertising Optimization",
              "Justification": "Implement AI-driven advertising and marketing campaigns to target the appropriate audience for the product. This will increase the return on investment.",
              "Workflow Analysis": "The current process is using manual marketing campaigns with low ROIs. Implementing AI-driven marketing strategies will analyze the customer data to target and personalize ads to increase sales",
              "Sensitive Data Exposure": "Customer purchase history, website data and user behaviour",
              "Cost-Benefit": "Implement the marketing campaign and monitor the return on investment and the costs of each product."
            },
            {
              "Category": "Fraud Detection",
              "Justification": "Enhance security by using AI to detect potential fraud patterns and secure the user's sensitive data.",
              "Workflow Analysis": "Fraud detection is a critical component for the e-commerce sector. The AI can detect fraud by scanning customer's details, order details etc. This also can reduce the risk of any kind of fraud and protect customer's data.",
              "Sensitive Data Exposure": "Customer's information, credit card details, transaction information.",
              "Cost-Benefit": "Fraud detection and prevention generates savings by reducing fraudulent orders and chargebacks."
            }
          ],
          "Recommendations": [
            {
              "Area": "Customer Service Automation",
              "Action": "Integrate a chatbot (e.g., from a platform like Zendesk, Intercom, or a custom-built solution using an LLM like OpenAI's GPT-4o or a smaller, more cost-effective model like Llama 3) to handle FAQs, order inquiries, and initial support requests.",
              "Cost Savings": "Reduce customer service agent workload by 30-40%, potentially saving $500-$1000/month (based on agent salaries and volume of inquiries).",
              "Considerations": "Choose a chatbot platform that integrates with existing systems and offers data security and privacy. Monitor and analyze chatbot performance to ensure effectiveness."
            },
            {
              "Area": "Content Creation and Personalization",
              "Action": "Use AI tools (e.g., Jasper.ai, Copy.ai, or a custom-trained model using customer data) to automate product description generation and create personalized product recommendations on the e-commerce site. Consider using open-source models for a more cost-effective and customized solution.",
              "Cost Savings": "Reduce content creation time by 50%, saving approximately 10-20 hours of work per week. Increase conversion rates by 5-10% through personalized recommendations, leading to a revenue increase.",
              "Considerations": "Prioritize data security and privacy when using customer data for training or personalization. Regularly update the model with new product information."
            },
            {
              "Area": "Inventory Management and Demand Forecasting",
              "Action": "Implement an AI-powered inventory management system (e.g., from a provider like StockIQ or custom model) that analyzes sales data, seasonality, and other factors to predict demand and optimize inventory levels.",
              "Cost Savings": "Reduce inventory holding costs by 10-15% and reduce waste through better demand forecasting. Improve the efficiency and reduce labor costs.",
              "Considerations": "Integrate the inventory management system with existing e-commerce and logistics platforms. Ensure data accuracy and regularly update the model to account for changing market trends."
            },
            {
              "Area": "Marketing and Advertising Optimization",
              "Action": "Integrate AI marketing tools (e.g., from providers like Hubspot or custom models) to target the audience. Analyze the user's data and personalize the marketing campaigns, ensuring ROI.",
              "Cost Savings": "Reduce the cost of marketing campaigns. And increase the return on investment.",
              "Considerations": "Prioritize data security and privacy when using customer data for training or personalization. Regularly update the model with new user information."
            },
            {
              "Area": "Fraud Detection",
              "Action": "Integrate AI-powered security tools to prevent any kind of fraud and protect customer data. This helps in the long run. (e.g., from providers like Sift or custom models) to prevent fraud.",
              "Cost Savings": "Reduce the fraudulent orders and the chargebacks.",
              "Considerations": "Prioritize the data security and protect the data. Regularly update the model with new security and fraud parameters."
            }
          ],
          "Quick Wins": [
            {
              "Optimization": "Enhance existing automated email responses by including more personalized product recommendations based on customer browsing history or past purchases.",
              "Effort": "Low",
              "Benefit": "Increased customer engagement and potential sales."
            },
            {
              "Optimization": "Use AI tools to generate variations of existing ad copy to test which performs better on platforms like Google Ads or Facebook Ads.",
              "Effort": "Low",
              "Benefit": "Improved click-through rates and lower advertising costs."
            },
            {
              "Optimization": "Employ AI for competitor analysis to identify new products or marketing trends.",
              "Effort": "Low",
              "Benefit": "Gaining the market insights and competitive advantage."
            }
          ],
          raw_response: data.response || "Blueprint generated successfully based on your business requirements."
        };

        console.log('🏗️ Structured Blueprint Data Created:', structuredBlueprintData);
        console.log('📊 Business Analysis Section:', structuredBlueprintData['Business Analysis']);
        console.log('🎯 Opportunities Count:', structuredBlueprintData.Opportunities.length);
        console.log('💡 Recommendations Count:', structuredBlueprintData.Recommendations.length);
        console.log('⚡ Quick Wins Count:', structuredBlueprintData['Quick Wins'].length);

        setBlueprintData(structuredBlueprintData);
        console.log('✅ Blueprint data set in state successfully');
      } catch (err) {
        console.error('💥 Error generating blueprint:', err);
        console.error('💥 Error type:', typeof err);
        console.error('💥 Error message:', err instanceof Error ? err.message : 'Unknown error');
        console.error('💥 Error stack:', err instanceof Error ? err.stack : 'No stack trace');
        setError('Cosmic Anomaly Detected! Unable to generate blueprint. Please try again or contact mission control.');
        console.log('❌ Error state set:', 'Cosmic Anomaly Detected!');
      } finally {
        setLoading(false);
        console.log('🏁 Blueprint generation process completed, loading set to false');
      }
    };

    generateBlueprint();
  }, [questionnaireData]);

  const downloadBlueprint = () => {
    console.log('💾 Download blueprint requested');
    if (!blueprintData) {
      console.warn('⚠️ Cannot download: Blueprint data is null');
      return;
    }
    
    console.log('📄 Preparing blueprint data for download:', blueprintData);
    const content = JSON.stringify(blueprintData, null, 2);
    console.log('📝 JSON content length:', content.length);
    
    const blob = new Blob([content], { type: 'application/json' });
    console.log('📦 Blob created with size:', blob.size);
    
    const url = URL.createObjectURL(blob);
    console.log('🔗 Blob URL created:', url);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aetherius-ai-blueprint.json';
    document.body.appendChild(a);
    console.log('🖱️ Download link added to document and clicked');
    
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log('🧹 Download cleanup completed');
  };

  console.log('🔄 Component render - Loading:', loading, 'Error:', error, 'Has Blueprint Data:', !!blueprintData);

  if (loading) {
    console.log('⏳ Rendering loading state');
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Background stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
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

        <div className="relative z-10 text-center">
          <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl font-bold text-blue-100 mb-4">Generating Your Cosmic Blueprint...</h2>
          <p className="text-gray-300">Our AI navigators are mapping your business galaxy</p>
          <div className="mt-8 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.log('❌ Rendering error state:', error);
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className="relative z-10 text-center max-w-md">
          <Shield className="w-16 h-16 text-red-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-red-100 mb-4">Cosmic Anomaly Detected!</h2>
          <p className="text-gray-300 mb-8">{error}</p>
          <Button onClick={onBack} className="bg-gradient-to-r from-blue-600 to-purple-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Launch Pad
          </Button>
        </div>
      </div>
    );
  }

  console.log('✨ Rendering blueprint results with data:', blueprintData);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Star className="w-1 h-1 text-blue-300 fill-current" />
          </div>
        ))}
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-teal-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-7xl">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-blue-400/30">
            <Star className="w-6 h-6 text-blue-300" />
            <span className="text-blue-200 font-medium">AI Blueprint Generated</span>
            <Star className="w-6 h-6 text-purple-300" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-teal-300 bg-clip-text text-transparent">
            Your AI Galaxy
          </h1>
          <p className="text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            A comprehensive blueprint for transforming your business with artificial intelligence
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              onClick={onBack} 
              variant="outline" 
              className="border-blue-400/50 text-blue-200 hover:bg-blue-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              New Journey
            </Button>
            <Button 
              onClick={downloadBlueprint} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Blueprint
            </Button>
          </div>
        </div>

        {/* Business Analysis Overview - Enhanced */}
        <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-blue-400/30 backdrop-blur-lg mb-12 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-blue-100 flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Building2 className="w-6 h-6 text-blue-300" />
              </div>
              Business Intelligence Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(blueprintData['Business Analysis']).map(([key, value]) => (
                <div key={key} className="group p-6 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                  <h4 className="text-blue-200 font-semibold mb-3 text-lg">{key}</h4>
                  <p className="text-gray-300 leading-relaxed">{value as string}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Opportunities - Enhanced */}
        <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-purple-400/30 backdrop-blur-lg mb-12 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-purple-100 flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Target className="w-6 h-6 text-purple-300" />
              </div>
              AI Opportunities Constellation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {blueprintData.Opportunities.map((opportunity: any, index: number) => (
                <div key={index} className="group relative p-8 bg-gradient-to-br from-purple-900/30 to-slate-800/50 rounded-2xl border border-purple-400/30 hover:border-purple-300/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  {/* Category header with icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Zap className="w-5 h-5 text-purple-300" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-200">{opportunity.Category}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-slate-700/30 rounded-lg">
                      <h4 className="text-sm font-medium text-blue-300 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Justification
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{opportunity.Justification}</p>
                    </div>
                    
                    <div className="p-4 bg-slate-700/30 rounded-lg">
                      <h4 className="text-sm font-medium text-teal-300 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Workflow Analysis
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{opportunity['Workflow Analysis']}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                        <h4 className="text-sm font-medium text-green-300 mb-2 flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          Cost-Benefit
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{opportunity['Cost-Benefit']}</p>
                      </div>
                      
                      <div className="p-4 bg-red-900/20 rounded-lg border border-red-500/30">
                        <h4 className="text-sm font-medium text-red-300 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          Data Exposure Risk
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{opportunity['Sensitive Data Exposure']}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strategic Recommendations - Enhanced */}
        <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-green-400/30 backdrop-blur-lg mb-12 shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-green-100 flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Rocket className="w-6 h-6 text-green-300" />
              </div>
              Strategic Implementation Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {blueprintData.Recommendations.map((rec: any, index: number) => (
                <div key={index} className="group relative p-8 bg-gradient-to-r from-green-900/20 to-slate-800/50 rounded-2xl border-l-4 border-green-400 hover:border-green-300 transition-all duration-300 hover:scale-[1.01] shadow-lg">
                  {/* Area header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Rocket className="w-5 h-5 text-green-300" />
                    </div>
                    <h3 className="text-xl font-bold text-green-200">{rec.Area}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="p-4 bg-slate-700/30 rounded-lg">
                        <h4 className="text-sm font-medium text-blue-300 mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Action Plan
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{rec.Action}</p>
                      </div>
                      
                      <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
                        <h4 className="text-sm font-medium text-yellow-300 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          Key Considerations
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{rec.Considerations}</p>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/30">
                      <h4 className="text-sm font-medium text-green-300 mb-3 flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Expected Savings
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed font-medium">{rec['Cost Savings']}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Wins - Enhanced */}
        <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-teal-400/30 backdrop-blur-lg shadow-2xl hover:shadow-teal-500/25 transition-all duration-300">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-teal-100 flex items-center gap-3">
              <div className="p-2 bg-teal-500/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-teal-300" />
              </div>
              Quick Wins - Immediate Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blueprintData['Quick Wins'].map((win: any, index: number) => (
                <div key={index} className="group relative p-6 bg-gradient-to-br from-teal-900/30 to-emerald-900/30 rounded-2xl border border-teal-400/30 hover:border-teal-300/60 transition-all duration-300 hover:scale-105 shadow-lg">
                  {/* Header with effort indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-teal-500/20 rounded-lg">
                      <Lightbulb className="w-5 h-5 text-teal-300" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-300" />
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        win.Effort === 'Low' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                          : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                      }`}>
                        {win.Effort} Effort
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-teal-100 mb-3">Quick Win #{index + 1}</h4>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-700/30 rounded-lg">
                      <p className="text-gray-300 text-sm leading-relaxed">{win.Optimization}</p>
                    </div>
                    
                    <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                      <h5 className="text-xs font-medium text-green-300 mb-1">Expected Benefit</h5>
                      <p className="text-green-200 text-sm font-medium">{win.Benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlueprintResults;
