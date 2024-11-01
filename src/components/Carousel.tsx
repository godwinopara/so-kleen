// src/Carousel.js

import React, { useState, useEffect } from "react";
import herobg1 from "../images/hero-bg.jpg"; // Update with the correct path
import herobg2 from "../images/hero-bg2.jpg"; // Update with the correct path
import herobg3 from "../images/hero-bg3.jpg"; // Update with the correct path

const slides = [
  { id: 1, text: "Welcome to Our Website", image: herobg1 },
  { id: 2, text: "Discover Amazing Places", image: herobg2 },
  { id: 3, text: "Join Our Community", image: herobg3 },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-screen min-h-[80vh] xl:h-[91vh] overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-500">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${slides[currentIndex].id}`}
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-40">
          {slides[currentIndex].text}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 bg-white rounded-full cursor-pointer transition-opacity duration-300 ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
