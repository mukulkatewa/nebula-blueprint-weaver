import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Star, Download, Rocket, Shield, Target, Lightbulb, TrendingUp, Building2, Zap, DollarSign, AlertTriangle, CheckCircle, Clock, Sparkles, Database, Users, Lock, Calendar, MapPin, Gauge, Calculator, Award, TrendingDown } from 'lucide-react';
import { QuestionnaireData } from '../pages/Index';

interface BlueprintResultsProps {
  questionnaireData: QuestionnaireData;
  onBack: () => void;
}

const BusinessAnalysis = ({ data }: { data: any }) => (
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
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-teal-400/30 transition-all duration-300 hover:scale-105">
            <h4 className="text-teal-300 font-semibold mb-4 text-lg">{key}</h4>
            <p className="text-white leading-relaxed">{value as string}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const OpportunitiesSection = ({ opportunities }: { opportunities: any[] }) => (
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
        {opportunities.map((opportunity: any, index: number) => (
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
);

const RecommendationsSection = ({ recommendations }: { recommendations: any[] }) => (
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
        {recommendations.map((rec: any, index: number) => (
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
);

const QuickWins = ({ quickWins }: { quickWins: any[] }) => (
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
        {quickWins.map((win: any, index: number) => (
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
);

const RoadmapSection = ({ roadmapData, loading }: { roadmapData: any; loading: boolean }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="text-center">
          <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-fuchsia-400/20 mb-6">
            <MapPin className="w-16 h-16 text-fuchsia-400 mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-4">Generating Implementation Roadmap</h3>
            <p className="text-gray-300">Creating your detailed implementation plan...</p>
            <div className="mt-6 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-fuchsia-400/30 border-t-fuchsia-400"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!roadmapData) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-fuchsia-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Implementation Roadmap</h3>
          <p className="text-gray-300 mb-8">Click to generate your detailed implementation plan</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Timeline Overview */}
      <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl hover:bg-white/10 transition-all duration-500">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl text-fuchsia-400 flex items-center gap-4 font-bold">
            <div className="p-3 bg-fuchsia-400/20 rounded-xl">
              <Calendar className="w-8 h-8 text-fuchsia-400" />
            </div>
            Implementation Timeline
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 rounded-2xl border border-fuchsia-400/20">
              <h3 className="text-2xl font-bold text-fuchsia-300 mb-2">Total Duration</h3>
              <p className="text-4xl font-bold text-white">{roadmapData.Timeline}</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-400/20">
              <h3 className="text-2xl font-bold text-emerald-300 mb-2">Total Investment</h3>
              <p className="text-4xl font-bold text-white">{roadmapData['Total Budget']}</p>
            </div>
          </div>

          {/* Phases */}
          <div className="space-y-8">
            {roadmapData.Phases.map((phase: any, index: number) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-fuchsia-400/20 rounded-xl">
                    <Gauge className="w-6 h-6 text-fuchsia-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-fuchsia-300">{phase.Phase}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-gray-300">{phase.Duration}</span>
                      <span className="text-emerald-400 font-semibold">{phase.Budget}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="text-teal-400 font-semibold mb-4 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Objectives
                    </h4>
                    <ul className="space-y-2">
                      {phase.Objectives.map((obj: string, objIndex: number) => (
                        <li key={objIndex} className="text-white leading-relaxed flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="text-yellow-400 font-semibold mb-4 flex items-center gap-2">
                      <Rocket className="w-4 h-4" />
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {phase.Deliverables.map((deliverable: string, delIndex: number) => (
                        <li key={delIndex} className="text-white leading-relaxed flex items-start gap-2">
                          <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="text-purple-400 font-semibold mb-4 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Resources
                    </h4>
                    <ul className="space-y-2">
                      {phase.Resources.map((resource: string, resIndex: number) => (
                        <li key={resIndex} className="text-white leading-relaxed flex items-start gap-2">
                          <Users className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Milestones */}
      <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl hover:bg-white/10 transition-all duration-500">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl text-emerald-400 flex items-center gap-4 font-bold">
            <div className="p-3 bg-emerald-400/20 rounded-xl">
              <Target className="w-8 h-8 text-emerald-400" />
            </div>
            Key Milestones
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roadmapData['Key Milestones'].map((milestone: any, index: number) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-400/20 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-300">{milestone.Milestone}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <span className="text-teal-400 font-semibold">{milestone['Target Date']}</span>
                  </div>
                  <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                    <h5 className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wide">Success Metrics</h5>
                    <p className="text-white font-medium">{milestone['Success Metrics']}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Assessment */}
      <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl hover:bg-white/10 transition-all duration-500">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl text-amber-400 flex items-center gap-4 font-bold">
            <div className="p-3 bg-amber-400/20 rounded-xl">
              <Shield className="w-8 h-8 text-amber-400" />
            </div>
            Risk Assessment & Mitigation
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="space-y-6">
            {roadmapData['Risk Assessment'].map((risk: any, index: number) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-400/20 rounded-xl">
                      <AlertTriangle className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-amber-300">{risk.Risk}</h3>
                  </div>
                  <span className={`px-4 py-2 text-sm font-semibold rounded-full ${
                    risk.Impact === 'High' 
                      ? 'bg-red-500/20 text-red-400 border border-red-400/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                  }`}>
                    {risk.Impact} Impact
                  </span>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Mitigation Strategy
                  </h4>
                  <p className="text-white leading-relaxed">{risk.Mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const CostBreakdownSection = ({ costData, costLoading, generateCostBreakdown }: { costData: any; costLoading: boolean; generateCostBreakdown: () => void }) => {
  if (costLoading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="text-center">
          <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-emerald-400/20 mb-6">
            <Calculator className="w-16 h-16 text-emerald-400 mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-4">Generating Cost Analysis</h3>
            <p className="text-gray-300">Calculating investment and ROI projections...</p>
            <div className="mt-6 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-emerald-400/30 border-t-emerald-400"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!costData) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="text-center">
          <Calculator className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Cost Breakdown Analysis</h3>
          <p className="text-gray-300 mb-8">Click to generate your detailed cost analysis and ROI projections</p>
          <Button 
            onClick={generateCostBreakdown}
            className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white px-8 py-4 rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Generate Cost Analysis
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Financial Overview */}
      <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl hover:bg-white/10 transition-all duration-500">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl text-emerald-400 flex items-center gap-4 font-bold">
            <div className="p-3 bg-emerald-400/20 rounded-xl">
              <DollarSign className="w-8 h-8 text-emerald-400" />
            </div>
            Financial Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-400/20">
              <h3 className="text-lg font-semibold text-emerald-300 mb-2">Total Investment</h3>
              <p className="text-4xl font-bold text-white">{costData['Total Investment']}</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-400/20">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">ROI Projection</h3>
              <p className="text-4xl font-bold text-white">{costData['ROI Projection']}</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-400/20">
              <h3 className="text-lg font-semibold text-orange-300 mb-2">Payback Period</h3>
              <p className="text-4xl font-bold text-white">{costData['Payback Period']}</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-400/20">
              <h3 className="text-lg font-semibold text-green-300 mb-2">Annual Savings</h3>
              <p className="text-4xl font-bold text-white">{costData['Annual Savings']}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Costs */}
      <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl hover:bg-white/10 transition-all duration-500">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl text-blue-400 flex items-center gap-4 font-bold">
            <div className="p-3 bg-blue-400/20 rounded-xl">
              <Building2 className="w-8 h-8 text-blue-400" />
            </div>
            Implementation Costs
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {costData['Implementation Costs'].map((category: any, index: number) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-blue-300">{category.Category}</h3>
                  <span className="text-2xl font-bold text-emerald-400">{category.Amount}</span>
                </div>
                <div className="space-y-4">
                  {category.Breakdown.map((item: any, itemIndex: number) => (
                    <div key={itemIndex} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-white">{item.Item}</span>
                      <span className="text-emerald-400 font-semibold">{item.Cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cost Savings Analysis */}
      <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl hover:bg-white/10 transition-all duration-300">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl text-green-400 flex items-center gap-4 font-bold">
            <div className="p-3 bg-green-400/20 rounded-xl">
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
            Cost Savings Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {costData['Cost Savings Analysis'].map((saving: any, index: number) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-400/20 rounded-xl">
                    <DollarSign className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-300">{saving.Area}</h3>
                    <p className="text-2xl font-bold text-emerald-400">{saving['Annual Savings']}</p>
                  </div>
                </div>
                <p className="text-white leading-relaxed">{saving.Description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Financial Projections */}
      <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl hover:bg-white/10 transition-all duration-300">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl text-purple-400 flex items-center gap-4 font-bold">
            <div className="p-3 bg-purple-400/20 rounded-xl">
              <TrendingUp className="w-8 h-8 text-purple-400" />
            </div>
            3-Year Financial Projections
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(costData['Financial Projections']).map(([year, data]: [string, any]) => (
              <div key={year} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">{year}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Investment</span>
                    <span className="text-red-400 font-semibold">{data.Investment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Savings</span>
                    <span className="text-green-400 font-semibold">{data.Savings}</span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Net Result</span>
                      <span className={`font-bold text-xl ${data.Net.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                        {data.Net}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Operational Costs */}
      <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl hover:bg-white/10 transition-all duration-300">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl text-orange-400 flex items-center gap-4 font-bold">
            <div className="p-3 bg-orange-400/20 rounded-xl">
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
            Ongoing Operational Costs
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          {costData['Operational Costs'].map((category: any, index: number) => (
            <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-orange-300">{category.Category}</h3>
                <span className="text-2xl font-bold text-orange-400">{category.Amount}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.Items.map((item: any, itemIndex: number) => (
                  <div key={itemIndex} className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-center">
                      <p className="text-white mb-2">{item.Item}</p>
                      <p className="text-orange-400 font-semibold">{item.Cost}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

const SwotAnalysisSection = ({ swotData, swotLoading, generateSwotAnalysis }: { swotData: any; swotLoading: boolean; generateSwotAnalysis: () => void }) => {
  if (swotLoading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="text-center">
          <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-purple-400/20 mb-6">
            <Award className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-4">Generating SWOT Analysis</h3>
            <p className="text-gray-300">Analyzing strengths, weaknesses, opportunities, and threats...</p>
            <div className="mt-6 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-purple-400/30 border-t-purple-400"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!swotData) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="text-center">
          <Award className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">SWOT Analysis</h3>
          <p className="text-gray-300 mb-8">Click to generate your comprehensive SWOT analysis</p>
          <Button 
            onClick={generateSwotAnalysis}
            className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-400 hover:to-violet-400 text-white px-8 py-4 rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Award className="w-5 h-5 mr-2" />
            Generate SWOT Analysis
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* SWOT Matrix Overview */}
      <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl hover:bg-white/10 transition-all duration-500">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl text-purple-400 flex items-center gap-4 font-bold">
            <div className="p-3 bg-purple-400/20 rounded-xl">
              <Award className="w-8 h-8 text-purple-400" />
            </div>
            SWOT Analysis Matrix
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Strengths */}
            <div className="p-8 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-400/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-400/20 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-300">Strengths</h3>
              </div>
              <div className="space-y-4">
                {swotData.Strengths.map((strength: string, index: number) => (
                  <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-white leading-relaxed">{strength}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Weaknesses */}
            <div className="p-8 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-2xl border border-red-400/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-400/20 rounded-xl">
                  <TrendingDown className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-red-300">Weaknesses</h3>
              </div>
              <div className="space-y-4">
                {swotData.Weaknesses.map((weakness: string, index: number) => (
                  <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-white leading-relaxed">{weakness}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunities */}
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-400/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-400/20 rounded-xl">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-300">Opportunities</h3>
              </div>
              <div className="space-y-4">
                {swotData.Opportunities.map((opportunity: string, index: number) => (
                  <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-white leading-relaxed">{opportunity}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Threats */}
            <div className="p-8 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-400/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-400/20 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-orange-300">Threats</h3>
              </div>
              <div className="space-y-4">
                {swotData.Threats.map((threat: string, index: number) => (
                  <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-white leading-relaxed">{threat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strategic Insights */}
      <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl hover:bg-white/10 transition-all duration-500">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl text-teal-400 flex items-center gap-4 font-bold">
            <div className="p-3 bg-teal-400/20 rounded-xl">
              <Lightbulb className="w-8 h-8 text-teal-400" />
            </div>
            Strategic Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="space-y-8">
            {swotData['Strategic Insights'].map((insight: any, index: number) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-teal-400/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-teal-400/20 rounded-xl">
                    <Rocket className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-300">{insight.Strategy}</h3>
                </div>
                <p className="text-white leading-relaxed">{insight.Description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl hover:bg-white/10 transition-all duration-500">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl text-fuchsia-400 flex items-center gap-4 font-bold">
            <div className="p-3 bg-fuchsia-400/20 rounded-xl">
              <CheckCircle className="w-8 h-8 text-fuchsia-400" />
            </div>
            Recommended Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {swotData['Action Items'].map((action: any, index: number) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-fuchsia-400/20 rounded-xl">
                    <Star className="w-6 h-6 text-fuchsia-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-fuchsia-300">{action.Priority} Priority</h3>
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      action.Priority === 'High' 
                        ? 'bg-red-500/20 text-red-400 border border-red-400/30'
                        : action.Priority === 'Medium'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                        : 'bg-green-500/20 text-green-400 border border-green-400/30'
                    }`}>
                      {action.Timeline}
                    </span>
                  </div>
                </div>
                <p className="text-white leading-relaxed">{action.Action}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const BlueprintResults = ({ questionnaireData, onBack }: BlueprintResultsProps) => {
  const [blueprintData, setBlueprintData] = useState<any>(null);
  const [roadmapData, setRoadmapData] = useState<any>(null);
  const [costData, setCostData] = useState<any>(null);
  const [swotData, setSwotData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [roadmapLoading, setRoadmapLoading] = useState(false);
  const [costLoading, setCostLoading] = useState(false);
  const [swotLoading, setSwotLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('blueprint');

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

        if (!response.ok) {
          console.error('❌ API request failed with status:', response.status);
          throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        console.log('📥 Raw API Response Data:', data);
        
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
            }
          ],
          raw_response: data.response || "Blueprint generated successfully based on your business requirements."
        };

        console.log('🏗️ Structured Blueprint Data Created:', structuredBlueprintData);
        setBlueprintData(structuredBlueprintData);
        console.log('✅ Blueprint data set in state successfully');
      } catch (err) {
        console.error('💥 Error generating blueprint:', err);
        setError('Cosmic Anomaly Detected! Unable to generate blueprint. Please try again or contact mission control.');
        console.log('❌ Error state set:', 'Cosmic Anomaly Detected!');
      } finally {
        setLoading(false);
        console.log('🏁 Blueprint generation process completed, loading set to false');
      }
    };

    generateBlueprint();
  }, [questionnaireData]);

  const generateRoadmap = async () => {
    if (roadmapData) return; // Don't regenerate if already exists
    
    try {
      console.log('🔄 Starting roadmap generation process...');
      setRoadmapLoading(true);
      
      const message = `Implementation Roadmap Request:

Business Overview: ${questionnaireData.businessOverview}

Current AI Tools: ${questionnaireData.currentAITools}

AI Usage Areas: ${questionnaireData.aiUsageAreas}

AI Investment: ${questionnaireData.aiSpending}

AI Effectiveness: ${questionnaireData.effectiveAITools}

Technology Infrastructure: ${questionnaireData.technologyInfrastructure}

AI Team: ${questionnaireData.aiTeamMembers}

Data Sensitivity: ${questionnaireData.sensitiveInformation}

Compliance Requirements: ${questionnaireData.complianceRequirements}

Please provide a detailed implementation roadmap for AI integration.`;

      const requestBody = {
        user_id: 'katewamukul@gmail.com',
        agent_id: '684c1a1de5203d8a7b64cd82',
        session_id: '684c1a1de5203d8a7b64cd82-ubao3y0iskp',
        message: message
      };

      const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'sk-default-H0RDPuvT95RpWUepisEbn0NVZEs0hBEf'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`Roadmap API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      // Mock structured roadmap data
      const structuredRoadmapData = {
        "Timeline": "12 Months",
        "Total Budget": "$50,000 - $75,000",
        "Phases": [
          {
            "Phase": "Phase 1: Foundation & Quick Wins",
            "Duration": "Month 1-3",
            "Budget": "$10,000 - $15,000",
            "Objectives": [
              "Implement AI-powered chatbot for customer service",
              "Automate content generation workflows",
              "Set up basic analytics and monitoring"
            ],
            "Deliverables": [
              "Customer service chatbot deployment",
              "Content generation automation tools",
              "Performance monitoring dashboard"
            ],
            "Resources": [
              "1 AI Engineer",
              "1 Project Manager",
              "External chatbot platform subscription"
            ]
          },
          {
            "Phase": "Phase 2: Optimization & Personalization",
            "Duration": "Month 4-6",
            "Budget": "$15,000 - $20,000",
            "Objectives": [
              "Implement personalized product recommendations",
              "Optimize inventory management with AI forecasting",
              "Enhance customer segmentation"
            ],
            "Deliverables": [
              "Recommendation engine integration",
              "AI-powered inventory forecasting system",
              "Advanced customer analytics platform"
            ],
            "Resources": [
              "1 AI Engineer",
              "1 Data Scientist",
              "ML platform licensing"
            ]
          },
          {
            "Phase": "Phase 3: Advanced Analytics & Automation",
            "Duration": "Month 7-9",
            "Budget": "$15,000 - $20,000",
            "Objectives": [
              "Deploy predictive analytics for sales forecasting",
              "Implement fraud detection systems",
              "Automate marketing campaign optimization"
            ],
            "Deliverables": [
              "Predictive sales analytics dashboard",
              "Real-time fraud detection system",
              "Automated marketing optimization platform"
            ],
            "Resources": [
              "1 Senior AI Engineer",
              "1 Marketing Analyst",
              "Advanced analytics tools"
            ]
          },
          {
            "Phase": "Phase 4: Scaling & Innovation",
            "Duration": "Month 10-12",
            "Budget": "$10,000 - $20,000",
            "Objectives": [
              "Scale AI solutions across all business units",
              "Implement advanced AI features",
              "Establish AI governance and ethics framework"
            ],
            "Deliverables": [
              "Enterprise-wide AI deployment",
              "AI governance documentation",
              "Performance optimization reports"
            ],
            "Resources": [
              "AI Team Lead",
              "Compliance Officer",
              "Enterprise AI platform"
            ]
          }
        ],
        "Key Milestones": [
          {
            "Milestone": "Chatbot Go-Live",
            "Target Date": "Month 2",
            "Success Metrics": "30% reduction in customer service response time"
          },
          {
            "Milestone": "Recommendation Engine Launch",
            "Target Date": "Month 5",
            "Success Metrics": "10% increase in average order value"
          },
          {
            "Milestone": "Fraud Detection Deployment",
            "Target Date": "Month 8",
            "Success Metrics": "95% fraud detection accuracy"
          },
          {
            "Milestone": "Full AI Integration",
            "Target Date": "Month 12",
            "Success Metrics": "40% operational efficiency improvement"
          }
        ],
        "Risk Assessment": [
          {
            "Risk": "Data Privacy Compliance",
            "Impact": "High",
            "Mitigation": "Implement robust data governance and regular compliance audits"
          },
          {
            "Risk": "Technical Integration Challenges",
            "Impact": "Medium",
            "Mitigation": "Conduct thorough testing and maintain fallback systems"
          },
          {
            "Risk": "User Adoption Resistance",
            "Impact": "Medium",
            "Mitigation": "Comprehensive training programs and change management"
          }
        ]
      };
      
      setRoadmapData(structuredRoadmapData);
      console.log('✅ Roadmap data set in state successfully');
    } catch (err) {
      console.error('💥 Error generating roadmap:', err);
      setError('Unable to generate implementation roadmap. Please try again.');
    } finally {
      setRoadmapLoading(false);
    }
  };

  const generateCostBreakdown = async () => {
    if (costData) return; // Don't regenerate if already exists
    
    try {
      console.log('🔄 Starting cost breakdown generation process...');
      setCostLoading(true);
      
      const message = `Cost Breakdown Analysis Request:

Business Overview: ${questionnaireData.businessOverview}

Current AI Tools: ${questionnaireData.currentAITools}

AI Usage Areas: ${questionnaireData.aiUsageAreas}

AI Investment: ${questionnaireData.aiSpending}

AI Effectiveness: ${questionnaireData.effectiveAITools}

Technology Infrastructure: ${questionnaireData.technologyInfrastructure}

AI Team: ${questionnaireData.aiTeamMembers}

Data Sensitivity: ${questionnaireData.sensitiveInformation}

Compliance Requirements: ${questionnaireData.complianceRequirements}

Please provide a detailed cost breakdown analysis for AI implementation.`;

      const requestBody = {
        user_id: 'katewamukul@gmail.com',
        agent_id: '68481c3db67a5a754564ec0b',
        session_id: '68481c3db67a5a754564ec0b-uzi1zvjh2s9',
        message: message
      };

      const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'sk-default-H0RDPuvT95RpWUepisEbn0NVZEs0hBEf'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`Cost breakdown API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      // Mock structured cost breakdown data
      const structuredCostData = {
        "Total Investment": "$75,000",
        "ROI Projection": "325% over 24 months",
        "Payback Period": "8 months",
        "Annual Savings": "$120,000",
        "Implementation Costs": [
          {
            "Category": "Software & Licensing",
            "Amount": "$25,000",
            "Breakdown": [
              { "Item": "AI Platform Licenses", "Cost": "$15,000" },
              { "Item": "Development Tools", "Cost": "$5,000" },
              { "Item": "Security & Compliance Tools", "Cost": "$5,000" }
            ]
          },
          {
            "Category": "Personnel & Training",
            "Amount": "$30,000",
            "Breakdown": [
              { "Item": "AI Engineer Salary (6 months)", "Cost": "$20,000" },
              { "Item": "Team Training Programs", "Cost": "$7,000" },
              { "Item": "Consultant Fees", "Cost": "$3,000" }
            ]
          },
          {
            "Category": "Infrastructure & Integration",
            "Amount": "$15,000",
            "Breakdown": [
              { "Item": "Cloud Infrastructure", "Cost": "$8,000" },
              { "Item": "API Integration", "Cost": "$4,000" },
              { "Item": "Data Migration", "Cost": "$3,000" }
            ]
          },
          {
            "Category": "Contingency & Misc",
            "Amount": "$5,000",
            "Breakdown": [
              { "Item": "Project Management", "Cost": "$3,000" },
              { "Item": "Testing & QA", "Cost": "$2,000" }
            ]
          }
        ],
        "Operational Costs": [
          {
            "Category": "Monthly Recurring",
            "Amount": "$2,500/month",
            "Items": [
              { "Item": "AI Platform Subscriptions", "Cost": "$1,200/month" },
              { "Item": "Cloud Hosting", "Cost": "$800/month" },
              { "Item": "Support & Maintenance", "Cost": "$500/month" }
            ]
          }
        ],
        "Cost Savings Analysis": [
          {
            "Area": "Customer Service Automation",
            "Annual Savings": "$45,000",
            "Description": "30% reduction in customer service workload through AI chatbot implementation"
          },
          {
            "Area": "Content Generation Efficiency",
            "Annual Savings": "$35,000",
            "Description": "50% faster content creation saving 15 hours/week of manual work"
          },
          {
            "Area": "Inventory Optimization",
            "Annual Savings": "$25,000",
            "Description": "AI-driven inventory management reducing storage costs and stockouts"
          },
          {
            "Area": "Marketing ROI Improvement",
            "Annual Savings": "$15,000",
            "Description": "Improved targeting and personalization increasing conversion rates"
          }
        ],
        "Financial Projections": {
          "Year 1": {
            "Investment": "$75,000",
            "Savings": "$60,000",
            "Net": "-$15,000"
          },
          "Year 2": {
            "Investment": "$30,000",
            "Savings": "$120,000",
            "Net": "$90,000"
          },
          "Year 3": {
            "Investment": "$30,000",
            "Savings": "$150,000",
            "Net": "$120,000"
          }
        }
      };

      setCostData(structuredCostData);
      console.log('✅ Cost breakdown data set in state successfully');
    } catch (err) {
      console.error('💥 Error generating cost breakdown:', err);
      setError('Unable to generate cost breakdown analysis. Please try again.');
    } finally {
      setCostLoading(false);
    }
  };

  const generateSwotAnalysis = async () => {
    if (swotData) return; // Don't regenerate if already exists
    
    try {
      console.log('🔄 Starting SWOT analysis generation process...');
      setSwotLoading(true);
      
      const message = `SWOT Analysis Request:

Business Overview: ${questionnaireData.businessOverview}

Current AI Tools: ${questionnaireData.currentAITools}

AI Usage Areas: ${questionnaireData.aiUsageAreas}

AI Investment: ${questionnaireData.aiSpending}

AI Effectiveness: ${questionnaireData.effectiveAITools}

Technology Infrastructure: ${questionnaireData.technologyInfrastructure}

AI Team: ${questionnaireData.aiTeamMembers}

Data Sensitivity: ${questionnaireData.sensitiveInformation}

Compliance Requirements: ${questionnaireData.complianceRequirements}

Please provide a comprehensive SWOT analysis for AI implementation in this business.`;

      const requestBody = {
        user_id: 'katewamukul@gmail.com',
        agent_id: '684816b0b67a5a754564eb0d',
        session_id: '684816b0b67a5a754564eb0d-wv7zakiug8',
        message: message
      };

      const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'sk-default-H0RDPuvT95RpWUepisEbn0NVZEs0hBEf'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`SWOT analysis API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      // Mock structured SWOT data
      const structuredSwotData = {
        "Strengths": [
          "Existing AI experience with ChatGPT and automation tools",
          "Cloud-based infrastructure ready for AI integration",
          "Dedicated AI engineer on the team",
          "E-commerce platform with rich customer data",
          "Proven ROI from current AI implementations"
        ],
        "Weaknesses": [
          "Limited AI budget ($100 current investment)",
          "Small AI team (only one engineer)",
          "No formal compliance framework",
          "Limited AI tools currently in use",
          "Potential data security vulnerabilities"
        ],
        "Opportunities": [
          "Significant potential for customer service automation",
          "Large market for personalized e-commerce experiences",
          "Growing demand for AI-powered content generation",
          "Opportunity to optimize inventory management",
          "Potential for competitive advantage in jewelry market"
        ],
        "Threats": [
          "Competitors may adopt AI faster",
          "Data privacy regulations becoming stricter",
          "High cost of advanced AI implementations",
          "Potential customer resistance to automation",
          "Risk of over-dependence on AI systems"
        ],
        "Strategic Insights": [
          {
            "Strategy": "Leverage Existing Infrastructure",
            "Description": "Build upon current cloud-based infrastructure and existing AI experience to rapidly deploy new solutions"
          },
          {
            "Strategy": "Phased Implementation Approach",
            "Description": "Start with low-cost, high-impact solutions to prove ROI before scaling investment"
          },
          {
            "Strategy": "Focus on Customer-Centric AI",
            "Description": "Prioritize AI implementations that directly improve customer experience and drive revenue"
          }
        ],
        "Action Items": [
          {
            "Priority": "High",
            "Timeline": "30 days",
            "Action": "Develop comprehensive AI strategy and budget plan based on current capabilities"
          },
          {
            "Priority": "High",
            "Timeline": "60 days",
            "Action": "Implement customer service chatbot to reduce support workload"
          },
          {
            "Priority": "Medium",
            "Timeline": "90 days",
            "Action": "Establish data governance and security protocols for AI implementations"
          },
          {
            "Priority": "Medium",
            "Timeline": "120 days",
            "Action": "Scale content generation automation across all marketing channels"
          }
        ]
      };

      setSwotData(structuredSwotData);
      console.log('✅ SWOT analysis data set in state successfully');
    } catch (err) {
      console.error('💥 Error generating SWOT analysis:', err);
      setError('Unable to generate SWOT analysis. Please try again.');
    } finally {
      setSwotLoading(false);
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === 'roadmap' && !roadmapData && !roadmapLoading) {
      generateRoadmap();
    }
    if (value === 'cost' && !costData && !costLoading) {
      generateCostBreakdown();
    }
    if (value === 'swot' && !swotData && !swotLoading) {
      generateSwotAnalysis();
    }
  };

  const downloadBlueprint = () => {
    console.log('💾 Download blueprint requested');
    if (!blueprintData) {
      console.warn('⚠️ Cannot download: Blueprint data is null');
      return;
    }
    
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 relative overflow-hidden font-['Poppins']">
      {/* Abstract constellation background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(20, 184, 166, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        
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

      <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-32 w-48 h-48 bg-fuchsia-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto px-8 py-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-teal-400/20">
            <Sparkles className="w-6 h-6 text-teal-400" />
            <span className="text-white font-medium text-lg">AI Analysis Complete</span>
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

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2">
            <TabsTrigger 
              value="blueprint" 
              className="text-white data-[state=active]:bg-teal-500/20 data-[state=active]:text-teal-400 rounded-xl font-medium py-4 transition-all duration-300"
            >
              <Target className="w-5 h-5 mr-2" />
              AI Blueprint
            </TabsTrigger>
            <TabsTrigger 
              value="roadmap" 
              className="text-white data-[state=active]:bg-fuchsia-500/20 data-[state=active]:text-fuchsia-400 rounded-xl font-medium py-4 transition-all duration-300"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Implementation Roadmap
            </TabsTrigger>
            <TabsTrigger 
              value="cost" 
              className="text-white data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400 rounded-xl font-medium py-4 transition-all duration-300"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Cost Breakdown
            </TabsTrigger>
            <TabsTrigger 
              value="swot" 
              className="text-white data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 rounded-xl font-medium py-4 transition-all duration-300"
            >
              <Award className="w-5 h-5 mr-2" />
              SWOT Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="blueprint">
            {blueprintData && (
              <>
                <BusinessAnalysis data={blueprintData['Business Analysis']} />
                <OpportunitiesSection opportunities={blueprintData.Opportunities} />
                <RecommendationsSection recommendations={blueprintData.Recommendations} />
                <QuickWins quickWins={blueprintData['Quick Wins']} />
              </>
            )}
          </TabsContent>

          <TabsContent value="roadmap">
            <RoadmapSection roadmapData={roadmapData} loading={roadmapLoading} />
          </TabsContent>

          <TabsContent value="cost">
            <CostBreakdownSection costData={costData} costLoading={costLoading} generateCostBreakdown={generateCostBreakdown} />
          </TabsContent>

          <TabsContent value="swot">
            <SwotAnalysisSection swotData={swotData} swotLoading={swotLoading} generateSwotAnalysis={generateSwotAnalysis} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BlueprintResults;
