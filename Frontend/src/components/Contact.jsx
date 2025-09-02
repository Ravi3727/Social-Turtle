import React from "react";
import { useForm } from "react-hook-form";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // This function will only be called if validation passes
  const onSubmit = async(data) => {
    console.log("=== FORM DATA SUBMITTED ===");
    console.log("Form Data:", data);
    console.log("============================");

    try {
        const res = await fetch('http://localhost:5000/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const response = await res.json();
        console.log("Server Response:", response);
        
        if(response.success) {
            toast.success('Thank you for your message! We\'ll get back to you soon.');
            reset();
        } else {
            toast.error('Error: ' + response.message);
        }
    } catch(error) {
        console.error('Network error:', error);
        toast.error('Network error. Please check your connection and try again.');
    }
};


  return (
    <section className="flex flex-col md:flex-row justify-between items-start gap-16">
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2">
        <div className="mb-12">
          <h1
            className="text-6xl font-serif text-black mb-2"
            style={{ fontFamily: "Calisga, sans-serif" }}
          >
            Contact Us
          </h1>
          <p
            className="text-lg text-gray-600"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Don't be afraid to say
          </p>
          <p
            className="text-lg text-gray-600 "
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            hello to us
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4"
        >
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full pb-2 border-b border-gray-300 focus:outline-none focus:border-[#94be4c] transition-colors"
              {...register("name", { required: "Name is required" })}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full pb-2 border-b border-gray-300 focus:outline-none focus:border-[#94be4c] transition-colors"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone no."
              className="w-full pb-2 border-b border-gray-300 focus:outline-none focus:border-[#94be4c] transition-colors"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[\+]?[\d\s\-\(\)]{7,15}$/,
                  message: "Please enter a valid phone number",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Message"
              rows="2"
              className="w-full pb-2 border-b border-gray-300 focus:outline-none focus:border-[#94be4c] transition-colors resize-none"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              {...register("message", { required: "Message cannot be empty" })}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full md:w-auto self-start bg-[#94be4c] text-white font-bold py-3 px-12 rounded-full hover:bg-[#83a843] transition-all duration-300 mt-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Side: Info Box */}
      <div className="w-full md:w-1/2 h-[550px] relative mt-16 md:mt-0">
        <div className="absolute top-0 right-0 h-full w-1/4 bg-[#94be4c] z-0"></div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-11/12 bg-black text-white p-12 z-10">
          <h2 className="text-4xl font-bold mb-10">Info</h2>
          <div className="flex items-start gap-x-6 mb-8">
            <FiPhone className="text-2xl text-[#94be4c] mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p>+91 98765-43210</p>
              <p>+91 98765-43210</p>
            </div>
          </div>
          <div className="flex items-start gap-x-6 mb-8">
            <FiMail className="text-2xl text-[#94be4c] mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p>hello@socialturtle.com</p>
              <p>Contact@socialturtle.com</p>
            </div>
          </div>
          <div className="flex items-start gap-x-6">
            <FiMapPin className="text-2xl text-[#94be4c] mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Office</h3>
              <p>Engine House</p>
              <p>Mohan Estate</p>
              <p>Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
