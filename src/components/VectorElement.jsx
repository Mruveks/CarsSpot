import React from "react";

const VectorElement = () => {
  return (
    <div className="w-[668.05px] h-[659px] p-0 gap-0 top-0 lg:right-0 md:-right-20  absolute">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M 20,0 
            Q 20,15 30,20
            Q 60,30 20,50 
            Q -10,65 10,100
            "
          stroke="#D9DCD5"
          strokeWidth="6"
          fill="none"
        />
        <path
          d="M 40,0 
            Q 40,11 60,20
            Q 100,40 30,80 
           "
          stroke="#D9DCD5"
          strokeWidth="6"
          fill="none"
        />
      </svg>
      <div className="relative z-10  rounded shadow-lg"></div>
    </div>
  );
};

export default VectorElement;
