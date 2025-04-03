"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MenuLink = ({ item, isActive }) => {
  return (
    <Link
      href={item.path}
      className={clsx(
        "px-2 flex flex-col items-center relative transition-colors",
        isActive
          ? "text-primary-yellow"
          : "text-neutral-light-grey hover:text-neutral-white"
      )}
    >
      <span className="font-outfit text-center py-1 text-sm overflow-hidden uppercase whitespace-nowrap">
        {item.name}
      </span>
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="w-full h-1 bg-primary-yellow rounded-full"
        />
      )}
    </Link>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Books",
      path: "/books",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 z-30">  
          <Image
            src="/assets/images/logo.png"
            alt=""
            width={40}
            height={40}
          />
          <span className="text-yellow-400 font-bold text-2xl sm:hidden md:block ">
            Florence Wanguku
          </span>
        </Link>

        <nav className="hidden relative md:flex space-x-8 z-30">
          {links.map((item) => {
            const activeTab = pathname === item.path;
            return (
              <div key={item.name}>
                <MenuLink item={item} isActive={activeTab} />
              </div>
            );
          })}
        </nav>
        <Link
          href="/free-ebook"
          className="bg-primary-yellow/90 hover:bg-primary-yellow font-outfit text-neutral-black px-6 py-2 font-semibold rounded-sm capitalize z-30"
        >
          Buy book
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
