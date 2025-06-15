
import { useQuery } from '@tanstack/react-query';
import { generateBlueprint, Blueprint } from '../services/api';
import { QuestionnaireData } from '../pages/Index';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CosmicLoader from './CosmicLoader';

interface DynamicBlueprintResultsProps {
  questionnaireData: QuestionnaireData;
  apiKey: string;
  onBack: () => void;
}

const DynamicBlueprintResults = ({ questionnaireData, apiKey, onBack }: DynamicBlueprintResultsProps) => {
  const { data: blueprint, isLoading, isError, error } = useQuery<Blueprint, Error>({
    queryKey: ['blueprint', questionnaireData],
    queryFn: () => generateBlueprint(questionnaireData, apiKey),
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <CosmicLoader />
        <p className="text-xl mt-4">Generating your AI Blueprint...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <p className="text-xl text-red-500">Error generating blueprint:</p>
        <p className="text-red-400">{error.message}</p>
        <Button onClick={onBack} className="mt-4">Go Back</Button>
      </div>
    );
  }

  if (!blueprint) {
    return null;
  }
  
  const renderList = (title: string, items: string[]) => (
    <div>
      <h3 className="text-lg font-semibold text-cyan-400 mb-2">{title}</h3>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );

  return (
    <div className="container mx-auto p-4 md:p-8 text-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-cyan-400">Your Custom AI Blueprint</h1>
        <p className="text-lg text-gray-300 mt-2">A strategic guide to integrating AI into your business.</p>
      </header>

      <div className="space-y-6">
        <Card className="bg-gray-800 border-cyan-500">
          <CardHeader>
            <CardTitle className="text-cyan-400">Executive Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{blueprint.businessAnalysis}</p>
          </CardContent>
        </Card>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="swot" className="bg-gray-800 border-cyan-500 rounded-lg mb-4">
            <AccordionTrigger className="text-xl font-semibold text-cyan-400 px-6">SWOT Analysis</AccordionTrigger>
            <AccordionContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderList("Strengths", blueprint.swotAnalysis.strengths)}
              {renderList("Weaknesses", blueprint.swotAnalysis.weaknesses)}
              {renderList("Opportunities", blueprint.swotAnalysis.opportunities)}
              {renderList("Threats", blueprint.swotAnalysis.threats)}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="opportunities" className="bg-gray-800 border-cyan-500 rounded-lg mb-4">
            <AccordionTrigger className="text-xl font-semibold text-cyan-400 px-6">AI Opportunities & Recommendations</AccordionTrigger>
            <AccordionContent className="p-6 space-y-4">
              {renderList("Key Opportunities", blueprint.opportunities)}
              {renderList("Our Recommendations", blueprint.recommendations)}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="roadmap" className="bg-gray-800 border-cyan-500 rounded-lg mb-4">
            <AccordionTrigger className="text-xl font-semibold text-cyan-400 px-6">Implementation Roadmap</AccordionTrigger>
            <AccordionContent className="p-6">
              <ul className="space-y-4">
                {blueprint.roadmap.map((item, index) => (
                  <li key={index} className="border-l-2 border-cyan-500 pl-4">
                    <h3 className="font-bold">{item.phase}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="cost" className="bg-gray-800 border-cyan-500 rounded-lg">
            <AccordionTrigger className="text-xl font-semibold text-cyan-400 px-6">Estimated Cost Breakdown</AccordionTrigger>
            <AccordionContent className="p-6">
                <ul className="divide-y divide-gray-700">
                  {blueprint.costBreakdown.map((item, index) => (
                    <li key={index} className="flex justify-between py-2">
                      <span>{item.item}</span>
                      <span className="font-bold">{item.cost}</span>
                    </li>
                  ))}
                </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="text-center mt-8">
        <Button onClick={onBack}>Start Over</Button>
      </div>
    </div>
  );
};

export default DynamicBlueprintResults;
