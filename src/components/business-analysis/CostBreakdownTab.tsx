
import React from 'react';
import { DollarSign, TrendingUp, PiggyBank, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CostBreakdownTabProps {
  data: any;
  loading: boolean;
}

export const CostBreakdownTab: React.FC<CostBreakdownTabProps> = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
        <span className="ml-3 text-green-400">Calculating cost breakdown...</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-12 text-gray-400">
        No cost breakdown data available
      </div>
    );
  }

  return (
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
              {data.cost_breakdown || 'Detailed cost breakdown will be provided here...'}
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
              {data.roi_projections || 'ROI projections will be calculated here...'}
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
              {data.cost_savings || 'Cost savings analysis will be provided here...'}
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
              {data.financial_projection || '3-year financial projections will be detailed here...'}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
