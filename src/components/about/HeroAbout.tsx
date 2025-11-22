import React from "react";
import Image from "next/image";

export default function HeroAbout() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden py-36">
      {/* Fixed Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-us.avif"
          alt="Curtin Technical Training Center"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D4127]/90 via-[#3D4127]/80 to-[#1A1D12]/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 bg-[#D4DE95]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#D4DE95]/30">
            <div className="w-2 h-2 bg-[#D4DE95] rounded-full animate-pulse"></div>
            <span className="text-[#D4DE95] font-semibold text-sm uppercase tracking-wider">
              Since 2006 - Trusted Globally
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#D4DE95] via-[#BAC095] to-[#636B2F] bg-clip-text text-transparent">
              Why We Are
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">The Best Choice?</span>
          </h1>

          {/* Main Description */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-light">
              Empowering Bangladeshi workers with world-class training and
              overseas opportunities—trusted by global industries for over 19
              years.
            </p>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[#D4DE95] rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-[#BAC095] rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#636B2F] rounded-full opacity-70 animate-pulse"></div>
    </div>
  );
}
