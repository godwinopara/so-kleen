import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import herobg1 from "../images/hero-bg.jpg";
import herobg2 from "../images/hero-bg2.jpg";
import herobg3 from "../images/hero-bg3.jpg";

const HeaderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { id: 1, text: "Welcome to Our Website", image: herobg1 },
    { id: 2, text: "Discover Amazing Places", image: herobg2 },
    { id: 3, text: "Join Our Community", image: herobg3 },
  ];
  return (
    <div className="relative w-full h-[92vh] overflow-x-hidden border ">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="h-[85vh] w-full relative">
            <img src={slide.image} alt="slide" className="w-full h-full" />
            <h1 className="text-black absolute bottom-0 left-0 text-4xl md:text-6xl ">
              {slide.text}
            </h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderCarousel;
