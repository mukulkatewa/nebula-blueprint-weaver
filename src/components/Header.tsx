
import { Briefcase } from 'lucide-react';

const Header = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2">
           <Briefcase className="h-8 w-8 text-primary" />
           <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
             Aetherius Labs
           </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <button onClick={() => scrollTo('about-us')} className="text-gray-300 hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollTo('contact-us')} className="text-gray-300 hover:text-primary transition-colors">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
