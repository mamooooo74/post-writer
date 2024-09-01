import React from "react";

const Callout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="my-6 flex items-center rounded-md border border-l-4 p-4">
      <div>{children}</div>
    </div>
  );
};

export default Callout;
