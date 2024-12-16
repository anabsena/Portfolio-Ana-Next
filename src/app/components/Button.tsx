import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  disabled = false 
}) => {
  const baseStyles = 'px-4 py-2 rounded-sm transition-all duration-300 uppercase text-sm tracking-wider';
  
  const variants: { [key in 'primary' | 'secondary' | 'danger']: string } = {
    primary: 'bg-details/5 border border-primary/15 hover:opacity-80',
    secondary: 'bg-details text-secondary hover:opacity-80',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
