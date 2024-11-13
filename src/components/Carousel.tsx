// src/Carousel.js
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useState, useEffect } from "react";
import herobg1 from "../images/hero-bg.jpeg"; // Update with the correct path
import herobg2 from "../images/hero-bg2.jpeg"; // Update with the correct path
import herobg3 from "../images/hero-bg3.jpeg"; // Update with the correct path
import heroMobileBg1 from "../images/hero-mobile.jpg";
import heroMobileBg2 from "../images/hero-mobile2.jpg";
import heroMobileBg3 from "../images/hero-mobile3.jpg";
import heroMobileBg4 from "../images/hero-mobile4.jpg";
import logo from "../images/logo.png";

const slides = [
  {
    id: 1,
    heading: "Comprehensive Cleaning Solutions",
    text: "Whether you're a small business, large corporation, or government agency, Reds Cleaning Services offers customized cleaning solutions designed to meet your specific needs. Experience professional, reliable service that leaves your spaces spotless and well-maintained.",
    image: herobg1,
    mobileImg: heroMobileBg1,
  },
  {
    id: 2,
    heading: "Expert Care for Your Space",
    text: "From carpets and upholstery to hard floors and marble surfaces, our experienced team uses advanced techniques and eco-friendly products to restore and maintain your property. Trust us to enhance the longevity and appearance of your valuable assets.",
    image: herobg2,
    mobileImg: heroMobileBg2,
  },
  {
    id: 3,
    heading: "Trusted by Businesses & Homes",
    text: "With years of experience and a commitment to excellence, Reds Cleaning Services is the trusted choice for businesses and homeowners alike. We pride ourselves on customer satisfaction, ensuring every job is completed to the highest standards.",
    image: herobg3,
    mobileImg: heroMobileBg3,
  },
  {
    id: 4,
    heading: "Comprehensive Cleaning Solutions",
    text: "Whether you're a small business, large corporation, or government agency, Reds Cleaning Services offers customized cleaning solutions designed to meet your specific needs. Experience professional, reliable service that leaves your spaces spotless and well-maintained.",
    image: herobg1,
    mobileImg: heroMobileBg4,
  },
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
      <div className="hidden lg:block relative z-[200] top-5 left-[64px] w-[100px]">
        <img src={logo} alt="" />
      </div>
      <div className="absolute inset-0 transition-opacity duration-500">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${slides[currentIndex].id}`}
          className="hidden lg:block object-cover object-right lg:object-center w-full h-full"
        />
        <img
          src={slides[currentIndex].mobileImg}
          alt={`Slide ${slides[currentIndex].id}`}
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute px-2 xl:px-0 bottom-40 left-5 xl:left-20 z-[150] flex items-center text-white">
          <div className="xl:w-[50%]">
            <h1 className="text-2xl xl:text-4xl font-bold mb-5">
              {slides[currentIndex].heading}
            </h1>
            <p className="max-w-[90%] xl:text-lg">
              {slides[currentIndex].text}
            </p>
          </div>
        </div>
        <div className="h-full w-full absolute inset-0 bg-black bg-opacity-30 z-[100]"></div>
        <div className="absolute bottom-3 z-[150] right-4 grid gap-y-2 xl:hidden">
          <a
            href="tel:+14373762702"
            className="bg-gray-200 flex items-center justify-center p-3 text-xl rounded-full text-black"
          >
            <FiPhone />
          </a>
          <div className="bg-gray-200 flex items-center justify-center p-3 text-xl rounded-full text-black">
            <MdOutlineEmail />
          </div>
          <a
            href="https://wa.me/14373762702"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 flex items-center justify-center p-3 text-xl rounded-full text-white"
          >
            <IoLogoWhatsapp />
          </a>
        </div>
      </div>
      <div className="absolute bottom-4 z-[150] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3  bg-white rounded-full cursor-pointer transition-opacity duration-300 ${
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
