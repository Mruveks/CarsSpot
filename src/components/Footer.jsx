import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bg-secondary text-white border-t border-white py-6 sm:px-4">
      <div className="mx-auto flex justify-between lg:w-container-lg md:w-container-md sm:w-container-sm">
        <div className="h-6">Cars Spot</div>
        <a href="/" className="h-6 underline" aria-label="Polityka prywatności">
          Polityka prywatności
        </a>
      </div>
    </footer>
  );
};

export default Footer;
