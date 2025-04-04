import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BookDescriptionSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-white">
      {/* Left Column */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <div className="max-w-lg">
          <h3 className="text-yellow-500 text-xl font-medium mb-2">CHUNKA MUI</h3>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            FUTURIST & INNOVATION ADVISOR
          </h1>
          
          <div className="w-48 h-1 bg-yellow-500 mb-8"></div>
          
          <p className="text-gray-800 text-lg leading-relaxed mb-12">
            I help individuals and organizations pursue innovation at the 
            intersection of purpose, advantage and societal need.
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">AS FEATURED ON</h2>
          
          <div className="flex flex-wrap items-center gap-8">
            <div className="w-24 h-12 relative">
              <Image 
                src="/images/forbes-logo.png" 
                alt="Forbes logo" 
                layout="fill" 
                objectFit="contain" 
                objectPosition="left"
              />
            </div>
            <div className="w-24 h-12 relative">
              <Image 
                src="/images/cnbc-logo.png" 
                alt="CNBC logo" 
                layout="fill" 
                objectFit="contain" 
                objectPosition="left"
              />
            </div>
            <div className="w-24 h-12 relative">
              <Image 
                src="/images/npr-logo.png" 
                alt="NPR logo" 
                layout="fill" 
                objectFit="contain" 
                objectPosition="left"
              />
            </div>
            <div className="w-24 h-12 relative">
              <Image 
                src="/images/harvard-business-review-logo.png" 
                alt="Harvard Business Review logo" 
                layout="fill" 
                objectFit="contain" 
                objectPosition="left"
              />
            </div>
            <div className="w-16 h-12 relative">
              <Image 
                src="/images/sb-logo.png" 
                alt="S+B logo" 
                layout="fill" 
                objectFit="contain" 
                objectPosition="left"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Column */}
      <div className="w-full md:w-1/2 bg-gray-100 p-8 md:p-16 flex flex-col items-center justify-center">
        <div className="max-w-md text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            DOWNLOAD
            <br />
            FREE EBOOK
          </h2>
          
          <div className="relative w-64 h-80 mx-auto mb-8">
            <Image 
              src="/images/ebook-tablet.png" 
              alt="A Brief History of a Perfect Future eBook on tablet" 
              layout="fill" 
              objectFit="contain"
            />
          </div>
          
          <Link href="/download-ebook">
            <p className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md text-lg transition duration-300">
              DOWNLOAD NOW
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDescriptionSection;