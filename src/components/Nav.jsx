import React from "react";

const Nav = () => {
  return (
    <div className="fixed flex gap-10 w-[1440px] h-auto py-4 justify-between bg-transparent">
      <div className="flex w-[300px] h-[29.58px]">
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H10V22L20 10H13L13 2Z" fill="transparent" stroke="blue" stroke-width="2" />
        </svg>
        <h1 className="text-blue-800">Cars</h1>Spot
      </div>
      <div className="h-[24px] flex justify-between gap-24">
        <span className="w-[91px]">Galeria zdjęć</span>
        <span className="w-[24px]">FaQ</span>
      </div>
      <div className="w-[300px] flex gap-100">
        <p></p>
        <button className="w-[158px] h-[47px] bg-blue text-white">Zadzwoń do nas</button>
      </div>
    </div>
  );
};

export default Nav;
