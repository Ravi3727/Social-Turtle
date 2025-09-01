import React, { useState } from "react";

import work1 from "../assets/ourWork/work1.png";
import work2 from "../assets/ourWork/work2.png";
import work3 from "../assets/ourWork/work3.jpg";
import work4 from "../assets/ourWork/work4.jpg";
import work5 from "../assets/ourWork/work5.jpg";
import work6 from "../assets/ourWork/work6.jpg";
import work7 from "../assets/ourWork/work7.jpg";
import work8 from "../assets/ourWork/work8.jpg";
import work9 from "../assets/ourWork/work9.jpg";
import Contact from "../components/Contact";

// Data for our portfolio items.
// We now use the imported image variables.
const portfolioItems = [
  {
    id: 1,
    src: work1,
    title: "Halwaai",
    category: "BRANDING",
    tag: "Packaging",
  },
  {
    id: 2,
    src: work2,
    title: "Margodal",
    category: "LOGO DESIGN",
    tag: "Branding",
  },
  {
    id: 3,
    src: work3,
    title: "Derel",
    category: "SOCIAL MEDIA",
    tag: "Packaging",
  },
  {
    id: 4,
    src: work4,
    title: "Sunday Edition",
    category: "WEB DESIGN",
    tag: "Branding",
  },
  {
    id: 5,
    src: work5,
    title: "Emotions",
    category: "BRANDING",
    tag: "Packaging",
  },
  {
    id: 6,
    src: work6,
    title: "Tismo",
    category: "PERFORMANCE ADS",
    tag: "Branding",
  },
  {
    id: 7,
    src: work7,
    title: "Lee",
    category: "PR & INFLUENCER",
    tag: "Packaging",
  },
  {
    id: 8,
    src: work8,
    title: "Myse",
    category: "SOCIAL MEDIA",
    tag: "Branding",
  },
  {
    id: 9,
    src: work9,
    title: "Rolex",
    category: "WEB DESIGN",
    tag: "Packaging",
  },
];

const OurWork = () => {
  // State to keep track of the current active filter category. 'ALL' is the default.
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filterCategories = [
    "ALL",
    "SOCIAL MEDIA",
    "BRANDING",
    "LOGO DESIGN",
    "WEB DESIGN",
    "PERFORMANCE ADS",
    "PR & INFLUENCER",
  ];

  // Filtering the portfolio items based on the active category.
  const filteredItems =
    activeFilter === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1
            className="text-5xl font-bold text-black mb-4 font-serif"
            style={{ fontFamily: "Calisga, sans-serif" }}
          >
            Our Work 
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600" style={{ fontFamily: "Montserrat", fontWeight:400 }}>
            Lorem ipsum dolor sit amet consectetur. Lorem praesent ultricies
            viverra sit maecenas commodo. Pretium amet ligula neque est sit.
            Ultrices amet viverra rutrum id volutpat mattis ac. Sapien lacus
            enim tortor arcu augue nunc. Nulla eu ultrices id tortor.
          </p>
        </section>

        {/* Filtering Navigation Section */}
        <section className="mb-12">
          <nav>
            <ul className="flex items-center justify-center flex-wrap gap-x-6 gap-y-4 " style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {filterCategories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActiveFilter(category)}
                    className={`font-semibold text-sm tracking-wider pb-2 cursor-pointer transition-all duration-300 ${
                      activeFilter === category
                        ? "text-[#94be4c] border-b-2 border-[#94be4c]"
                        : "text-gray-700 hover:text-[#94be4c]"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* Image Grid Section */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-md h-72"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500">
                  <div className="absolute bg-neutral-800 bottom-0 left-0 p-6 flex justify-between items-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div>
                      <h3 className="text-white text-xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                    <span className="bg-black bg-opacity-50 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Contact />
      </div>
    </div>
  );
};

export default OurWork;
