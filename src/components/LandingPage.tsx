
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';
import Header from './Header';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';

interface LandingPageProps {
  onStartJourney: () => void;
}

const LandingPage = ({ onStartJourney }: LandingPageProps) => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center pt-20 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-radial from-blue-700 to-transparent blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-radial from-cyan-700 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Logo/Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent animate-fade-in">
              Aetherius Labs
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-cyan-200 mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Empowering Your Teams with Strategic AI Blueprints
            </p>

            {/* Subtitle */}
            <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '1s' }}>
              Generate a comprehensive AI strategy for your organization. Our AI-powered tool helps your teams identify opportunities and create a roadmap for AI integration.
            </p>

            {/* CTA Button */}
            <Button
              onClick={onStartJourney}
              className="group relative px-12 py-6 text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-2 border-primary/50 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 animate-fade-in"
              style={{ animationDelay: '1.5s' }}
            >
              <Briefcase className="w-6 h-6 mr-3" />
              Generate Your AI Blueprint
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 animate-pulse" />
            </Button>
          </div>
        </section>

        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
