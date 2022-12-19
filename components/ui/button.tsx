import cn from "classnames";
import React from "react";
type componentProps = {
  children?: React.ReactNode;
  onClick: () => void;
  inputType?: "submit" | "reset" | "button" | undefined;
  className: string;
};

const Button: React.FC<componentProps> = ({
  children,
  className,
  inputType = "submit",
  onClick,
  ...rest
}) => {
  return (
    <button
      type={inputType}
      onClick={onClick}
      className={cn("w-100", className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
