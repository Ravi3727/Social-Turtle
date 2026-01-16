import React, { useState } from "react";
import Contact from "../components/Contact";
import { useParams } from "react-router-dom";

const Social_Media_Management = [
    "/Service_Images/social_media/1.jpg",
    "/Service_Images/social_media/2.jpg",
    "/Service_Images/social_media/3.jpg",
    "/Service_Images/social_media/4.jpg",
    "/Service_Images/social_media/5.jpg",
    "/Service_Images/social_media/6.jpg",


    // "/Service_Images/social_media/8.jpg",
    // "/Service_Images/social_media/10.jpg",
    // "/Service_Images/social_media/Ad Creative Story.jpg",
    // "/Service_Images/social_media/CASA Padel  Dec Grid-1.jpg",
    // "/Service_Images/social_media/Cold drink Tooth Erosion Post.jpg",
    // "/Service_Images/social_media/Crowne Plaza, Rohini (3).png",
    // "/Service_Images/social_media/Dent May Grid.jpg",
    // "/Service_Images/social_media/Designer's Tip post.png",
    // "/Service_Images/social_media/Dopamine Grid (27 Jan).jpg",
    // "/Service_Images/social_media/Dopamine-Grid_01.jpg",
    // "/Service_Images/social_media/Eggspert Grid (February 2025).png",
    // "/Service_Images/social_media/Fitstop Grid.jpg",
    // "/Service_Images/social_media/Fitstop Poster-1.jpg",
    // "/Service_Images/social_media/Fitstop-15 August Grid.jpg",
    // "/Service_Images/social_media/Fitstop-15-August-Grid_01.jpg",
    // "/Service_Images/social_media/Fitstop-Grid_05.jpg",
    // "/Service_Images/social_media/Fyul August Grid.jpg",
    // "/Service_Images/social_media/Fyul Sept Grid.jpg",
    // "/Service_Images/social_media/Fyul-August-Grid_05.jpg",
    // "/Service_Images/social_media/Fyul-August-Grid_06.jpg",
    // "/Service_Images/social_media/Fyul-August-Grid_08.jpg",
    // "/Service_Images/social_media/Grid 6.jpg",
    // "/Service_Images/social_media/GRID New.jpg",
    // "/Service_Images/social_media/Grid.jpg",
    // "/Service_Images/social_media/Hiring-1.jpg",
    // "/Service_Images/social_media/I post.png",
    // "/Service_Images/social_media/Ideal Grid.jpg",
    // "/Service_Images/social_media/Ideal June Grid 1.png",
    // "/Service_Images/social_media/June Grid 2025.png",
    // "/Service_Images/social_media/kcyktk,.jpg",
    // "/Service_Images/social_media/KNVT0452.jpg",
    // "/Service_Images/social_media/New Dish Monsoon post.jpg",
    // "/Service_Images/social_media/Prashant-option-2.jpg",
    // "/Service_Images/social_media/Reel 3.jpg",
    // "/Service_Images/social_media/Sarmaya Grid Newest.jpg",
    // "/Service_Images/social_media/Social Turtle New Grid.jpg",
    // "/Service_Images/social_media/THH X social turtle.png",
    // "/Service_Images/social_media/Vastavik July.jpg",
    // "/Service_Images/social_media/We are Hiring (GetWetFit)1.jpg",
    // "/Service_Images/social_media/Zuri Grid.jpg",
    // "/Service_Images/social_media/Zuri-Grid_05.gif",
]

const Performance_Marketing = [
    "/Service_Images/Ads/1.jpg",
    "/Service_Images/Ads/2.jpg",
    "/Service_Images/Ads/3.jpg",
    "/Service_Images/Ads/4.jpg",
    "/Service_Images/Ads/5.jpg",
    "/Service_Images/Ads/6.jpg",
    // "/Service_Images/Ads/9.jpg",
    // "/Service_Images/Ads/10.jpg",
    // "/Service_Images/Ads/1080x1080 Diwan Sahib Paper Bag Creative-1 copy.jpg",
    // "/Service_Images/Ads/1080x1080 Paper Bag.jpg",
    // "/Service_Images/Ads/Box 1080x1080-2.jpg",
    // "/Service_Images/Ads/Box 1080x1080.jpg",
    // "/Service_Images/Ads/flaabh fest.jpg",
    // "/Service_Images/Ads/Goa AD Creative Flaabh  heal.jpg",
    // "/Service_Images/Ads/Invisalign for Kids Ad Creative Post.png",
    // "/Service_Images/Ads/Invisalign for Teen Ad Creative Post.png",
]

const Logo_Designing = [
    "/Service_Images/logo/1.jpg",
    "/Service_Images/logo/2.jpg",
    "/Service_Images/logo/Asset 1.png",
    "/Service_Images/logo/BB.jpg",
    "/Service_Images/logo/Brown Butter Black-2.png",
    "/Service_Images/logo/dp-02.jpg",
    // "/Service_Images/logo/Ideal-Logo copy.png",
    // "/Service_Images/logo/Logo - Beige-Teal.png",
    // "/Service_Images/logo/Marbia Logo.png",
    // "/Service_Images/logo/New Logos-11.jpg",
]

