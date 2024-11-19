import { useState, useEffect } from "react";
import herobg1 from "../images/hero-bg.webp"; 
import herobg2 from "../images/hero-bg.jpg"; 
import herobg3 from "../images/hero-bg3.jpg"; 
import herobg4 from "../images/hero-bg4.jpg"
import heroMobileBg1 from "../images/hero-mobile.jpg";
import heroMobileBg2 from "../images/hero-mobile2.jpg";
import heroMobileBg3 from "../images/hero-mobile3.jpg";
import heroMobileBg4 from "../images/hero-mobile4.jpg";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

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
    image: herobg4,
    mobileImg: heroMobileBg4,
  },
];



const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000);

    return () => {
      clearInterval(interval)
    }
  }, [])


  const backgroundDesktopStyle = {
    backgroundImage: `url(${slides[currentIndex].image})`,
    backgroundSize: "cover",
    backgroundPosition: "center right",
    backgroundRepeat: "norepeat",
    backgroundColor: "black",
  }


  return (
    <header className="min-h-[80vh] relative xl:block xl:min-h-[95vh]">
      <div className="absolute inset-0 h-full w-full " style={backgroundDesktopStyle}></div>
      <div className="absolute bg-black inset-0 opacity-45 z-10 xl:hidden"></div>
      <div className="max-w-[1150px] mx-auto ">

        <Link to="/" className="hidden z-10 relative w-[25%] xl:block">
          <img src={logo} alt="logo" />
        </Link>
        <div className="z-10 p-8 text-white relative top-8 xl:w-[60%]">
          <div className="hidden absolute bg-black inset-0 opacity-45 -z-10 xl:block"></div>
          <h1 className="text-2xl xl:text-4xl font-bold mb-5">
            {slides[currentIndex].heading}
          </h1>
          <p className="max-w-[90%] xl:text-lg">
            {slides[currentIndex].text}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-4 z-[150] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3  bg-white rounded-full cursor-pointer transition-opacity duration-300 ${index === currentIndex ? "opacity-100" : "opacity-50"
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </header>
  )
}

export default Carousel