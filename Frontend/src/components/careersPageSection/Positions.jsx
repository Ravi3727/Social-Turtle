import React from "react";
import { Clock, IndianRupee } from "lucide-react";

const Positions = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16"
          style={{
            fontFamily: "Calisga, serif",
            color: "#a1ca3a",
            fontWeight: 350,
          }}
        >
          Positions
        </h2>
        <div className="border-b-2 border-gray-300 mb-8 md:mb-12"></div>

        {/* Positions List */}
        <div className="space-y-8 md:space-y-12">
          {/* Position 1 */}
          <div className="border-b-2 border-gray-300 pb-8 md:pb-12">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <h3
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-0"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Position Name
              </h3>
              <button
                className="text-gray-900 font-medium flex items-center text-sm md:text-[22px] cursor-pointer hover:text-[#a1ca3a] transition-colors self-start sm:self-auto"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Apply
                <svg
                  className="ml-1 w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </button>
            </div>
            <p
              className="text-gray-600 leading-[1.6] text-sm md:text-base lg:text-[20px] mb-4 max-w-2xl"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
              }}
            >
              We're looking for a mid-level product designer to join our team.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <span
                className="border-2 border-gray-500 rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-700 flex items-center gap-1"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                }}
              >
                <IndianRupee className="w-3 h-3 md:w-4 md:h-4" />
                40-50k
              </span>
              <span
                className="border-2 border-gray-500 rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-700 flex items-center gap-1"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                }}
              >
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                Full Time
              </span>
            </div>
          </div>

          {/* Position 2 */}
          <div className="border-b-2 border-gray-300 pb-8 md:pb-12">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <h3
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-0"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Position Name
              </h3>
              <button
                className="text-gray-900 font-medium flex items-center text-sm md:text-[22px] cursor-pointer hover:text-[#a1ca3a] transition-colors self-start sm:self-auto"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Apply
                <svg
                  className="ml-1 w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </button>
            </div>
            <p
              className="text-gray-600 leading-[1.6] text-sm md:text-base lg:text-[20px] mb-4 max-w-2xl"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
              }}
            >
              We're looking for a mid-level product designer to join our team.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <span
                className="border-2 border-gray-500 rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-700 flex items-center gap-1"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                }}
              >
                <IndianRupee className="w-3 h-3 md:w-4 md:h-4" />
                40-50k
              </span>
              <span
                className="border-2 border-gray-500 rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-700 flex items-center gap-1"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                }}
              >
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                Full Time
              </span>
            </div>
          </div>

          {/* Position 3 */}
          <div className="border-b-2 border-gray-300 pb-8 md:pb-12">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <h3
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-0"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Position Name
              </h3>
              <button
                className="text-gray-900 font-medium flex items-center text-sm md:text-[22px] cursor-pointer hover:text-[#a1ca3a] transition-colors self-start sm:self-auto"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Apply
                <svg
                  className="ml-1 w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </button>
            </div>
            <p
              className="text-gray-600 leading-[1.6] text-sm md:text-base lg:text-[20px] mb-4 max-w-2xl"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
              }}
            >
              We're looking for a mid-level product designer to join our team.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <span
                className="border-2 border-gray-500 rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-700 flex items-center gap-1"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                }}
              >
                <IndianRupee className="w-3 h-3 md:w-4 md:h-4" />
                40-50k
              </span>
              <span
                className="border-2 border-gray-500 rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-700 flex items-center gap-1"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                }}
              >
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                Full Time
              </span>
            </div>
          </div>

          {/* Position 4 */}
          <div className="pb-8 md:pb-12">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <h3
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-0"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Position Name
              </h3>
              <button
                className="text-gray-900 font-medium flex items-center text-sm md:text-[22px] cursor-pointer hover:text-[#a1ca3a] transition-colors self-start sm:self-auto"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Apply
                <svg
                  className="ml-1 w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </button>
            </div>
            <p
              className="text-gray-600 leading-[1.6] text-sm md:text-base lg:text-[20px] mb-4 max-w-2xl"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
              }}
            >
              We're looking for a mid-level product designer to join our team.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <span
                className="border-2 border-gray-500 rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-700 flex items-center gap-1"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                }}
              >
                <IndianRupee className="w-3 h-3 md:w-4 md:h-4" />
                40-50k
              </span>
              <span
                className="border-2 border-gray-500 rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-700 flex items-center gap-1"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                }}
              >
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                Full Time
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positions;
