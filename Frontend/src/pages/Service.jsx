import React from "react";
import rolexImg from "../assets/rolex.png";

const Service = () => {
  return (
    <main className="bg-white">
      {/* Page container */}
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">

        {/* Page title */}
        <header className="pt-8 sm:pt-14 text-center">
          <h1
            style={{
              fontFamily: "Calisga, serif",
              fontWeight: 400,
              fontSize: "clamp(30px, 5vw, 56px)",
              lineHeight: 1.06,
              letterSpacing: "0.1px",
              color: "#A0CB3A", // exact lime
            }}
          >
            Branding & Packaging
          </h1>
        </header>

        {/* Hero split */}
        <section className="mt-8 sm:mt-10 lg:mt-18 grid grid-cols-1 lg:grid-cols-[minmax(0,490px)_minmax(0,1fr)] gap-10 lg:gap-19 items-start">
          {/* Left copy */}
          <div className="order-2 lg:order-1">
            <div className="max-w-[760px]">
              <h2
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3.2vw, 29px)",
                  lineHeight: 1.38,
                  color: "#0E0E0E",
                }}
              >
                Is your brand just seen — or is it
                <br />
                remembered?
              </h2>

              <p
                className="mt-5 sm:mt-6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "20px",
                  lineHeight: 1.42,
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
              className="mx-auto lg:ml-0 object-cover"
              style={{
                width: "clamp(320px, 44vw, 730px)",
                aspectRatio: "4 / 3",
              }}
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
