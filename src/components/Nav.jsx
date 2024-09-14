import React from "react";

const Nav = () => {
  return (
    <nav className="py-4 top-0 sm:px-4 md:px-16">
      <div className="flex justify-between items-center h-[47px] bg-transparent mx-auto gap-[10px] font-roboto-condensed lg:w-container-lg md:w-container-md sm:w-container-sm">
        {/* Logo */}
        <div className="flex items-center lg:w-[300px] md:w-[100px] sm:w-[200px] h-[29.58px] font-bold">
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L3 14H10V22L20 10H13L13 2Z" fill="transparent" stroke="#0147FF" strokeWidth="2" />
          </svg>
          <h1 className="text-blue">Cars</h1>Spot
        </div>

        {/* Linki nawigacyjne */}
        <div className="flex gap-6 text-nav">
          <a href="#gallery" className="cursor-pointer">
            Galeria zdjęć
          </a>
          <a href="#faq" className="cursor-pointer">
            FaQ
          </a>
        </div>

        {/* Przycisk */}
        <div className="flex sm:hidden gap-10 w-[300px]">
          <p className="w-[142px] sm:hidden"></p>
          <button
            className="order-2 w-[158px]  h-[47px] bg-blue text-white rounded-lg z-50"
            aria-label="Zadzwoń do nas"
          >
            Zadzwoń do nas
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
