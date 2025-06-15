
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';

interface LandingPageProps {
  onStartJourney: () => void;
}

const LandingPage = ({ onStartJourney }: LandingPageProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-sky-400 to-blue-300 bg-clip-text text-transparent animate-fade-in">
            Aetherius Labs
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-sky-200 mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Empowering Your Teams with Strategic AI Blueprints
          </p>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '1s' }}>
            Generate a comprehensive AI strategy for your organization. Our AI-powered tool helps your teams identify opportunities and create a roadmap for AI integration.
          </p>

          {/* CTA Button */}
          <Button
            onClick={onStartJourney}
            className="group relative px-12 py-6 text-xl font-semibold bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white border-2 border-sky-400/50 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/25 animate-fade-in"
            style={{ animationDelay: '1.5s' }}
          >
            <Briefcase className="w-6 h-6 mr-3" />
            Generate Your AI Blueprint
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/20 to-blue-400/20 animate-pulse" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
