import React from "react";
import bulb from "../../assets/bulb.png";
import stock from "../../assets/stock.png";
import turtle from "../../assets/turtle.png";
import samosa from "../../assets/samosa.png";
import stroke1 from "../../assets/stroke1.png";
import stroke2 from "../../assets/stroke2.png";
import stroke3 from "../../assets/stroke3.png";
const Third = () => {
  const items = [
    {
      img: bulb,
      alt: "Idea to impact",
      caption: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: stock,
      alt: "Growth metrics",
      caption: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: turtle,
      alt: "Team at work",
      caption: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: samosa,
      alt: "Snack-friendly",
      caption: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-14 sm:py-16 mb-18 lg:py-20">
      {/* Heading + subtext */}
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black"
          style={{ fontFamily: "Calisga, serif" }}
        >
          The Social Turtle Spark
        </h2>
        <p
          className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed tracking-normal"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          At Social Turtle, we don’t just deliver work—we deliver wow. Every
          project is crafted with care, creativity, and a touch of madness that
          keeps our clients coming back for more. We believe in strong ideas,
          honest conversations, and lots of chai breaks in between.
        </p>
      </div>

      {/* 4 icons grid */}
      <div className="max-w-6xl mx-auto mt-10 sm:mt-12 lg:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 items-start">
          {items.map((it, idx) => (
            <div key={idx} className="text-center">
              <img
                src={it.img}
                alt={it.alt}
                className="mx-auto h-24 w-auto sm:h-28 lg:h-32 object-contain"
              />
              <p
                className="mt-4 text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {it.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marker-highlight warning */}
      <div className="mt-16 sm:mt-20 lg:mt-24">
        <div className="relative mx-auto w-full max-w-6xl">
          {/* Full-width single stroke - scaled responsively */}
          <div className="relative mx-auto w-[96%] sm:w-[88%] lg:w-[74%]">
            <img
              src={stroke1}
              alt=""
              className="block w-full max-w-none object-contain"
            />
            {/* Add an invisible spacer to guarantee height if needed */}
            {/* <div className="invisible w-full pt-[18%]" /> */}
          </div>

          {/* Centered two-line text */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <p
              className="text-center leading-[1.08] text-[22px] sm:text-[30px] lg:text-[40px] px-3"
              style={{ fontFamily: "Helvetica Neue, sans-serif", fontWeight: 700 }}
            >
              <span className="block">Warning: Working with us may cause</span>
              <span className="block">extreme brand glow-ups.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
