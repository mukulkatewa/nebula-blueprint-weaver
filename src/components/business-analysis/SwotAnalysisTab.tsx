
import React from 'react';
import { Shield, Target, Eye, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SwotAnalysisTabProps {
  data: any;
  loading: boolean;
}

export const SwotAnalysisTab: React.FC<SwotAnalysisTabProps> = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
        <span className="ml-3 text-indigo-400">Conducting SWOT analysis...</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-12 text-gray-400">
        No SWOT analysis data available
      </div>
    );
  }

  return (
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
                {data.strengths || 'Strengths will be identified here...'}
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
                {data.weaknesses || 'Weaknesses will be analyzed here...'}
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
                {data.opportunities || 'Opportunities will be identified here...'}
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
                {data.threats || 'Threats will be analyzed here...'}
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
              {data.strategic_insights || 'Strategic insights will be provided here...'}
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
              {data.action_items || 'Recommended actions will be outlined here...'}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
