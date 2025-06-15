
import React from 'react';
import { Sparkles, TrendingUp, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BusinessAnalysisTabProps {
  data: any;
  loading: boolean;
}

export const BusinessAnalysisTab: React.FC<BusinessAnalysisTabProps> = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        <span className="ml-3 text-purple-400">Analyzing business blueprint...</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-12 text-gray-400">
        No business analysis data available
      </div>
    );
  }

  return (
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
              {data.business_analysis || 'Business analysis will appear here after processing...'}
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
              {data.opportunities || 'Growth opportunities will be identified here...'}
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
              {data.recommendations || 'Strategic recommendations will be provided here...'}
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
              {data.quick_wins || 'Quick win opportunities will be highlighted here...'}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
