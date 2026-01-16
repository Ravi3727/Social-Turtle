import React from 'react'
import Testimonialscard from './Testimonialscard'

const TestimonialsData = [
  {
    companyName: "Eggspert",
    description: "Social Turtle understood our brand instantly. From content to campaigns, everything felt on-point and consistent. The execution was smooth, and the results spoke for themselves.",
    Postion: "CEO, Eggspert",
    Rating: 5,
    img: "/images/testimonialPerson.jpg"
  },

  {
    companyName: "FYUL",
    description: "Working with Social Turtle felt less like an agency and more like an extension of our team. Clear communication, strong ideas, and solid execution throughout.",
    Postion: "CEO, FYUL",
    Rating: 4,
    img: "/images/testimonialPerson.jpg"
  },


  {
    companyName: "Dentaesthetica",
    description: "They brought precision to our content, just like we do in dentistry. The visuals, messaging, and ads were handled with real attention to detail.",
    Postion: "CEO, Dentaesthetica",
    Rating: 4,
    img: "/images/testimonialPerson.jpg"
  },

  {
    companyName: "GetWetFit",
    description: "Our concept was new and different, and Social Turtle knew exactly how to present it. They helped us stand out and build excitement right from the start.",
    Postion: "CEO, GetWetFit",
    Rating: 5,
    img: "/images/testimonialPerson.jpg"
  },

  {
    companyName: "The Hidden Hour",
    description: "Their creative approach matched our brand vibe perfectly. From teasers to campaigns, the storytelling and production quality were spot on.",
    Postion: "CEO, The Hidden Hour",
    Rating: 4,
    img: "/images/testimonialPerson.jpg"
  },

  {
    companyName: "Off Sinners",
    description: "Social Turtle helped shape our visual identity in a way that felt bold and true to us. The content looked sharp and connected well with our audience.",
    Postion: "CEO, Off Sinners",
    Rating: 5,
    img: "/images/testimonialPerson.jpg"
  },

  {
    companyName: "Casa Padel",
    description: "They understood the sport, the lifestyle, and the audience. The content felt premium, energetic, and aligned with how we wanted the brand to be seen.",
    Postion: "CEO, Casa Padel",
    Rating: 5,
    img: "/images/testimonialPerson.jpg"
  },

  {
    companyName: "Off Sinners",
    description: "Social Turtle helped shape our visual identity in a way that felt bold and true to us. The content looked sharp and connected well with our audience.",
    Postion: "CEO, Off Sinners",
    Rating: 4,
    img: "/images/testimonialPerson.jpg"
  },

]

const Testimonials = () => {
  return (
    <div className='w-screen  h-fit flex bg-[#F9F9F9] flex-col pt-10  items-center gap-6 pb-10 '>
      <div className='flex flex-col w-screen  font-bold  text-[28px] md:text-[49px]  items-center justify-center  gap-4 text-center'>

        <div style={{
          fontFamily: "Calisga, serif",

        }} className='text-[#A0CB3A] '>Testimonials</div>
        <div style={{
          fontFamily: "Montserrat, sans-serif",

        }} className='text-[20px] mt-4 font-extralight w-1/2 md:block hidden '>
          Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.
        </div>
      </div>
      <div className="w-full h-fit  py-6 flex items-center gap-6 
                overflow-x-scroll scroll-smooth scrollbar-hide px-4 ">
        {TestimonialsData.map((_, i) => (
          <div key={i} className="flex-shrink-0  ">
            <Testimonialscard Data={_} />
          </div>
        ))}
      </div>


    </div>
  )
}

export default Testimonials