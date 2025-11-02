import Image from "next/image";
import React from "react";
import {
  PiArrowRight,
  PiShieldCheck,
  PiSparkle,
  PiLightning,
} from "react-icons/pi";

export default function Trust() {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden bg-white">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Geometric Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(#636B2F 1px, transparent 1px), linear-gradient(90deg, #636B2F 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10% w-6 h-6 bg-[#636B2F] rounded-full opacity-10 animate-orb-1"></div>
        <div className="absolute top-40 right-20% w-4 h-4 bg-[#D4DE95] rounded-full opacity-20 animate-orb-2"></div>
        <div className="absolute bottom-60 left-30% w-8 h-8 bg-[#BAC095] rounded-full opacity-15 animate-orb-3"></div>

        {/* Connection Lines */}
        <div className="absolute top-1/4 left-1/4 w-0.5 h-32 bg-gradient-to-b from-[#636B2F] to-transparent opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-0.5 h-24 bg-gradient-to-t from-[#D4DE95] to-transparent opacity-25"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Breaking Grid Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Column - Creative Image Container */}
          <div className="flex-1 relative">
            {/* Main Image with Floating Frame */}
            <div className="relative group">
              {/* Background Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#636B2F] to-[#D4DE95] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rotate-2"></div>

              {/* Image Container */}
              <div className="relative rounded-xl overflow-hidden transform -rotate-1 group-hover:rotate-0 transition-transform duration-700">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={"/images/welding.avif"}
                    alt="Professional Welding Training"
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#636B2F] to-[#D4DE95] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <PiSparkle className="text-white text-lg" />
              </div>

              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-2 border-[#636B2F] rounded-lg rotate-45 opacity-60"></div>
            </div>

            {/* Side Accent */}
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-0.5 h-32 bg-gradient-to-b from-[#D4DE95] to-[#636B2F] opacity-50"></div>
          </div>

          {/* Right Column - Typography Focus */}
          <div className="flex-1 relative">
            {/* Vertical Text Accent */}
            <div className="absolute -left-8 top-0 bottom-0 flex items-center">
              <div className="text-[#636B2F] text-sm font-bold tracking-widest vertical-text opacity-40">
                AUTHENTIC · TRAINING · EXCELLENCE
              </div>
            </div>

            <div className="space-y-6">
              {/* Minimal Badge */}
              <div className="inline-flex items-center gap-2 border border-[#636B2F] rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-[#636B2F] rounded-full animate-pulse"></div>
                <span className="text-[#636B2F] font-bold text-sm tracking-wide">
                  GUARANTEED TRAINING
                </span>
              </div>

              {/* Creative Headline Layout */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  Don't Settle For
                  <br />
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#636B2F] to-[#D4DE95]">
                      Ordinary Training
                    </span>
                    {/* Underline Effect */}
                    <div className="absolute bottom-1 left-0 w-full h-3 bg-[#BAC095] opacity-20 -z-10 transform -rotate-1"></div>
                  </span>
                </h1>

                <div className="text-lg text-gray-600 leading-relaxed border-l-4 border-[#636B2F] pl-4 ml-4">
                  Experience the difference with programs designed by industry
                  experts, not just textbook theorists.
                </div>
              </div>

              {/* Interactive CTA */}
              <div className="relative group">
                <button className="relative bg-white border-2 border-[#636B2F] text-[#636B2F] px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:bg-[#636B2F] hover:text-white hover:shadow-2xl hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#636B2F] to-[#D4DE95] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative flex items-center gap-3">
                    See Real Results
                    <PiArrowRight className="text-xl transition-transform duration-500 group-hover:translate-x-2" />
                  </span>
                </button>

                {/* Button Shadow Effect */}
                <div className="absolute inset-0 bg-[#636B2F] rounded-full blur group-hover:blur-md transition-all duration-500 -z-10 opacity-0 group-hover:opacity-20"></div>
              </div>

              {/* Minimal Stats */}
              <div className="flex gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-black text-[#636B2F]">98%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Success
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#636B2F]">
                    2.5K+
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Trained
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#636B2F]">4.9★</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Rated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Connection Line */}
        <div className="mt-20 flex justify-center">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#636B2F] to-transparent opacity-50"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orb-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(10px, -15px) scale(1.1);
          }
          50% {
            transform: translate(5px, 10px) scale(0.9);
          }
          75% {
            transform: translate(-10px, -5px) scale(1.05);
          }
        }
        @keyframes orb-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-8px, 12px) scale(1.2);
          }
          66% {
            transform: translate(12px, -8px) scale(0.8);
          }
        }
        @keyframes orb-3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-15px, -10px) scale(1.15);
          }
        }
        .animate-orb-1 {
          animation: orb-1 8s ease-in-out infinite;
        }
        .animate-orb-2 {
          animation: orb-2 6s ease-in-out infinite;
        }
        .animate-orb-3 {
          animation: orb-3 10s ease-in-out infinite;
        }

        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
