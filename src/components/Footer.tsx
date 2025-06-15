
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter />, href: "#" },
    { icon: <Github />, href: "#" },
    { icon: <Linkedin />, href: "#" },
  ];

  return (
    <footer className="border-t border-purple-400/20 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400">&copy; 2025 Aetherius Labs. All Rights Reserved.</p>
        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-gray-400 hover:text-green-400 transition-colors">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
