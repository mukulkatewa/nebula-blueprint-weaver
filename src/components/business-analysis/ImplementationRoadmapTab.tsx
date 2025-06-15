
import React from 'react';
import { MapPin, Calendar, DollarSign, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ImplementationRoadmapTabProps {
  data: any;
  loading: boolean;
}

export const ImplementationRoadmapTab: React.FC<ImplementationRoadmapTabProps> = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-blue-400">Creating implementation roadmap...</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-12 text-gray-400">
        No implementation roadmap data available
      </div>
    );
  }

  return (
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
              {data.phases || 'Implementation phases will be outlined here...'}
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
              {data.milestones || 'Key milestones will be identified here...'}
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
                {data.timeline || '12-month implementation timeline...'}
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
                {data.budget || 'Budget estimates will be provided...'}
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
              {data.risks || 'Risk assessment and mitigation strategies...'}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
