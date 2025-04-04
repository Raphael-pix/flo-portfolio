import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AuthorSection = () => {
  return (
    <div className="w-full bg-indigo-900 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* Left Column - Author Information */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8">
          <h3 className="text-yellow-400 text-xl font-medium mb-2">ABOUT THE AUTHOR</h3>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">CHUNKA MUI</h1>
          
          <div className="w-48 h-1 bg-yellow-400 mb-8"></div>
          
          <p className="text-white text-lg leading-relaxed mb-12">
            I'm a futurist and advisor on strategy and innovation trying 
            to help invent the world we can proudly leave to my kids—
            and yours. I was born in Hong Kong, raised on the South 
            Side of Chicago, and now live in (and zoom from) the 
            Champlain Valley of Western Vermont.
          </p>
          
          <Link href="/books">
            <span className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 transition duration-300">
              VIEW ALL BOOKS
            </span>
          </Link>
        </div>
        
        {/* Right Column - Author Images */}
        <div className="w-full md:w-1/2 relative">
          {/* Main image */}
          <div className="w-full aspect-[4/3] relative">
            <Image 
              src="/images/chunka-speaking.jpg" 
              alt="Chunka Mui speaking" 
              layout="fill" 
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          
          {/* Inset image */}
          <div className="absolute -bottom-6 -right-6 w-1/3 aspect-square border-4 border-yellow-400">
            <div className="relative w-full h-full">
              <Image 
                src="/images/chunka-portrait.jpg" 
                alt="Chunka Mui portrait" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorSection;