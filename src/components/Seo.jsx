import React from "react";

const Seo = () => {
  const sections = [
    {
      title: "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.",
      content:
        "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]",
    },
    {
      title: "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.",
      content:
        "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]",
    },
  ];

  return (
    <div id="faq" className="flex bg-bg-secondary text-white py-[88px] sm:px-4 md:px-10">
      <section className="flex sm:flex-col lg:w-container-lg md:w-container-md sm:w-container-sm justify-between gap-20 text-left mx-auto">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-4">
            <p className="bold uppercase">{section.title}</p>
            <div className="flex flex-col gap-6">
              <p>{section.content}</p>
              <button className="w-fit underline underline-offset-8">Rozwiń &#8595;</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Seo;
