
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Star, Download, Rocket, Shield } from 'lucide-react';
import { QuestionnaireData } from '../pages/Index';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Timeline } from 'recharts';

interface BlueprintResultsProps {
  questionnaireData: QuestionnaireData;
  onBack: () => void;
}

const BlueprintResults = ({ questionnaireData, onBack }: BlueprintResultsProps) => {
  const [blueprintData, setBlueprintData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateBlueprint = async () => {
      try {
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

        const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'sk-default-H0RDPuvT95RpWUepisEbn0NVZEs0hBEf'
          },
          body: JSON.stringify({
            user_id: 'katewamukul@gmail.com',
            agent_id: '6846d65762d8a0cca7618622',
            session_id: '6846d65762d8a0cca7618622-drg9hreicli',
            message: message
          })
        });

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);
        
        // Mock structured data for demonstration (you can replace this with actual API parsing)
        const mockBlueprintData = {
          organization_profile: {
            name: "AI Implementation Blueprint",
            goal: "Transform business operations through strategic AI integration",
            industry: "Technology/E-commerce"
          },
          executive_summary: {
            investment: "$125,000",
            timeline: "12 months",
            roi_projection: "300%"
          },
          budget: {
            total: 125000,
            breakdown: [
              { name: 'Personnel', value: 75000, color: '#3B82F6' },
              { name: 'Technology', value: 35000, color: '#8B5CF6' },
              { name: 'Training', value: 10000, color: '#06B6D4' },
              { name: 'Contingency', value: 5000, color: '#10B981' }
            ]
          },
          timeline: {
            phases: [
              { phase: 'Phase 1', duration: '3 months', task: 'Foundation & Setup' },
              { phase: 'Phase 2', duration: '4 months', task: 'Implementation' },
              { phase: 'Phase 3', duration: '3 months', task: 'Optimization' },
              { phase: 'Phase 4', duration: '2 months', task: 'Scaling' }
            ]
          },
          risk_register: [
            { risk: 'Data Privacy', probability: 3, impact: 4 },
            { risk: 'Technical Complexity', probability: 4, impact: 3 },
            { risk: 'Team Adoption', probability: 2, impact: 3 },
            { risk: 'Budget Overrun', probability: 2, impact: 4 }
          ],
          technology_roadmap: [
            'AI-powered Customer Service Platform',
            'Predictive Analytics System',
            'Automated Marketing Platform',
            'Intelligent Inventory Management'
          ],
          success_metrics: {
            'Customer Satisfaction': { target: '95%', current: '78%' },
            'Operational Efficiency': { target: '40%', current: '15%' },
            'Revenue Growth': { target: '25%', current: '8%' },
            'Cost Reduction': { target: '30%', current: '5%' }
          },
          raw_response: data.response || "Blueprint generated successfully based on your business requirements."
        };

        setBlueprintData(mockBlueprintData);
      } catch (err) {
        console.error('Error generating blueprint:', err);
        setError('Cosmic Anomaly Detected! Unable to generate blueprint. Please try again or contact mission control.');
      } finally {
        setLoading(false);
      }
    };

    generateBlueprint();
  }, [questionnaireData]);

  const downloadBlueprint = () => {
    if (!blueprintData) return;
    
    const content = JSON.stringify(blueprintData, null, 2);
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aetherius-ai-blueprint.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (loading) {
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
            Your AI Blueprint Galaxy
          </h1>
          <p className="text-blue-100 text-lg mb-6">
            Your cosmic business transformation roadmap has been generated
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button onClick={onBack} variant="outline" className="border-blue-500/50 text-blue-200 hover:bg-blue-500/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              New Journey
            </Button>
            <Button onClick={downloadBlueprint} className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Download className="w-4 h-4 mr-2" />
              Download Blueprint
            </Button>
          </div>
        </div>

        {/* Blueprint Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gray-900/80 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-100 mb-2">Total Investment</h3>
              <p className="text-3xl font-bold text-green-400">{blueprintData?.executive_summary?.investment}</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/80 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-100 mb-2">Timeline</h3>
              <p className="text-3xl font-bold text-purple-400">{blueprintData?.executive_summary?.timeline}</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/80 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-100 mb-2">ROI Projection</h3>
              <p className="text-3xl font-bold text-teal-400">{blueprintData?.executive_summary?.roi_projection}</p>
            </CardContent>
          </Card>
        </div>

        {/* Budget Breakdown */}
        <Card className="bg-gray-900/80 border-blue-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-blue-100 flex items-center gap-2">
              <Star className="w-5 h-5" />
              Budget Constellation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={blueprintData?.budget?.breakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {blueprintData?.budget?.breakdown?.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => `$${value.toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Timeline Roadmap */}
        <Card className="bg-gray-900/80 border-blue-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-blue-100 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Mission Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {blueprintData?.timeline?.phases?.map((phase: any, index: number) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-blue-100 font-semibold">{phase.phase}</h4>
                    <p className="text-gray-300">{phase.task}</p>
                  </div>
                  <div className="text-purple-300 font-medium">{phase.duration}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technology Roadmap */}
        <Card className="bg-gray-900/80 border-blue-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-blue-100 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Technology Arsenal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blueprintData?.technology_roadmap?.map((tech: string, index: number) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                  <Star className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-200">{tech}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Success Metrics */}
        <Card className="bg-gray-900/80 border-blue-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-blue-100">Success Constellation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blueprintData?.success_metrics && Object.entries(blueprintData.success_metrics).map(([key, value]: [string, any]) => (
                <div key={key} className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="text-blue-100 font-semibold mb-2">{key}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Current: {value.current}</span>
                    <span className="text-green-400 font-bold">Target: {value.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Response */}
        <Card className="bg-gray-900/80 border-blue-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-blue-100">Cosmic Intelligence Report</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
              {blueprintData?.raw_response}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlueprintResults;
