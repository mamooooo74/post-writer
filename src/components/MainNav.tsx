"use client";
import { NavItem } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import MobileNav from "./MobileNav";

interface MainNavProps {
  items: NavItem[];
  children?: React.ReactNode;
}

const MainNav: React.FC<MainNavProps> = ({ items }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="flex items-center md:gap-10">
      <Link href={"/"} className="hidden md:flex items-center space-x-2">
        <span className="font-bold hidden sm:inline-block">Post Writer</span>
      </Link>
      <nav className="md:flex gap-6 hidden">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-lg sm:text-sm font-medium hover:text-foreground/80"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        className="md:hidden"
        onClick={() => setShowMobileMenu((prev) => !prev)}
      >
        <span>メニュー</span>
      </button>
      {showMobileMenu && <MobileNav items={items} />}
    </div>
  );
};

export default MainNav;
