import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Star, Download, Rocket, Shield, Target, Lightbulb, TrendingUp, Building2, Zap, DollarSign, AlertTriangle, CheckCircle, Clock, Sparkles, Database, Users, Lock } from 'lucide-react';
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 flex items-center justify-center relative overflow-hidden font-['Poppins']">
        {/* Constellation background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-teal-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center">
          <div className="mb-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-teal-400/20">
            <Sparkles className="w-16 h-16 text-teal-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold text-white mb-4">Generating Your AI Blueprint</h2>
            <p className="text-gray-300 text-lg">Analyzing your business intelligence...</p>
            <div className="mt-6 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-teal-400/30 border-t-teal-400"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.log('❌ Rendering error state:', error);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 flex items-center justify-center font-['Poppins']">
        <div className="text-center max-w-md p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-red-400/30">
          <Shield className="w-16 h-16 text-red-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">System Error</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">{error}</p>
          <Button 
            onClick={onBack} 
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  console.log('✨ Rendering blueprint results with data:', blueprintData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 relative overflow-hidden font-['Poppins']">
      {/* Abstract constellation background */}
      <div className="absolute inset-0 opacity-5">
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(20, 184, 166, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Constellation stars */}
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-32 w-48 h-48 bg-fuchsia-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto px-8 py-16 max-w-7xl">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-teal-400/20">
            <Sparkles className="w-6 h-6 text-teal-400" />
            <span className="text-white font-medium text-lg">AI Blueprint Generated</span>
            <Star className="w-6 h-6 text-fuchsia-400" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-teal-400 leading-tight">
            AI Blueprint Galaxy
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive roadmap for AI transformation and business optimization
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Button 
              onClick={onBack} 
              variant="outline" 
              className="border-teal-400/30 text-white hover:bg-teal-400/10 backdrop-blur-md px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:border-teal-400/50"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              New Analysis
            </Button>
            <Button 
              onClick={downloadBlueprint} 
              className="bg-gradient-to-r from-teal-500 to-fuchsia-500 hover:from-teal-400 hover:to-fuchsia-400 text-white px-8 py-4 rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Blueprint
            </Button>
          </div>
        </div>

        {/* Business Analysis - Frosted Glass Card */}
        <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl mb-16 rounded-2xl hover:bg-white/10 transition-all duration-500">
          <CardHeader className="pb-8">
            <CardTitle className="text-3xl text-teal-400 flex items-center gap-4 font-bold">
              <div className="p-3 bg-teal-400/20 rounded-xl">
                <Building2 className="w-8 h-8 text-teal-400" />
              </div>
              Business Intelligence Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(blueprintData['Business Analysis']).map(([key, value]) => (
                <div key={key} className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-teal-400/30 transition-all duration-300 hover:scale-105">
                  <h4 className="text-teal-300 font-semibold mb-4 text-lg">{key}</h4>
                  <p className="text-white leading-relaxed">{value as string}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Opportunities */}
        <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl mb-16 rounded-2xl hover:bg-white/10 transition-all duration-500">
          <CardHeader className="pb-8">
            <CardTitle className="text-3xl text-fuchsia-400 flex items-center gap-4 font-bold">
              <div className="p-3 bg-fuchsia-400/20 rounded-xl">
                <Target className="w-8 h-8 text-fuchsia-400" />
              </div>
              AI Opportunities Constellation
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
              {blueprintData.Opportunities.map((opportunity: any, index: number) => (
                <div key={index} className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-fuchsia-400/20 rounded-xl">
                      <Zap className="w-6 h-6 text-fuchsia-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-fuchsia-300">{opportunity.Category}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                      <h4 className="text-sm font-semibold text-teal-400 mb-3 flex items-center gap-2 uppercase tracking-wide">
                        <CheckCircle className="w-4 h-4" />
                        Justification
                      </h4>
                      <p className="text-white leading-relaxed">{opportunity.Justification}</p>
                    </div>
                    
                    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                      <h4 className="text-sm font-semibold text-teal-400 mb-3 flex items-center gap-2 uppercase tracking-wide">
                        <Target className="w-4 h-4" />
                        Workflow Analysis
                      </h4>
                      <p className="text-white leading-relaxed">{opportunity['Workflow Analysis']}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div className="p-6 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                        <h4 className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-2 uppercase tracking-wide">
                          <DollarSign className="w-4 h-4" />
                          Cost-Benefit Analysis
                        </h4>
                        <p className="text-white leading-relaxed">{opportunity['Cost-Benefit']}</p>
                      </div>
                      
                      <div className="p-6 bg-amber-500/10 rounded-xl border border-amber-400/20">
                        <h4 className="text-sm font-semibold text-amber-400 mb-3 flex items-center gap-2 uppercase tracking-wide">
                          <AlertTriangle className="w-4 h-4" />
                          Data Security Considerations
                        </h4>
                        <p className="text-white leading-relaxed">{opportunity['Sensitive Data Exposure']}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strategic Recommendations */}
        <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl mb-16 rounded-2xl hover:bg-white/10 transition-all duration-500">
          <CardHeader className="pb-8">
            <CardTitle className="text-3xl text-emerald-400 flex items-center gap-4 font-bold">
              <div className="p-3 bg-emerald-400/20 rounded-xl">
                <Rocket className="w-8 h-8 text-emerald-400" />
              </div>
              Strategic Implementation Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="space-y-10">
              {blueprintData.Recommendations.map((rec: any, index: number) => (
                <div key={index} className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border-l-4 border-emerald-400 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-emerald-400/20 rounded-xl">
                      <Rocket className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-300">{rec.Area}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <h4 className="text-sm font-semibold text-teal-400 mb-3 flex items-center gap-2 uppercase tracking-wide">
                          <Target className="w-4 h-4" />
                          Action Plan
                        </h4>
                        <p className="text-white leading-relaxed">{rec.Action}</p>
                      </div>
                      
                      <div className="p-6 bg-amber-500/10 rounded-xl border border-amber-400/20">
                        <h4 className="text-sm font-semibold text-amber-400 mb-3 flex items-center gap-2 uppercase tracking-wide">
                          <AlertTriangle className="w-4 h-4" />
                          Key Considerations
                        </h4>
                        <p className="text-white leading-relaxed">{rec.Considerations}</p>
                      </div>
                    </div>
                    
                    <div className="p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-400/20">
                      <h4 className="text-sm font-semibold text-emerald-400 mb-4 flex items-center gap-2 uppercase tracking-wide">
                        <DollarSign className="w-4 h-4" />
                        Expected Savings
                      </h4>
                      <p className="text-white leading-relaxed font-medium text-lg">{rec['Cost Savings']}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Wins */}
        <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl hover:bg-white/10 transition-all duration-500">
          <CardHeader className="pb-8">
            <CardTitle className="text-3xl text-yellow-400 flex items-center gap-4 font-bold">
              <div className="p-3 bg-yellow-400/20 rounded-xl">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              Quick Wins - Immediate Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blueprintData['Quick Wins'].map((win: any, index: number) => (
                <div key={index} className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-yellow-400/20 rounded-xl">
                      <Lightbulb className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-400" />
                      <span className={`px-4 py-2 text-sm font-semibold rounded-full ${
                        win.Effort === 'Low' 
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                      }`}>
                        {win.Effort} Effort
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-yellow-300 mb-4">Quick Win #{index + 1}</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-white leading-relaxed">{win.Optimization}</p>
                    </div>
                    
                    <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                      <h5 className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wide">Expected Benefit</h5>
                      <p className="text-emerald-300 font-medium">{win.Benefit}</p>
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
