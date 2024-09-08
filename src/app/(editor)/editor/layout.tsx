import React from "react";

const EditorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto grid items-center gap-10 py-8">
      {children}
    </div>
  );
};

export default EditorLayout;
