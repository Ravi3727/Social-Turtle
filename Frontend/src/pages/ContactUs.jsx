import {useState} from 'react';
// Importing icons from the react-icons library
import { FiPlus, FiMinus } from 'react-icons/fi';
import Contact from '../components/Contact'; // Assuming this component is already responsive

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Facilisi cursus urna magna sit nibh suspendisse. Lorem ipsum dolor sit amet consectetur."
  },
  {
    question: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis?",
    answer: "In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique."
  },
  {
    question: "Praesent evarius tesque a enim et quasi?",
    answer: "Donec eget risus diam. Curabitur vel libero id nisl porta pulvinar. Suspendisse potenti. Aliquam erat volutpat."
  },
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate velit?",
    answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        <h3 className="text-base md:text-lg font-medium text-gray-800 pr-4">{faq.question}</h3>
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-500">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const ContactUs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    // Main container with responsive margin and padding
    <div className='min-h-screen bg-white flex items-center justify-center mt-10 md:mt-20 font-sans'>
      <div className='w-full max-w-7xl mx-auto p-4 sm:p-8'>
        <Contact />

        {/* Map Section with responsive margin */}
        <section className='mt-16 md:mt-20'>
          <div className='w-full'>
            {/* Responsive map height */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.701198463251!2d77.21019617527663!3d28.63870178430737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7754582a97%3A0x8a03c519d44890f!2sSadar%20Thana%20Road%2C%20Bazar%20Sadar%2C%20Delhi%2C%20110006!5e0!3m2!1sen!2sin!4v1724504897813!5m2!1sen!2sin" 
                className='w-full h-[350px] md:h-[450px] border-0 rounded-lg shadow-md'
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* FAQ Section with responsive padding and layout */}
        <section className='w-full py-16 md:py-20'>
          {/* Stacks vertically on mobile, row on medium screens+ */}
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-start'>
            
            {/* Left Side: Title */}
            <div className='w-full md:w-1/3 text-center md:text-left' style={{fontFamily: 'Calisga, sans-serif'}}>
              {/* Responsive font sizes for the title */}
              <h2 className='text-4xl md:text-5xl font-bold text-black'>
                Frequently
              </h2>
              <h2 className='text-4xl md:text-5xl font-bold text-black'>
                Asked
              </h2>
              <h2 className='text-4xl md:text-5xl font-bold text-[#94be4c] mt-2'>
                Questions
              </h2>
            </div>
            
            {/* Right Side: Accordion */}
            <div className='w-full md:w-2/3 mt-8 md:mt-0' style={{ fontFamily: 'Montserrat, sans-serif', fontWeight:500 }}>
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