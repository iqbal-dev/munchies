import cn from "classnames";
import React from "react";
interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  inputType: string;
  className: string;
}

const Button: React.FC<Props> = ({
  children,
  className,
  inputType = "button",
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
