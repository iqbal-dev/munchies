import React from "react";

type componentProps = {
  children?: React.ReactNode;
};

const Badge: React.FC<componentProps> = ({ children }) => {
  return (
    <span
      className="rounded px-2"
      style={{ backgroundColor: "#e5e5e5", padding: "3px 5px" }}
    >
      {children}
    </span>
  );
};

export default Badge;
