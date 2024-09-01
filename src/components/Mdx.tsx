"use client";
import { useMDXComponent } from "next-contentlayer2/hooks";
import React from "react";
import Image from "next/image";
import Callout from "./Callout";

const components = {
  Image,
  Callout,
};

const Mdx: React.FC<{ code: string }> = ({ code }) => {
  const Component = useMDXComponent(code);
  return (
    <div className="prose max-w-full">
      <Component components={components} />
    </div>
  );
};

export default Mdx;
