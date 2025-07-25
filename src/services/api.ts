import { QuestionnaireData } from "../pages/Index";

// Define the structure of the blueprint data
export interface Blueprint {
  businessAnalysis: string;
  opportunities: string[];
  recommendations: string[];
  roadmap: { phase: string; description: string; }[];
  costBreakdown: { item: string; cost: string; }[];
  swotAnalysis: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
}

// API function to generate blueprint from an AI service
export const generateBlueprint = async (data: QuestionnaireData, apiKey: string): Promise<Blueprint> => {
  console.log("Generating blueprint for:", data);

  if (!apiKey) {
    console.error("Perplexity API key is not provided.");
    throw new Error("Perplexity API key is not configured. Please provide your key to generate a blueprint.");
  }

  const prompt = `
  Based on the following business information, generate a detailed AI integration blueprint.
  
  Business Overview: ${data.businessOverview}
  Current AI Tools: ${data.currentAITools}
  Desired AI Usage Areas: ${data.aiUsageAreas}
  AI Spending Budget: ${data.aiSpending}
  Most Effective AI Tools So Far: ${data.effectiveAITools}
  Technology Infrastructure: ${data.technologyInfrastructure}
  Team Members for AI projects: ${data.aiTeamMembers}
  Handling of Sensitive Information: ${data.sensitiveInformation}
  Compliance Requirements: ${data.complianceRequirements}

  Please provide a response in a valid, raw JSON format, without any introductory text, comments, or code block formatting like \`\`\`json. The JSON object should strictly adhere to the following TypeScript interface:

  export interface Blueprint {
    businessAnalysis: string;
    opportunities: string[];
    recommendations: string[];
    roadmap: { phase: string; description: string; }[];
    costBreakdown: { item: string; cost: string; }[];
    swotAnalysis: {
      strengths: string[];
      weaknesses: string[];
      opportunities: string[];
      threats: string[];
    };
  }

  Generate concise but insightful content for each field based on the provided business information. Ensure all fields are populated.
  `;

  const response = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama-3.1-sonar-large-128k-online',
      messages: [
        {
          role: 'system',
          content: 'You are an expert AI strategy consultant. Your task is to generate a single, raw JSON object based on user input, following a strict schema. Do not include any extra text, explanations, or markdown formatting.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Perplexity API Error:", errorBody);
    throw new Error(`API request failed: ${response.statusText} - ${errorBody}`);
  }

  const result = await response.json();
  const content = result.choices[0].message.content;

  try {
    const cleanedContent = content.replace(/```json\n?/g, '').replace(/\n?```/g, '').trim();
    const blueprint: Blueprint = JSON.parse(cleanedContent);
    return blueprint;
  } catch (e) {
    console.error("Failed to parse blueprint JSON:", e);
    console.error("Received content from API:", content);
    throw new Error("Failed to parse the AI-generated blueprint. The format was invalid.");
  }
};
