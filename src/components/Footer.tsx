
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full py-12 bg-black/20 mt-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-2xl font-bold nebula-text mb-4">Contact Us</h3>
        <p className="text-gray-400 mb-6">Have questions? Reach out to us.</p>
        <a href="mailto:contact@aetheriuslabs.com" className="text-blue-400 hover:underline text-lg">contact@aetheriuslabs.com</a>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
        </div>
        <p className="text-gray-500 mt-8 text-sm">&copy; 2025 Aetherius Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
