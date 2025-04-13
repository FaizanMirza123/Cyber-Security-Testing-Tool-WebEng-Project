
import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-darkGray border-t border-cyber-blue/30 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-cyber-blue" />
            <span className="text-lg font-bold text-white">
              Cyber<span className="text-cyber-blue">Defense</span>
            </span>
          </div>
          
          <div className="text-gray-400 text-sm">
            This platform is for educational purposes only. Do not use these techniques for malicious purposes.
          </div>
          
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            © {new Date().getFullYear()} CyberDefense Playground
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
