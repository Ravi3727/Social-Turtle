import React from 'react'
import ServicesCard from './ServicesCard'




const Services = () => {
  const servicesData = [
    {
      title: "Social Media Management",
      link: "social-media-management",
      description: "We plan, create, and manage your brand’s daily social presence to drive visibility and engagement.",
      imgLink: "/Service_Images/social_media/1.jpg"
    },
    {
      title: "Logo Designing",
      link: "logo-designing",
      imgLink: "/Service_Images/logo/1.jpg",
      description: "End-to-end shoots and edits that create scroll-worthy, high-impact content.",
    },
    {
      title: "Performance Marketing",
      link: "performance-marketing",
      imgLink: "/Service_Images/Ads/1.jpg",
      description: "Data-driven Meta and Google ads focused purely on results and conversions.",
    },
    {
      title: "Branding and Packaging",
      link: "branding-and-packaging",
      imgLink: "/Service_Images/packaging_branding/1.jpg",
      description: "Logos and brand systems that make your business look confident and consistent.",
    },
    {
      title: "PR & Influencer Marketing",
      link: "pr-and-influencer-marketing",
      imgLink: "/Service_Images/Influencer and Marketing/1.jpg",
      description: "Authentic creator-led content that builds trust and buying intent.",
    },
    {
      title: "Website Designing",
      link: "website-designing",
      imgLink: "/Service_Images/Website/1.png",
      description: "Clean, fast websites designed to convert visitors into customers.",
    },
  ]
  return (
    <div className='w-screen h-fit pb-10 pt-10 flex flex-col justify-evenly  gap-6 items-center '>
      <div style={{
        fontFamily: "Calisga, serif",

      }} className='text-[28px] md:text-[49px] text-center  font-bold'>Services</div>
      <div className="w-full scrollbar-hide mx-auto items-center flex md:flex-wrap gap-6 overflow-scroll scroll-smooth justify-center">
        {servicesData.map((service, index) => (
          <ServicesCard imgLink={service.imgLink} key={index} title={service.title} description={service.description} link={service.link} />
        ))}
      </div>

    </div>
  )
}

export default Services