import React from "react";
import rolexImg from "../assets/rolex.png";

const Service = () => {
  return (
    <main className="bg-white">
      {/* Page container */}
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* Page title */}
        <header className="pt-8 sm:pt-14 text-center">
          <h1 className="text-5xl leading-[1.06] tracking-[0.1px] font-normal"
            style={{
              fontFamily: "Calisga, serif",
              color: "#A0CB3A",
            }}
          >
            Branding & Packaging
          </h1>
        </header>

        {/* Hero split */}
        <section className="mt-8 sm:mt-10 lg:mt-18 leading-[1.38] text-[29px] grid grid-cols-1 lg:grid-cols-[minmax(0,490px)_minmax(0,1fr)] gap-10 lg:gap-19 items-start">
          {/* Left copy */}
          <div className="order-2 lg:order-1">
            <div className="max-w-[760px]">
              <h2 className="font-bold"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#0E0E0E",
                }}
              >
                Is your brand just seen — or is it
                <br />
                remembered?
              </h2>

              <p
                className="mt-5 sm:mt-6 text-[20px] leading-[1.42]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#000000",
                }}
              >
                At Social Turtle, we don’t just design logos and boxes — we craft
                identities that stick. From strategic brand positioning to
                eye-catching packaging that stands out on shelves and screens, our
                work is rooted in storytelling, psychology, and design precision.
                Whether you’re launching a new product or refreshing an old
                favorite, we make sure your brand speaks loud and looks
                unforgettable.
              </p>
            </div>
          </div>

          {/* Right image */}
          <figure className="order-1 lg:order-2">
            {/* Use a clamp to keep image visually balanced at all sizes */}
            <img
              src={rolexImg}
              alt="Branding and packaging visual"
              className="mx-auto lg:ml-0 w-[730px] object-cover"
            />
          </figure>
        </section>

        {/* Optional: subtle spacer to separate from next section */}
        <div className="h-10 sm:h-12 lg:h-14" />
      </div>
    </main>
  );
};

export default Service;

