import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BusinessAnalysisTab } from './business-analysis/BusinessAnalysisTab';
import { ImplementationRoadmapTab } from './business-analysis/ImplementationRoadmapTab';
import { CostBreakdownTab } from './business-analysis/CostBreakdownTab';
import { SwotAnalysisTab } from './business-analysis/SwotAnalysisTab';

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

          <TabsContent value="blueprint" className="mt-6">
            <BusinessAnalysisTab data={blueprintData} loading={loading.blueprint} />
          </TabsContent>

          <TabsContent value="roadmap" className="mt-6">
            <ImplementationRoadmapTab data={roadmapData} loading={loading.roadmap} />
          </TabsContent>

          <TabsContent value="cost" className="mt-6">
            <CostBreakdownTab data={costData} loading={loading.cost} />
          </TabsContent>

          <TabsContent value="swot" className="mt-6">
            <SwotAnalysisTab data={swotData} loading={loading.swot} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BlueprintResults;