const Branding_And_Packaging = [
    "/Service_Images/packaging_branding/1.jpg",
    "/Service_Images/packaging_branding/2.jpg",
    "/Service_Images/packaging_branding/3.jpg",
    "/Service_Images/packaging_branding/4.jpg",
    "/Service_Images/packaging_branding/5.jpg",
    "/Service_Images/packaging_branding/6.png",
    // "/Service_Images/packaging_branding/Leaflet-02.jpg",
    // "/Service_Images/packaging_branding/luxury_bc07.jpg",
    // "/Service_Images/packaging_branding/main.png",
    // "/Service_Images/packaging_branding/Mockup1.jpg",
    // "/Service_Images/packaging_branding/PPT Slide.jpg",
    // "/Service_Images/packaging_branding/Screenshot (22) copy.png",
    // "/Service_Images/packaging_branding/Suk post 3.png",
    // "/Service_Images/packaging_branding/WhatsApp Image 2025-04-22 at 5.25.16 PM.jpeg",
]

const Pr_And_Influencer_Marketing = [
    "/Service_Images/Influencer and Marketing/1.jpg",
    "/Service_Images/Influencer and Marketing/2.jpg",
    "/Service_Images/Influencer and Marketing/3.jpg",
    "/Service_Images/Influencer and Marketing/4.JPG",
    "/Service_Images/Influencer and Marketing/5.JPG",
    "/Service_Images/Influencer and Marketing/6.JPG",
    // "/Service_Images/Influencer and Marketing/KNVT0329.JPG",
    // "/Service_Images/Influencer and Marketing/KNVT0379.JPG",
    // "/Service_Images/Influencer and Marketing/KNVT0382.JPG",
    // "/Service_Images/Influencer and Marketing/KNVT0451.JPG",
    // "/Service_Images/Influencer and Marketing/lenskart.png",
    // "/Service_Images/Influencer and Marketing/Social Turtle New Grid.jpg",
    // "/Service_Images/Influencer and Marketing/SocialTurtle X Lenskart Grid.jpg",
]

const Website_Designing = [
    "/Service_Images/Website/1.png",
    "/Service_Images/Website/2.png",
    "/Service_Images/Website/3.png",
    "/Service_Images/Website/4.png",
    "/Service_Images/Website/5.png",
]

const portfolioItems = [
    { id: 1, src: Social_Media_Management, title: "Derel", category: "Social Media Management", tag: "Social Media Management" },

    { id: 2, src: Performance_Marketing, title: "Lee", category: "Performance Marketing", tag: "Performance Marketing" },

    { id: 3, src: Logo_Designing, title: "Sunday Edition", category: "Logo Designing", tag: "Logo Designing" },

    { id: 4, src: Branding_And_Packaging, title: "Emotions", category: "Branding And Packaging", tag: "Branding And Packaging" },
    { id: 5, src: Pr_And_Influencer_Marketing, title: "Tismo", category: "Pr And Influencer Marketing", tag: "Pr And Influencer Marketing" },
    { id: 6, src: Website_Designing, title: "Rolex", category: "Website Designing", tag: "Website Designing" },
];

const OurWorkService = () => {
    let { service } = useParams();
    if (service === "" || service === undefined || service === null) {
        service = "ALL";
    } else {
        service = service
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }
    const [activeFilter, setActiveFilter] = useState(service);

    const filterCategories = ["ALL", "Branding And Packaging", "Logo Designing", "Social Media Management", "Performance Marketing", "Pr And Influencer Marketing", "Website Designing"];
    const filteredItems = activeFilter === "ALL" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter);

    return (
        <div className="bg-white font-sans">
            {/* Responsive padding */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <section className="text-center mb-12">
                    <h1
                        className="text-[28px] sm:text-5xl font-bold text-black mb-4 font-serif" // Responsive font size
                        style={{ fontFamily: "Calisga, sans-serif" }}
                    >
                        Our Work
                    </h1>
                </section>
                {/* Filtering Navigation Section */}
                <section className="mb-12">
                    <nav>
                        <ul className="flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-6 gap-y-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {filterCategories.map((category) => (
                                <li key={category}>
                                    <button
                                        onClick={() => setActiveFilter(category)}
                                        className={`relative group font-semibold text-sm tracking-wider pb-2 cursor-pointer transition-colors duration-300 ${activeFilter === category
                                            ? "text-[#94be4c]" // Color for the active category
                                            : "text-gray-700 hover:text-[#94be4c]" // Color for inactive and hovered categories
                                            }`}
                                    >
                                        {category}
                                        <span
                                            className={`absolute bottom-0 left-0 block h-[2px] bg-[#94be4c] transition-all duration-300 ease-out ${activeFilter === category
                                                ? 'w-full' // Underline is fully visible if the category is active
                                                : 'w-0 group-hover:w-full' // Animate width from 0 to full on hover
                                                }`}
                                        ></span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </section>

                {/* Image Grid Section */}
                <section>
                    {/* Responsive gaps and bottom margin */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-40">
                        {filteredItems
                            .flatMap((item) => {
                                if (Array.isArray(item.src)) {
                                    return item.src.map((img, index) => ({
                                        ...item,
                                        src: img,
                                        id: `${item.id}-${index}`, // Ensure unique ID
                                    }));
                                }
                                return [item];
                            })
                            .map((item) => (
                                <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md h-72">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500">
                                        {/* Responsive padding on hover text */}
                                        <div className="absolute bg-neutral-800 bottom-0 left-0 p-4 md:p-6 flex justify-between items-center w-full md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                                            <div>
                                                <h3 className="text-white text-[16px] md:text-[20px] font-bold">{item.title}</h3>
                                            </div>
                                            <span className="bg-black bg-opacity-50 text-white text-xs font-semibold px-3 py-1 rounded-full">{item.tag}</span>
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

export default OurWorkService;