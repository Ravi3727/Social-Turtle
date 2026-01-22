import { useState } from "react";
// Importing icons from the react-icons library
import { FiPlus, FiMinus } from "react-icons/fi";
import Contact from "../components/Contact"; // Assuming this component is already responsive

const faqData = [
  {
    question: "What does Social Turtle actually do?",
    answer:
      "We help brands grow through strategy, content, and performance. From social media and branding to ads, influencers, and production, we handle everything needed to build visibility and drive results.",
  },
  {
    question: "Who do you work with?",
    answer:
      "We work with startups, growing brands, and established businesses across fitness, food, fashion, beauty, healthcare, and lifestyle. If the brand wants to scale, we’re in.",
  },
  {
    question: "Do you handle everything or only social media?",
    answer:
      "Everything. Strategy, content creation, shoots, editing, ads, influencer campaigns, branding, and websites. One team. One direction. No scattered execution.",
  },
  {
    question: "How is Social Turtle different from other agencies?",
    answer:
      "We don’t do random posting or generic campaigns. Every move is intentional, data-backed, and built for how people actually scroll, click, and buy.",
  },
  {
    question: "Do you create content in-house?",
    answer:
      "Yes. From concepts and scripts to shoots and edits, all production is handled by our in-house team to maintain quality and brand consistency.",
  },
  {
    question: "Can you help with paid ads and lead generation?",
    answer:
      "Absolutely. We run and optimize Meta and Google ads focused on ROI, not vanity metrics. Better targeting, smarter spends, real conversions.",
  },
  {
    question: "Do you work with influencers and UGC creators?",
    answer:
      "Yes. We manage influencer collaborations and UGC campaigns that feel natural, build trust, and influence purchase decisions.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Brand growth takes consistency, but most clients start seeing engagement and performance improvements within the first 30–60 days.",
  },
  {
    question: "Do you offer customized packages?",
    answer:
      "Always. We tailor strategies and pricing based on your goals, industry, and stage of growth. No one-size-fits-all plans here.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simple. Reach out, share your goals, and we’ll take it from there. Strategy first. Execution next.",
  },
];



const FaqItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  const handleToggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="py-6 border-b border-gray-200">
      <button
        onClick={handleToggle}
        className="flex justify-between items-center cursor-pointer w-full text-left"
      >
        {/* Responsive text size for the question */}
        <h3 className="text-base md:text-lg font-medium text-gray-800 pr-4">
          {faq.question}
        </h3>
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
      >
        <p className="text-gray-500">{faq.answer}</p>
      </div>
    </div>
  );
};

const ContactUs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    // Main container with responsive margin and padding
    <div className="min-h-screen bg-white flex items-center justify-center mt-10 md:mt-20 font-sans">
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
        <Contact />

        {/* Map Section with responsive margin */}
        <section className="mt-16 md:mt-20">
          <div className="w-full">
            {/* Responsive map height */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.701198463251!2d77.21019617527663!3d28.63870178430737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7754582a97%3A0x8a03c519d44890f!2sSadar%20Thana%20Road%2C%20Bazar%20Sadar%2C%20Delhi%2C%20110006!5e0!3m2!1sen!2sin!4v1724504897813!5m2!1sen!2sin"
              className="w-full h-[350px] md:h-[450px] border-0 rounded-lg shadow-md"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* FAQ Section with responsive padding and layout */}
        <section className="w-full py-16 md:py-20">
          {/* Stacks vertically on mobile, row on medium screens+ */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            {/* Left Side: Title */}
            <div
              className="w-full md:w-1/3 text-center md:text-left"
              style={{ fontFamily: "Calisga, sans-serif" }}
            >
              {/* Responsive font sizes for the title */}
              <div className="flex md:flex-col md:space-x-2 justify-center md:justify-start">
                <h2 className="text-[28px] md:text-5xl font-semibold text-black">
                  Frequently
                </h2>
                <h2 className="text-[28px] md:text-5xl font-semibold text-black">
                  Asked
                </h2>
              </div>
              <h2 className="text-[28px] md:text-5xl font-semibold text-[#94be4c] mt-2">
                Questions
              </h2>
            </div>

            {/* Right Side: Accordion */}
            <div
              className="w-full md:w-2/3 mt-8 md:mt-0"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
            >
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  index={index}
                  faq={faq}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
