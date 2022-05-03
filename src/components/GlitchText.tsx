import React from "react";

interface Props {
  children: React.ReactNode;
}

const GlitchText: React.FC<Props> = ({ children }) => {
  return (
    <p className="inline-block text-xl glitch">
      <span aria-hidden="true">{children}</span>
      {children}
      <span aria-hidden="true">{children}</span>
    </p>
  );
};

export default GlitchText;
