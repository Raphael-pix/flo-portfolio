import React from "react";
import Image from "next/image";
import Topbar from "@/components/topbar";
import Navbar from "@/components/navbar";

const HeroSection = () => {
  return (
    <div
      className="relative w-full bg-neutral-black bg-opacity-80"
      style={{
        backgroundImage: 'url("/assets/images/hero-background-2.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-neutral-grey/30 z-0" />
      <Topbar />
      <Navbar />

      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="relative w-64 h-80 mx-auto transform rotate-3 shadow-xl">
            <Image
              src="/assets/images/book-cover.jpg"
              alt="A Brief History of a Perfect Future Book Cover"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Book Description */}
        <div className="z-30 md:w-2/3 md:pl-12">
          <div className="text-primary-yellow font-medium mb-2 text-2xl font-oswald">LATEST RELEASE</div>
          <div className="text-primary-yellow font-medium mb-6 font-oswald">BY CHUNKA MUI</div>

          <div className="border-l-4 border-primary-yellow pl-4 font-baskerville">
            <h1 className="text-4xl md:text-6xl text-neutral-white leading-tight mb-2">
              A Brief History
            </h1>
            <h1 className="text-4xl md:text-6xl text-neutral-white leading-tight">
              of a Perfect Future
            </h1>
          </div>

          <p className="mt-6 text-white text-lg leading-relaxed">
            A few years ago, my daughter Zoe saw me referred to as a "futurist"
            and quipped...
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
