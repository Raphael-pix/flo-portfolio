import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BooksDisplaySection = () => {
  const books = [
    {
      id: 1,
      title: "A Brief History of a Perfect Future",
      image: "/images/brief-history-book.jpg",
      description: '"A positive and optimistic view of our future, grounded in science,"',
      link: "/books/brief-history"
    },
    {
      id: 2,
      title: "Billion Dollar Lessons",
      image: "/images/billion-dollar-lessons-book.jpg",
      description: '"This engaging book demonstrates how even very smart people can"',
      link: "/books/billion-dollar-lessons"
    },
    {
      id: 3,
      title: "The New Killer Apps",
      image: "/images/new-killer-apps-book.jpg",
      description: '"Delightedly fresh, insightful and downright useful. This is the best"',
      link: "/books/new-killer-apps"
    },
    {
      id: 4,
      title: "Unleashing the Killer App",
      image: "/images/unleashing-killer-app-book.jpg", 
      description: '"A persuasive guide ... all businesses have an opportunity"',
      link: "/books/unleashing-killer-app"
    }
  ];

  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-yellow-500 text-xl font-medium mb-2">INNOVATION AND STRATEGY</h3>
          <h2 className="text-5xl font-bold mb-4">BOOKS</h2>
          <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div key={book.id} className="flex flex-col items-center">
              {/* Book Image */}
              <div className="relative w-48 h-64 mb-6 transform hover:scale-105 transition-transform duration-300">
                <Link href={book.link}>
                    <div className="relative w-full h-full shadow-lg">
                      <Image 
                        src={book.image}
                        alt={book.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded"
                      />
                    </div>
                </Link>
              </div>
              
              {/* Book Title */}
              <h3 className="text-2xl font-serif text-center mb-3">{book.title}</h3>
              
              {/* Book Description */}
              <p className="text-gray-700 text-center italic">{book.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksDisplaySection;