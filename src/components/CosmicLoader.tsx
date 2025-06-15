
import { Rocket, Star } from 'lucide-react';

interface CosmicLoaderProps {
  message?: string;
}

const CosmicLoader = ({ message = "Navigating the cosmos..." }: CosmicLoaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="relative">
        {/* Orbiting stars */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
          <Star className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-3 h-3 text-blue-400 fill-current" />
          <Star className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2 w-2 h-2 text-purple-400 fill-current" />
          <Star className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-3 h-3 text-teal-400 fill-current" />
          <Star className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2 w-2 h-2 text-green-400 fill-current" />
        </div>
        
        {/* Central rocket */}
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
          <Rocket className="w-8 h-8 text-white animate-bounce" />
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-semibold text-blue-100 mb-2">{message}</h3>
        <div className="flex space-x-1 justify-center">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default CosmicLoader;
