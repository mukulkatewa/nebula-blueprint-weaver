
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, TrendingUp, Target, Zap, MapPin, Calendar, DollarSign, AlertTriangle, Shield, Eye, AlertCircle, PiggyBank, BarChart3 } from 'lucide-react';

interface BlueprintResultsProps {
  questionnaireData: any;
  onBack: () => void;
}

const BlueprintResults: React.FC<BlueprintResultsProps> = ({ questionnaireData, onBack }) => {
  const [activeTab, setActiveTab] = useState('blueprint');
  const [blueprintData, setBlueprintData] = useState<any>(null);
  const [roadmapData, setRoadmapData] = useState<any>(null);
  const [costData, setCostData] = useState<any>(null);
  const [swotData, setSwotData] = useState<any>(null);
  const [loading, setLoading] = useState({
    blueprint: false,
    roadmap: false,
    cost: false,
    swot: false
  });

  // Load blueprint data on component mount
  useEffect(() => {
    fetchBlueprintData();
  }, []);

  const fetchBlueprintData = async () => {
    setLoading(prev => ({ ...prev, blueprint: true }));
    try {
      const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'sk-default-H0RDPuvT95RpWUepisEbn0NVZEs0hBEf'
        },
        body: JSON.stringify({
          user_id: "katewamukul@gmail.com",
          agent_id: "684c1a21e5203d8a7b64cd83",
          session_id: "684c1a21e5203d8a7b64cd83-ubao3y0iskp",
          message: JSON.stringify(questionnaireData)
        })
      });
      const data = await response.json();
      console.log('Blueprint API Response:', data);
      setBlueprintData(data.response || data);
    } catch (error) {
      console.error('Error fetching blueprint data:', error);
    } finally {
      setLoading(prev => ({ ...prev, blueprint: false }));
    }
  };

  const fetchRoadmapData = async () => {
    setLoading(prev => ({ ...prev, roadmap: true }));
    try {
      const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'sk-default-H0RDPuvT95RpWUepisEbn0NVZEs0hBEf'
        },
        body: JSON.stringify({
          user_id: "katewamukul@gmail.com",
          agent_id: "684c1a1de5203d8a7b64cd82",
          session_id: "684c1a1de5203d8a7b64cd82-ubao3y0iskp",
          message: ""
        })
      });
      const data = await response.json();
      console.log('Roadmap API Response:', data);
      setRoadmapData(data.response || data);
    } catch (error) {
      console.error('Error fetching roadmap data:', error);
    } finally {
      setLoading(prev => ({ ...prev, roadmap: false }));
    }
  };

  const fetchCostData = async () => {
    setLoading(prev => ({ ...prev, cost: true }));
    try {
      const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'sk-default-H0RDPuvT95RpWUepisEbn0NVZEs0hBEf'
        },
        body: JSON.stringify({
          user_id: "katewamukul@gmail.com",
          agent_id: "68481c3db67a5a754564ec0b",
          session_id: "68481c3db67a5a754564ec0b-uzi1zvjh2s9",
          message: ""
        })
      });
      const data = await response.json();
      console.log('Cost API Response:', data);
      setCostData(data.response || data);
    } catch (error) {
      console.error('Error fetching cost data:', error);
    } finally {
      setLoading(prev => ({ ...prev, cost: false }));
    }
  };

  const fetchSwotData = async () => {
    setLoading(prev => ({ ...prev, swot: true }));
    try {
      const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'sk-default-H0RDPuvT95RpWUepisEbn0NVZEs0hBEf'
        },
        body: JSON.stringify({
          user_id: "katewamukul@gmail.com",
          agent_id: "684816b0b67a5a754564eb0d",
          session_id: "684816b0b67a5a754564eb0d-wv7zakiug8",
          message: ""
        })
      });
      const data = await response.json();
      console.log('SWOT API Response:', data);
      setSwotData(data.response || data);
    } catch (error) {
      console.error('Error fetching SWOT data:', error);
    } finally {
      setLoading(prev => ({ ...prev, swot: false }));
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    
    // Fetch data when tab is selected for the first time
    if (value === 'roadmap' && !roadmapData && !loading.roadmap) {
      fetchRoadmapData();
    } else if (value === 'cost' && !costData && !loading.cost) {
      fetchCostData();
    } else if (value === 'swot' && !swotData && !loading.swot) {
      fetchSwotData();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Your AI Business Blueprint
          </h1>
          <p className="text-xl text-purple-200/70 max-w-3xl mx-auto">
            Comprehensive analysis and strategic recommendations for your business transformation
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-slate-800/50 border border-purple-500/30">
            <TabsTrigger 
              value="blueprint" 
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              AI Blueprint
            </TabsTrigger>
            <TabsTrigger 
              value="roadmap"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Implementation Roadmap
            </TabsTrigger>
            <TabsTrigger 
              value="cost"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              Cost Breakdown
            </TabsTrigger>
            <TabsTrigger 
              value="swot"
              className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
            >
              SWOT Analysis
            </TabsTrigger>
          </TabsList>

          {/* Blueprint Tab */}
          <TabsContent value="blueprint" className="mt-6">
            {loading.blueprint ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                <span className="ml-3 text-purple-400">Analyzing business blueprint...</span>
              </div>
            ) : !blueprintData ? (
              <div className="text-center py-12 text-gray-400">
                No business analysis data available
              </div>
            ) : (
              <div className="space-y-6">
                {/* Business Analysis Section */}
                <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-300">
                      <TrendingUp className="h-5 w-5" />
                      Business Analysis
                    </CardTitle>
                    <CardDescription className="text-purple-200/70">
                      Deep dive into your business fundamentals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-purple-100/90 leading-relaxed">
                        {blueprintData.business_analysis || 'Business analysis will appear here after processing...'}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Opportunities Section */}
                <Card className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border-emerald-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-300">
                      <Sparkles className="h-5 w-5" />
                      Growth Opportunities
                    </CardTitle>
                    <CardDescription className="text-emerald-200/70">
                      Identified opportunities for expansion and growth
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-emerald-100/90 leading-relaxed">
                        {blueprintData.opportunities || 'Growth opportunities will be identified here...'}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations Section */}
                <Card className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-300">
                      <Target className="h-5 w-5" />
                      Strategic Recommendations
                    </CardTitle>
                    <CardDescription className="text-orange-200/70">
                      Actionable strategies for business improvement
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-orange-100/90 leading-relaxed">
                        {blueprintData.recommendations || 'Strategic recommendations will be provided here...'}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Wins Section */}
                <Card className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border-yellow-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-300">
                      <Zap className="h-5 w-5" />
                      Quick Wins
                    </CardTitle>
                    <CardDescription className="text-yellow-200/70">
                      Immediate actions you can take for quick results
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-yellow-100/90 leading-relaxed">
                        {blueprintData.quick_wins || 'Quick win opportunities will be highlighted here...'}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="mt-6">
            {loading.roadmap ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-blue-400">Creating implementation roadmap...</span>
              </div>
            ) : !roadmapData ? (
              <div className="text-center py-12 text-gray-400">
                No implementation roadmap data available
              </div>
            ) : (
              <div className="space-y-6">
                {/* Implementation Phases */}
                <Card className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-300">
                      <MapPin className="h-5 w-5" />
                      Implementation Phases
                    </CardTitle>
                    <CardDescription className="text-blue-200/70">
                      Structured approach to implementation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-blue-100/90 leading-relaxed">
                        {roadmapData.phases || 'Implementation phases will be outlined here...'}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Milestones */}
                <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-300">
                      <Calendar className="h-5 w-5" />
                      Key Milestones
                    </CardTitle>
                    <CardDescription className="text-green-200/70">
                      Critical checkpoints in your journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-green-100/90 leading-relaxed">
                        {roadmapData.milestones || 'Key milestones will be identified here...'}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-purple-300">
                        <Calendar className="h-5 w-5" />
                        Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-invert max-w-none">
                        <div className="whitespace-pre-wrap text-purple-100/90 leading-relaxed">
                          {roadmapData.timeline || '12-month implementation timeline...'}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border-emerald-500/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-emerald-300">
                        <DollarSign className="h-5 w-5" />
                        Budget Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-invert max-w-none">
                        <div className="whitespace-pre-wrap text-emerald-100/90 leading-relaxed">
                          {roadmapData.budget || 'Budget estimates will be provided...'}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Risk Assessment */}
                <Card className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-300">
                      <AlertTriangle className="h-5 w-5" />
                      Risk Assessment
                    </CardTitle>
                    <CardDescription className="text-red-200/70">
                      Potential challenges and mitigation strategies
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-red-100/90 leading-relaxed">
                        {roadmapData.risks || 'Risk assessment and mitigation strategies...'}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Cost Tab */}
          <TabsContent value="cost" className="mt-6">
            {loading.cost ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
                <span className="ml-3 text-green-400">Calculating cost breakdown...</span>
              </div>
            ) : !costData ? (
              <div className="text-center py-12 text-gray-400">
                No cost breakdown data available
              </div>
            ) : (
              <div className="space-y-6">
                {/* Detailed Cost Breakdown */}
                <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-300">
                      <DollarSign className="h-5 w-5" />
                      Detailed Cost Breakdown
                    </CardTitle>
                    <CardDescription className="text-green-200/70">
                      Comprehensive analysis of all associated costs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-green-100/90 leading-relaxed">
                        {costData.cost_breakdown || 'Detailed cost breakdown will be provided here...'}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* ROI Projections */}
                <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-300">
                      <TrendingUp className="h-5 w-5" />
                      ROI Projections
                    </CardTitle>
                    <CardDescription className="text-blue-200/70">
                      Expected return on investment over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-blue-100/90 leading-relaxed">
                        {costData.roi_projections || 'ROI projections will be calculated here...'}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Cost Savings Analysis */}
                <Card className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-300">
                      <PiggyBank className="h-5 w-5" />
                      Cost Savings Analysis
                    </CardTitle>
                    <CardDescription className="text-purple-200/70">
                      Potential savings and efficiency gains
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-purple-100/90 leading-relaxed">
                        {costData.cost_savings || 'Cost savings analysis will be provided here...'}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 3-Year Financial Projection */}
                <Card className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-300">
                      <BarChart3 className="h-5 w-5" />
                      3-Year Financial Projection
                    </CardTitle>
                    <CardDescription className="text-orange-200/70">
                      Long-term financial outlook and projections
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-orange-100/90 leading-relaxed">
                        {costData.financial_projection || '3-year financial projections will be detailed here...'}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* SWOT Tab */}
          <TabsContent value="swot" className="mt-6">
            {loading.swot ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
                <span className="ml-3 text-indigo-400">Conducting SWOT analysis...</span>
              </div>
            ) : !swotData ? (
              <div className="text-center py-12 text-gray-400">
                No SWOT analysis data available
              </div>
            ) : (
              <div className="space-y-6">
                {/* SWOT Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Strengths */}
                  <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-300">
                        <Shield className="h-5 w-5" />
                        Strengths
                      </CardTitle>
                      <CardDescription className="text-green-200/70">
                        Internal positive factors
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-invert max-w-none">
                        <div className="whitespace-pre-wrap text-green-100/90 leading-relaxed">
                          {swotData.strengths || 'Strengths will be identified here...'}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Weaknesses */}
                  <Card className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border-red-500/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-300">
                        <AlertCircle className="h-5 w-5" />
                        Weaknesses
                      </CardTitle>
                      <CardDescription className="text-red-200/70">
                        Internal areas for improvement
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-invert max-w-none">
                        <div className="whitespace-pre-wrap text-red-100/90 leading-relaxed">
                          {swotData.weaknesses || 'Weaknesses will be analyzed here...'}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Opportunities */}
                  <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-300">
                        <Eye className="h-5 w-5" />
                        Opportunities
                      </CardTitle>
                      <CardDescription className="text-blue-200/70">
                        External positive possibilities
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-invert max-w-none">
                        <div className="whitespace-pre-wrap text-blue-100/90 leading-relaxed">
                          {swotData.opportunities || 'Opportunities will be identified here...'}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Threats */}
                  <Card className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border-orange-500/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-orange-300">
                        <Target className="h-5 w-5" />
                        Threats
                      </CardTitle>
                      <CardDescription className="text-orange-200/70">
                        External challenges to address
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-invert max-w-none">
                        <div className="whitespace-pre-wrap text-orange-100/90 leading-relaxed">
                          {swotData.threats || 'Threats will be analyzed here...'}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Strategic Insights */}
                <Card className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-300">
                      <Eye className="h-5 w-5" />
                      Strategic Insights
                    </CardTitle>
                    <CardDescription className="text-purple-200/70">
                      Key insights derived from SWOT analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-purple-100/90 leading-relaxed">
                        {swotData.strategic_insights || 'Strategic insights will be provided here...'}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Items */}
                <Card className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border-teal-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-teal-300">
                      <Target className="h-5 w-5" />
                      Recommended Actions
                    </CardTitle>
                    <CardDescription className="text-teal-200/70">
                      Actionable steps based on SWOT findings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-teal-100/90 leading-relaxed">
                        {swotData.action_items || 'Recommended actions will be outlined here...'}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BlueprintResults;
