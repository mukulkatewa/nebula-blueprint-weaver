
import { Button } from '@/components/ui/button';
import { Rocket, Star, Cpu, BrainCircuit, Lightbulb } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface LandingPageProps {
  onStartJourney: () => void;
}

const LandingPage = ({ onStartJourney }: LandingPageProps) => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
          {/* Animated background stars */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              >
                <Star className="w-1 h-1 text-blue-200 fill-current" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-transparent to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-gradient-radial from-blue-800/20 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 nebula-text animate-fade-in">
              Aetherius Labs
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Mapping Your Business Galaxy with AI Brilliance
            </p>
            <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '1s' }}>
              Welcome, cosmic voyager! Harness the stellar power of AI to illuminate your business universe with our revolutionary Nebula Navigator AI Blueprint Generator.
            </p>
            <Button
              onClick={onStartJourney}
              className="group relative px-12 py-6 text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-2 border-blue-400/50 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 animate-fade-in"
              style={{ animationDelay: '1.5s' }}
            >
              <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Launch Your AI Journey
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse" />
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 nebula-text">What is Aetherius Labs?</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
              Aetherius Labs is your co-pilot in the vast universe of Artificial Intelligence. We provide a unique AI Blueprint Generator that analyzes your business operations and crafts a tailored AI integration strategy. Our mission is to demystify AI and make its power accessible to every business, regardless of size or technical expertise.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 lg:py-32 bg-black/20 cosmic-glow">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center nebula-text">Our Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg border border-blue-500/30 bg-secondary/30 text-center cosmic-glow transition-all duration-300 hover:border-blue-400 hover:scale-105">
                <BrainCircuit className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                <h3 className="text-2xl font-bold mb-2">Personalized AI Blueprint</h3>
                <p className="text-gray-400">Receive a custom roadmap detailing the best AI tools and strategies for your specific business needs.</p>
              </div>
              <div className="p-8 rounded-lg border border-blue-500/30 bg-secondary/30 text-center cosmic-glow transition-all duration-300 hover:border-blue-400 hover:scale-105">
                <Cpu className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                <h3 className="text-2xl font-bold mb-2">Technology Stack Analysis</h3>
                <p className="text-gray-400">Our system evaluates your current tech infrastructure to ensure seamless AI integration.</p>
              </div>
              <div className="p-8 rounded-lg border border-blue-500/30 bg-secondary/30 text-center cosmic-glow transition-all duration-300 hover:border-blue-400 hover:scale-105">
                <Lightbulb className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                <h3 className="text-2xl font-bold mb-2">Strategic Recommendations</h3>
                <p className="text-gray-400">Go beyond tools with actionable insights on team structure, compliance, and security.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
