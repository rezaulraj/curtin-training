import React from "react";
import Image from "next/image";

export default function HeroPortfolio() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden py-34">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portfolio/heroportfolio.webp"
          alt="Curtin Technical Development Portfolio"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D4127]/80 via-[#3D4127]/60 to-[#1A1D12]/90"></div>
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#D4DE95] via-[#BAC095] to-[#636B2F] bg-clip-text text-transparent">
              Building Future
            </span>
            <br />
            <span className="text-white">Skilled Professionals</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transforming lives through comprehensive technical training and
            industry-ready skill development for global opportunities.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto pt-8">
            {[
              { number: "19+", label: "Years Experience" },
              { number: "3000+", label: "Trained Workers" },
              { number: "15+", label: "Countries" },
              { number: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#D4DE95] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12">
            <button
              className="group bg-[#636B2F] hover:bg-[#D4DE95] text-white hover:text-[#3D4127] 
                             px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 
                             transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>View Our Portfolio</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            <button
              className="group border-2 border-[#D4DE95] text-[#D4DE95] hover:bg-[#D4DE95] 
                             hover:text-[#3D4127] px-8 py-4 rounded-lg font-semibold text-lg 
                             transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[#D4DE95] rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-[#BAC095] rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#636B2F] rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-32 w-5 h-5 bg-[#D4DE95] rounded-full opacity-50 animate-bounce"></div>

      {/* Gradient Orbs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D4DE95] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#636B2F] rounded-full opacity-10 blur-3xl"></div>
    </div>
  );
}
