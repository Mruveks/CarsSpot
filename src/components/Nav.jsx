import React from "react";

const Nav = () => {
  return (
    <nav className="py-4 top-0 sm:px-4 md:px-16">
      <div className="flex gap-[10px] h-[47px] sm:w-container-sm md:container-md lg:w-container-lg justify-between bg-transparent items-center font-roboto-condensed mx-auto">
        {/* Logo */}
        <div className="flex lg:w-[300px] md:w-[100px] sm:w-[200px] h-[29.58px] font-bold">
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L3 14H10V22L20 10H13L13 2Z" fill="transparent" stroke="#0147FF" stroke-width="2" />
          </svg>
          <h1 className="text-blue">Cars</h1>Spot
        </div>

        {/* Linki nawigacyjne */}
        <div className="h-[24px] min-w-fit flex justify-between gap-6 text-nav z-50">
          <a href="#gallery" className="cursor-pointer">
            Galeria zdjęć
          </a>
          <a href="#faq" className="cursor-pointer">
            FaQ
          </a>
        </div>

        {/* Przycisk */}
        <div className="w-[300px] flex gap-10 sm:hidden">
          <p className="w-[142px] sm:hidden"></p>
          <button className="order-2 w-[158px] h-[47px] bg-blue text-white rounded-lg text-button z-50">
            Zadzwoń do nas
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
