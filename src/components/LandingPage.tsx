
import { Button } from '@/components/ui/button';
import { Rocket, Star } from 'lucide-react';

interface LandingPageProps {
  onStartJourney: () => void;
}

const LandingPage = ({ onStartJourney }: LandingPageProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <Star className="w-1 h-1 text-blue-200 fill-current" />
          </div>
        ))}
      </div>

      {/* Nebula gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-transparent to-transparent animate-pulse" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-800/20 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-fade-in">
            Aetherius Labs
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Mapping Your Business Galaxy with AI Brilliance
          </p>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '1s' }}>
            Welcome, cosmic voyager! Harness the stellar power of AI to illuminate your business universe with our revolutionary Nebula Navigator AI Blueprint Generator.
          </p>

          {/* CTA Button */}
          <Button
            onClick={onStartJourney}
            className="group relative px-12 py-6 text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-2 border-blue-400/50 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 animate-fade-in"
            style={{ animationDelay: '1.5s' }}
          >
            <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Launch Your AI Journey
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse" />
          </Button>

          {/* Floating cosmic elements */}
          <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
            <div className="w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full blur-sm" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '3s', animationDuration: '4s' }}>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm" />
          </div>
          <div className="absolute bottom-32 left-1/4 animate-bounce" style={{ animationDelay: '1s', animationDuration: '5s' }}>
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
