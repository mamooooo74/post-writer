import { cn } from "@/lib/utils";
import React from "react";

interface DashBoardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

const DashBoardShell: React.FC<DashBoardShellProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("grid items-center gap-8", className)} {...props}>
      {children}
    </div>
  );
};

export default DashBoardShell;
