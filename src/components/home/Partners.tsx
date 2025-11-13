import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Country {
  name: string;
  flag: string;
  workers: string;
}

export default function Partners() {
  const countries: Country[] = [
    {
      name: "Saudi Arabia",
      flag: "/flags/saudi-arabia.png",
      workers: "500+ Workers",
    },
    { name: "Qatar", flag: "/flags/qatar.jpg", workers: "300+ Workers" },
    { name: "Malaysia", flag: "/flags/malaysia.jpg", workers: "450+ Workers" },
    {
      name: "Singapore",
      flag: "/flags/singapore.avif",
      workers: "200+ Workers",
    },
    { name: "Japan", flag: "/flags/japan.jpeg", workers: "350+ Workers" },
    {
      name: "Indonesia",
      flag: "/flags/indonesia.jpg",
      workers: "600+ Workers",
    },
    { name: "Turkey", flag: "/flags/turkey.png", workers: "400+ Workers" },
    { name: "UAE", flag: "/flags/uae.png", workers: "250+ Workers" },
    { name: "Kuwait", flag: "/flags/kuwait.jpg", workers: "180+ Workers" },
    { name: "Oman", flag: "/flags/oman.png", workers: "220+ Workers" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === countries.length - 1 ? 0 : prevIndex + 1
    );
  }, [countries.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? countries.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, nextSlide]);

  const getVisibleCountries = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % countries.length;
      visible.push(countries[index]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-[#D4DE95]/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#3D4127] mb-4">
            Partners Countries
          </h2>
          <p className="text-xl lg:text-2xl font-semibold text-[#636B2F]">
            Our workers are working
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4DE95] to-[#636B2F] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Flags Carousel */}
        <div className="relative mb-16">
          <div
            className="flex justify-center items-center space-x-4 lg:space-x-8 transition-all duration-500 ease-in-out"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {getVisibleCountries().map((country, index) => (
              <div
                key={`${country.name}-${currentIndex + index}`}
                className={`flex flex-col items-center transform transition-all duration-500 ease-in-out ${
                  index === 2
                    ? "scale-125 z-10"
                    : index === 1 || index === 3
                    ? "scale-110 opacity-80"
                    : "scale-100 opacity-60"
                }`}
              >
                {/* Flag Container */}
                <div
                  className={`relative ${
                    index === 2
                      ? "w-32 h-32 lg:w-40 lg:h-40"
                      : index === 1 || index === 3
                      ? "w-28 h-28 lg:w-32 lg:h-32"
                      : "w-24 h-24 lg:w-28 lg:h-28"
                  } mb-4`}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl shadow-2xl ${
                      index === 2
                        ? "bg-gradient-to-br from-[#D4DE95] to-[#BAC095]"
                        : "bg-white"
                    } transform rotate-3 transition-all duration-300`}
                  ></div>
                  <div
                    className={`absolute inset-0 rounded-xl border-4 ${
                      index === 2 ? "border-[#636B2F]" : "border-[#D4DE95]"
                    } overflow-hidden transform -rotate-3 transition-all duration-300`}
                  >
                    {/* Flag Image - Replace with actual flag images */}
                    <Image
                      src={country.flag}
                      alt={`${country.name} flag`}
                      fill
                      className="object-center"
                    />
                  </div>
                </div>

                {/* Country Info */}
                <div
                  className={`text-center transform transition-all duration-300 ${
                    index === 2 ? "scale-110" : "scale-100"
                  }`}
                >
                  <h3
                    className={`font-bold ${
                      index === 2 ? "text-[#3D4127] text-lg" : "text-[#636B2F]"
                    }`}
                  >
                    {country.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      index === 2 ? "text-[#636B2F]" : "text-[#BAC095]"
                    } font-semibold`}
                  >
                    {country.workers}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 
                       bg-white/80 hover:bg-white text-[#3D4127] p-3 rounded-full 
                       shadow-lg hover:shadow-xl transition-all duration-300 
                       backdrop-blur-sm z-20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 
                       bg-white/80 hover:bg-white text-[#3D4127] p-3 rounded-full 
                       shadow-lg hover:shadow-xl transition-all duration-300 
                       backdrop-blur-sm z-20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mb-12">
          {countries.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#636B2F] scale-125"
                  : "bg-[#D4DE95] hover:bg-[#BAC095]"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[#3D4127]">15+</div>
            <div className="text-[#636B2F] font-semibold">Countries</div>
          </div>
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[#3D4127]">3000+</div>
            <div className="text-[#636B2F] font-semibold">Workers</div>
          </div>
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[#3D4127]">19</div>
            <div className="text-[#636B2F] font-semibold">Years</div>
          </div>
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[#3D4127]">98%</div>
            <div className="text-[#636B2F] font-semibold">Success Rate</div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#D4DE95] rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#BAC095] rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#636B2F] rounded-full opacity-5"></div>
      </div>
    </div>
  );
}
