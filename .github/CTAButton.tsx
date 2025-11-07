import React from 'react';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick, className = '', as = 'button', href }) => {
  const baseClasses = "text-lg md:text-xl font-bold bg-[#FBBF24] text-[#0F172A] py-4 px-8 rounded-lg shadow-lg shadow-yellow-500/20 transform transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/40 focus:outline-none focus:ring-4 focus:ring-yellow-300";

  if (as === 'a') {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${className} inline-block text-center`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className} font-cairo`}>
      {text}
    </button>
  );
};

export default CTAButton;