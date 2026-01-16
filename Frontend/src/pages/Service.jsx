import React from "react";
import OurWorkService from "./OurWorkService";
import { useParams } from "react-router-dom";

const servicesData = [
  {
    title: "Social Media Management",
    link: "/Service_Images/social_media/1.jpg",
    description: "We don’t just post and pray. We plan your content, design the visuals, write captions that sound like humans, and manage your page daily. From grid aesthetics to content calendars, everything is built to grow reach, engagement, and trust. The goal is simple: make your brand show up consistently, stay relevant, and actually get noticed on crowded feeds.",
  },
  {
    title: "Logo Designing",
    link: "/Service_Images/logo/1.jpg",
    description: "We create content people don’t skip. From ideas and scripts to shoots and edits, we handle everything end-to-end. Reels, photos, campaigns, or brand films — all made for how people scroll today. Clean visuals, natural storytelling, and zero overproduction. Content that feels real, looks premium, and fits your brand without trying too hard.",
  },
  {
    title: "Performance Marketing",
    link: "/Service_Images/Ads/1.jpg",
    description: "We run ads that make sense, not noise. Meta and Google campaigns backed by testing, data, and constant optimisation. We track what works, fix what doesn’t, and scale what converts. No random boosts, no blind spending. Just smarter ads, better ROAS, and campaigns that are actually accountable to results.",
  },
  {
    title: "Branding And Packaging",
    link: "/Service_Images/packaging_branding/1.jpg",
    description: "Logos, colors, fonts, and brand language — we help brands look confident and consistent everywhere. Online, offline, and everywhere in between. It’s not just about looking good, it’s about being recognizable at first glance. Branding that feels intentional, sharp, and true to who you are, not something pulled off a template.",
  },
  {
    title: "Pr And Influencer Marketing",
    link: "/Service_Images/Influencer and Marketing/1.jpg",
    description: "We work with creators who feel right for your brand, not just popular. From sourcing influencers to guiding content, we focus on authenticity and relatability. Real people, real stories, real impact. UGC that blends into feeds naturally, builds trust, and nudges people from scrolling to actually checking your brand out.",
  },
  {
    title: "Website Designing",
    link: "/Service_Images/Website/1.png",
    description: "We design websites that people enjoy using. Clean layouts, clear messaging, fast loading, and zero confusion. Every page is built to guide users smoothly, not overwhelm them. Whether it’s a brand site or a conversion-focused page, we make sure your website looks good, works better, and supports real business goals.",
  },
]

const Service = () => {
  let { service } = useParams();

  if (!service) {
    service = "Logo Designing";
  } else {
    service = service
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <main className="bg-white">
      {/* Page container */}
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* Page title */}
        <header className="pt-8 sm:pt-14 text-center">
          <h1
            className="text-[26px] md:text-5xl leading-[1.06] tracking-[0.1px] font-normal"
            style={{
              fontFamily: "Calisga, serif",
              color: "#A0CB3A",
            }}
          >
            {
              service === "Pr And Influencer Marketing" ? "PR & Influencer Marketing" : service === "Branding And Packaging" ? "Branding & Packaging" : service
            }
          </h1>
        </header>

        {/* Hero split */}
        <section className="mt-8 sm:mt-10 lg:mt-18 leading-[1.38] md:text-[28px] text-[20px] grid grid-cols-1 lg:grid-cols-[minmax(0,490px)_minmax(0,1fr)] gap-10 lg:gap-19 items-start">
          {/* Left copy */}
          <div className="order-1 lg:order-1">
            {" "}
            {/* was order-2 lg:order-1 */}
            <div className="max-w-[760px]">
              {/* <h2
                className="font-bold"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#0E0E0E",
                }}
              >
                Is your brand just seen — or is it
                <br />
                remembered?
              </h2> */}

              <p
                className="mt-5 sm:mt-6 text-[16px] md:text-[20px] leading-[1.42]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#000000",
                }}
              >
                {servicesData.filter((item) => item.title === service)[0].description}
              </p>
            </div>
          </div>

          {/* Right image */}
          <figure className="order-2 lg:order-2">
            {" "}
            {/* was order-1 lg:order-2 */}
            <img
              src={servicesData.filter((item) => item.title === service)[0].link}
              alt="Branding and packaging visual"
              className="mx-auto lg:ml-0  w-[730px] md:h-[430px] md:w-full object-cover rounded-md"
            />
            {/* <img
              src={china}
              alt="Branding and packaging visual"
              className="mx-auto mt-4 sm:hidden lg:ml-0 w-[730px] h-[350px] object-cover"
            /> */}
          </figure>
        </section>

        {/* Optional: subtle spacer to separate from next section */}
        <div className="h-10 sm:h-12 lg:h-14" />
      </div>
      <OurWorkService service={service} />
    </main>
  );
};

export default Service;
