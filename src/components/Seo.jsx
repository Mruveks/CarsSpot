import React from "react";

const Seo = () => {
  return (
    <div id="faq" className="flex bg-bg-secondary text-white py-[88px] sm:px-4 md:px-10">
      <section className="flex sm:flex-col lg:w-container-lg md:w-container-md sm:w-container-sm justify-between gap-20 text-left mx-auto">
        <div className="flex flex-col gap-4 justify-start text-left">
          <p id="Follow us on social" className="bold uppercase">
            Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
          </p>
          <div id="Stay updated" className="flex flex-col gap-6">
            <p>
              Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat
              ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
            </p>
            <button className="w-fit underline underline-offset-8">Rozwiń &#8595;</button>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-start text-left">
          <p id="Follow us on social" className="bold uppercase">
            Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
          </p>
          <div id="Stay updated" className="flex flex-col gap-6 ">
            <p>
              Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat
              ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
            </p>
            <button className="w-fit underline underline-offset-8">Rozwiń &#8595;</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seo;
