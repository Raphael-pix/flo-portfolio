"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    text: '"A Brief History of a Perfect Future" presents us with a rare gift in this era of pervasive negativity, anonymous grousing, and divisiveness. It offers a positive and optimistic view of our future, grounded in facts and the lessons of history. It is both inspirational and aspirational on how we can be proactive to make this vision a reality. Highly recommended! Reading it should put a spring in your step and a smile on your face!"',
    author: 'Bran Ferren',
    title: 'Chief Creative Officer, Applied Minds and former President of Research and Development, The Walt Disney Company',
    bookTitle: 'A Brief History of a Perfect Future'
  },
  // Add more reviews as needed
];

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-yellow-400 text-3xl font-medium mb-2">WHAT READERS SAY</h3>
          <h2 className="text-black text-6xl font-bold mb-4">REVIEWS</h2>
          <div className="h-1 w-48 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Review Card */}
        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={prevReview} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 text-gray-400 hover:text-gray-700"
            aria-label="Previous review"
          >
            <ChevronLeft size={40} />
          </button>
          
          <div className="text-center px-8">
            <h4 className="text-2xl font-semibold mb-8">"{reviews[currentReview].bookTitle}"</h4>
            <p className="text-lg italic mb-6">
              {reviews[currentReview].text}
            </p>
            <div className="mt-4">
              <p className="text-yellow-400 text-xl font-medium">
                — {reviews[currentReview].author}, {reviews[currentReview].title}
              </p>
            </div>
          </div>
          
          <button 
            onClick={nextReview} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 text-gray-400 hover:text-gray-700"
            aria-label="Next review"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </div>
    </section>
  );
}