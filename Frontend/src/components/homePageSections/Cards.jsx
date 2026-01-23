import { React, useEffect } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
const Cards = () => {
  const images = [
    { src: "/caseStudies/6.jpg", height: "h-[80vh]" },
    { src: "/caseStudies/2.jpg", height: "h-[80vh]" },
    { src: "/caseStudies/3.jpg", height: "h-[80vh]" },
    { src: "/caseStudies/4.jpg", height: "h-[80vh]" },
    { src: "/caseStudies/5.jpg", height: "h-[80vh]" },
    { src: "/caseStudies/1.jpg", height: "h-[80vh]" },
  ];
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
          style={{
            backgroundImage: `url(${img.src})`,
            fontFamily: "Montserrat, sans-serif",
          }}
          className={`w-screen  bg-slide bg-cover bg-center flex items-end justify-center pb-4 rounded-2xl  sticky top-[10vh] md:py-10 ${img.height}`}
        >
          <div className="bg-white w-[95%] rounded-lg flex flex-col px-4 gap-2 sm:flex-row sm:justify-between sm:px-2 py-4 sm:items-center h-fit">
            <div className="font-semibold text-xl tracking-tighter">Project Name</div>
            <div className="flex font-semibold gap-2">
              <div className="bg-[#D8D8D8] text-[10px] sm:text-sm text-center py-2 px-2 sm:px-4 rounded-full">
                Branding & Packaging
              </div>
              <div className="bg-[#D8D8D8] text-[10px] sm:text-sm text-center py-2 px-2 sm:px-4 rounded-full">
                Logo Design
              </div>
            </div>
            <div className="bg-[#D8D8D8] h-fit w-fit p-2 rounded-full">
              <ArrowUpRight />
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Cards