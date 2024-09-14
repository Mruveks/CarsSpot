import React, { useState, useEffect } from "react";
import Car1 from "../assets/Car1.png";
import Car2 from "../assets/Car2.png";
import Car3 from "../assets/Car3.png";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(664);
  const images = [Car1, Car2, Car3];

  const handleDotClick = (index) => {
    if (index >= images.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };
 
  const updateSlideWidth = () => {
    const screenWidth = window.innerWidth;
    console.log('Current screen width:', screenWidth);

    console.log(screenWidth)
    if (screenWidth <= 640) {
      setSlideWidth(screenWidth); // sm
    } else if (screenWidth >= 641 && screenWidth <= 1439) {
      setSlideWidth(550); // md
    } else {
      setSlideWidth(664); // lg
    }
  };

  useEffect(() => {
    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);

  return (
    <>
      {/* Tytuł */}
      <div id="gallery" className="flex flex-col lg:w-[1264px] sm:pt-0 mx-auto pt-20 gap-6 sm:px-4 md:px-16">
        <span>
          <p className="lg:text-header-tagline-lg md:text-header-tagline-md sm:text-header-tagline-sm font-roboto-condensed text-blue">
            Prezentacja firmy
          </p>
          <p className="lg:text-header-stay-updated-lg md:text-header-stay-updated-md sm:text-header-stay-updated-sm font-bebas">
            Zobacz naszą galerię zdjęć
          </p>
        </span>
        <span className="flex flex-row gap-12">
          <p className="lg:text-header-cta-lg md:text-header-cta-md sm:text-header-cta-sm text-blue">
            Samochody osobowe
          </p>
          <p className="lg:text-header-cta-lg md:text-header-cta-md sm:text-header-cta-sm">Samochody dostawcze</p>
        </span>
      </div>

      {/* Galeria */}
      <div className="flex py-20 w-[1264px] mx-auto flex-col gap-12 justify-center h-[678px]">
        {/* Slider */}
        <div
          className="flex gap-16 md:pl-16 md:gap-16 sm:gap-4 transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="lg:h-[446px] lg:w-[600px] sm:h-[300px] sm:w-[screen] object-cover"
            />
          ))}
        </div>

        {/* Nawigacja */}
        <div id="navigation-dots" className="flex justify-center gap-4 h-6 mt-4 sm:w-screen md:w-screen">
          {images.map((_, index) => (
            <div
              key={index}
              className="cursor-pointer transition-all duration-300"
              onClick={() => handleDotClick(index)}
            >
              <svg width="8" height="8" viewBox="0 0 16 16" fill={currentIndex === index ? "#0147FF" : "#EDEDED"}>
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
