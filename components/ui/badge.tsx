import cn from "classnames";
import React from "react";
type componentProps = {
  children?: React.ReactNode;
  className?: string;
};

const Badge: React.FC<componentProps> = ({ children, className }) => {
  return (
    <span
      className={cn("rounded px-2", className)}
      style={{ backgroundColor: "#e5e5e5", padding: "3px 5px" }}
    >
      {children}
    </span>
  );
};

export default Badge;
