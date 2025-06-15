
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

interface ApiKeyPromptProps {
  onSubmit: (apiKey: string) => void;
  onBack: () => void;
}

const ApiKeyPrompt = ({ onSubmit, onBack }: ApiKeyPromptProps) => {
  const [key, setKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key.trim()) {
      onSubmit(key.trim());
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md bg-gray-800 border-cyan-500 text-white">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="text-cyan-400">Enter Your Perplexity API Key</CardTitle>
            <CardDescription className="text-gray-400 pt-2">
              To generate your custom AI blueprint, we need a Perplexity API key. Your key is stored locally in your browser and is not sent to our servers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input
              type="password"
              placeholder="pplx-..."
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500"
            />
            <a 
              href="https://docs.perplexity.ai/docs/getting-started" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-cyan-400 hover:underline mt-2 inline-block"
            >
              How to get an API key?
            </a>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button type="submit" disabled={!key.trim()}>
              Generate Blueprint
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default ApiKeyPrompt;
