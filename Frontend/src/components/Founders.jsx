import React from 'react';
import FounderSlider from './FounderSlider';
import "../index.css";

import founder1_normal from '../assets/founders/founder1_normal.png';
import founder1_hover from '../assets/founders/founder1_hover.png';
import founder2_normal from '../assets/founders/founder2_normal.png';
import founder2_hover from '../assets/founders/founder2_hover.png';
import founder3_normal from '../assets/founders/founder3_normal.png';
import founder3_hover from '../assets/founders/founder3_hover.png';
import wavyBackground from '../assets/founders/wavy_background.png';

const founders = [
    {
        id: 1,
        name: 'Founder One',
        imageNormal: founder3_normal,
        imageHover: founder3_hover,
    },
    {
        id: 2,
        name: 'Founder Two',
        imageNormal: founder1_normal,
        imageHover: founder1_hover,
    },
    {
        id: 3,
        name: 'Founder Three',
        imageNormal: founder2_normal,
        imageHover: founder2_hover,
    },
];

const MarqueeContent = () => (
    <div className="flex items-center justify-around flex-shrink-0">
        {Array(5).fill(null).map((_, index) => (
            <React.Fragment key={index}>
                <span className="text-2xl mx-6 font-semibold tracking-wider whitespace-nowrap">Meet the Founders</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block flex-shrink-0">
                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L0 8.216l8.027-.952L12 0l3.973 7.264 8.027.952-6.522 6.064 1.575 7.928z" fill="white" />
                </svg>
            </React.Fragment>
        ))}
    </div>
);

const Founders = () => {
    return (
        <section
            className="relative min-h-screen flex flex-col items-end justify-center bg-[#a3e635] pt-8 text-gray-900 overflow-hidden"
            style={{ backgroundImage: `url(${wavyBackground})` }}
        >
            {/* Text Content */}
            <div className="text-center px-12 z-10 max-w-3xl mx-auto">
                <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6" style={{ fontFamily: "Calisga, sans-serif" }}>Social Turtle</h1>
                <p className="text-lg md:text-xl leading-relaxed">
                    A cool creature of the digital world that believes slow and steady does win the race. Inspired by the turtle's chill vibe and smart moves, Social Turtle takes a calm, clever, and consistent approach to marketing. We dodge trends we don't believe in, protect your brand like a shell, and grow with purpose — no rush, just results. <strong className="font-semibold italic">It's not just a name, it's our way of life.</strong>
                </p>
            </div>

            {/* Founders Section */}
            <div className="w-full max-w-6xl mx-auto z-10 mb-12">
                <div className="hidden sm:flex items-end justify-center gap-8 md:gap-4">
                    {founders.map((founder, index) => (
                        <div
                            key={founder.id}
                            className="relative group cursor-pointer"
                            style={{ zIndex: founders.length - index }}
                        >
                            <img
                                src={founder.imageNormal}
                                alt={founder.name}
                                className="w-72 md:w-auto max-h-[70vh] object-contain grayscale transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                            />
                            <img
                                src={founder.imageHover}
                                alt={`${founder.name} hover state`}
                                className="w-72 md:w-auto max-h-[70vh] object-contain grayscale absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>

                {/* Mobile: slider */}
                <div className="sm:hidden">
                    <FounderSlider founders={founders} />
                </div>
            </div>


            {/* Marquee Section */}
            <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden bg-black text-white py-4">
                <div className="animate-marquee">
                    <MarqueeContent />
                    <MarqueeContent aria-hidden="true" />
                </div>
            </div>

        </section>
    );
};

export default Founders;