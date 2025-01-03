import React from "react";

type IconProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  text?: string;
};
const Icon: React.FC<IconProps> = ({
  children,
  onClick,
  className,
  disabled,
  text,
}) => {
  const classes = `bg-details/5 border border-primary/15 p-2 w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full ${className}`;
  return (
    <div className={`flex items-center ${text && "gap-4"}`}>
      <button className={classes} onClick={onClick} disabled={disabled} type="button">
        {children}
      </button>
      <span className="font-satoshi tracking-wider uppercase text-xs md:text-sm opacity-80">
        {text}
      </span>
    </div>
  );
};

export default Icon;
