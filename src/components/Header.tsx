
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-lg border-b border-slate-800">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-2xl font-bold nebula-text">
          Aetherius Labs
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-lg">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>
        <Button variant="outline" className="hidden md:flex items-center gap-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
          <LogIn className="w-4 h-4" />
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
