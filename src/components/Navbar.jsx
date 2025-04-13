
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-cyber-darkGray border-b border-cyber-blue/30 px-4 py-3 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2" onClick={() => navigateTo('/')} role="button">
          <Shield className="h-8 w-8 text-cyber-blue" />
          <span className="text-xl font-bold text-white">
            Cyber<span className="text-cyber-blue">Defense</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => navigateTo('/sql-injection')} 
            className="text-white hover:text-cyber-blue transition-colors"
          >
            SQL Injection
          </button>
          <button 
            onClick={() => navigateTo('/xss')} 
            className="text-white hover:text-cyber-purple transition-colors"
          >
            XSS Attack
          </button>
          <button 
            onClick={() => navigateTo('/ddos')} 
            className="text-white hover:text-cyber-green transition-colors"
          >
            DDoS Attack
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyber-darkGray border-t border-cyber-blue/30 py-2">
          <div className="container mx-auto flex flex-col space-y-3 px-4">
            <button 
              onClick={() => navigateTo('/sql-injection')} 
              className="text-white hover:text-cyber-blue transition-colors py-2"
            >
              SQL Injection
            </button>
            <button 
              onClick={() => navigateTo('/xss')} 
              className="text-white hover:text-cyber-purple transition-colors py-2"
            >
              XSS Attack
            </button>
            <button 
              onClick={() => navigateTo('/ddos')} 
              className="text-white hover:text-cyber-green transition-colors py-2"
            >
              DDoS Attack
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
