import React from "react";
import HeroPng from "../assets/hero.png";
import VectorElement from "./VectorElement";
import cien from "../assets/cien.png";

const Hero = () => {
  return (
    <div className="lg:h-[825px] md:h-[825px] sm:h-[625px] lg:py-[80px] md:py-[20px] sm:pt-[40px] sm:px-4 md:px-16">
      {/* Grafika wektorowa */}
      <VectorElement />

      {/* Główny kontener */}
      <article className="grid grid-cols-2 sm:grid-cols-1 sm:w-container-sm lg:w-container-lg mx-auto h-[343px]">
        <div className="flex flex-col gap-12">
          <span className="flex flex-col gap-[32px]">
            <h1 className="lg:text-hero-header-lg md:text-hero-header-md sm:text-hero-header-sm font-bebas font-normal text-black z-50">
              Sprzedajemy samochody z Europy
            </h1>
            <p className="lg:text-hero-paragraph-lg md:text-hero-paragraph-md sm:text-hero-paragraph-sm font-roboto-condensed z-50">
              Kup komfortowy pojazd, aby każda podróż <br />
              była wyjątkowym przeżyciem.
            </p>
          </span>
          <span className="flex flex-row gap-6">
            <button className="w-[158px] h-[47px] text-button rounded-lg bg-blue text-white z-50">
              Zobacz zdjęcia
            </button>
            <button className="w-[158px] h-[47px] text-button rounded-lg bg-white text-blue border border-blue z-50">
              Zadzwoń do nas
            </button>
          </span>
        </div>
      </article>

      {/* Img samochodów oraz cień */}
      <img
        src={HeroPng}
        alt="hero"
        className="absolute w-[1064px] sm:h-fit md:j lg:h-[404.37px] sm:top-[480px] lg:top-[328px] right-0 z-50"
      />
      <img
        src={cien}
        alt="hero"
        className="absolute w-[1064px] sm:h-fit lg:h-[404.37px] sm:top-[480px] lg:top-[328px] right-0"
      />
    </div>
  );
};

export default Hero;
