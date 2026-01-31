import { useEffect, useState } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
const Cards = () => {
  const imagesDesktop = [
    { src: "/caseStudies/2.jpg", height: "h-[80vh]" },
    { src: "/caseStudies/4.jpg", height: "h-[80vh]" },
    { src: "/caseStudies/6.jpg", height: "h-[80vh]" },
  ];

  const imagesMobile = [
    { src: "/caseStudies/1.jpg", height: "h-[80vh]" },
    { src: "/caseStudies/3.jpg", height: "h-[80vh]" },
    { src: "/caseStudies/5.jpg", height: "h-[80vh]" },
  ];

  const [images, setImages] = useState(imagesDesktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImages(imagesMobile);
      } else {
        setImages(imagesDesktop);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".bg-slide").forEach((item => {
      gsap.to(item, {
        scale: 0.8,
        scrollTrigger: {
          trigger: item,
          start: "top 30%",
          end: "bottom 30%",

          scrub: true,

        }
      })
    }))
    return () => {
    }
  }, [])

  return (
    <div className='w-full flex 0 flex-col gap-5 items-center py-[10vh]'>

      {images.map((img, i) => (
        <div
          key={i}
          className={`w-[115%] md:w-screen bg-slide sticky top-[10vh] rounded-2xl overflow-hidden ${img.height}`}
          style={{
            backgroundImage: `url(${img.src})`,
            // backgroundSize: "cover",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          {/* Bottom overlay card */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[95%]">
            <div className="bg-white rounded-lg flex flex-col px-4 gap-2 sm:flex-row sm:justify-between sm:px-2 py-4 sm:items-center">
              <div className="font-semibold text-xl tracking-tighter">
                Project Name
              </div>

              <div className="flex font-semibold gap-2 flex-wrap">
                <div className="bg-[#D8D8D8] text-[10px] sm:text-sm py-2 px-4 rounded-full">
                  Branding & Packaging
                </div>
                <div className="bg-[#D8D8D8] text-[10px] sm:text-sm py-2 px-4 rounded-full">
                  Logo Design
                </div>
              </div>

              <div className="bg-[#D8D8D8] p-2 rounded-full w-fit">
                <ArrowUpRight />
              </div>
            </div>
          </div>
        </div>


      ))}

    </div>
  )
}

export default Cards