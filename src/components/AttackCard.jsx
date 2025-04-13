
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AttackCard = ({ title, description, icon: Icon, color, path }) => {
  const navigate = useNavigate();

  const getButtonClass = () => {
    if (color === 'blue') return 'cyber-button';
    if (color === 'green') return 'cyber-button-green';
    if (color === 'purple') return 'cyber-button-purple';
    return 'cyber-button';
  };

  const getIconClass = () => {
    if (color === 'blue') return 'text-cyber-blue';
    if (color === 'green') return 'text-cyber-green';
    if (color === 'purple') return 'text-cyber-purple';
    return 'text-cyber-blue';
  };

  return (
    <div className="cyber-card group hover:animate-pulse-glow transition-all duration-300">
      <div className={`${getIconClass()} mb-4`}>
        <Icon size={36} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <button 
        onClick={() => navigate(path)}
        className={`${getButtonClass()}`}
      >
        Learn More
      </button>
    </div>
  );
};

export default AttackCard;
