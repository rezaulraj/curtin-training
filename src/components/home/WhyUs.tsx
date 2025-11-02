import Image from "next/image";
import React from "react";
import {
  PiShieldCheck,
  PiUsers,
  PiCertificate,
  PiHandsClapping,
} from "react-icons/pi";

export default function WhyUs() {
  return (
    <div className="min-h-screen py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-[#636B2F] rounded-full opacity-10 animate-float-1"></div>
        <div className="absolute top-40 right-15 w-4 h-4 bg-[#D4DE95] rounded-full opacity-15 animate-float-2"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-[#BAC095] rounded-full opacity-10 animate-float-3"></div>

        {/* Geometric Lines */}
        <div className="absolute top-1/3 left-1/4 w-0.5 h-24 bg-gradient-to-b from-[#636B2F] to-transparent opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/3 w-0.5 h-32 bg-gradient-to-t from-[#D4DE95] to-transparent opacity-15"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          {/* Left Side - Text Content */}
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            {/* Header Section */}
            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 border border-[#636B2F] rounded-full px-4 py-2 lg:px-6 lg:py-3">
                <div className="w-2 h-2 bg-[#636B2F] rounded-full animate-pulse"></div>
                <span className="text-[#636B2F] font-bold tracking-widest text-xs lg:text-sm">
                  WHY CHOOSE US?
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
                Let&apos;s Trust Us We Work With
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#636B2F] to-[#D4DE95]">
                  Professional Team
                </span>
              </h1>

              {/* Description */}
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Our professional team provides top-quality online training with
                globally recognized certificates. We offer expert instructors,
                flexible learning, and hands-on experience to ensure you gain
                valuable, real-world skills for your career.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* Feature 1 - Expert Trainers */}
              <div className="group p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-gray-200 hover:border-[#636B2F] transition-all duration-500 hover:shadow-lg lg:hover:shadow-xl hover:scale-105">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#636B2F] to-[#D4DE95] rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-500">
                  <PiUsers className="text-white text-lg lg:text-xl" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                  Expert Trainers
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                  Our team consists of highly experienced professionals who
                  bring real-world expertise to the training, ensuring
                  top-quality education.
                </p>
              </div>

              {/* Feature 2 - Hands-On Training */}
              <div className="group p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-gray-200 hover:border-[#636B2F] transition-all duration-500 hover:shadow-lg lg:hover:shadow-xl hover:scale-105">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#636B2F] to-[#D4DE95] rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-500">
                  <PiHandsClapping className="text-white text-lg lg:text-xl" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                  Practical Hands-On Training
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                  Gain practical, hands-on skills through real-life projects and
                  exercises that prepare you for the workforce.
                </p>
              </div>

              {/* Feature 3 - Global Certificates */}
              <div className="group p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-gray-200 hover:border-[#636B2F] transition-all duration-500 hover:shadow-lg lg:hover:shadow-xl hover:scale-105">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#636B2F] to-[#D4DE95] rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-500">
                  <PiCertificate className="text-white text-lg lg:text-xl" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                  Globally Recognized Certificates
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                  Upon completion, you receive certificates that are accepted
                  worldwide, enhancing your career prospects wherever you go.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 relative order-1 lg:order-2 w-full lg:w-auto">
            {/* Main Image Container */}
            <div className="relative group">
              {/* Background Frame - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:block absolute -inset-4 bg-gradient-to-br from-[#636B2F] to-[#D4DE95] rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 rotate-2"></div>

              {/* Image */}
              <div className="relative rounded-xl lg:rounded-2xl overflow-hidden transform lg:-rotate-1 group-hover:rotate-0 transition-transform duration-700">
                <div className="aspect-square lg:aspect-[4/5] relative">
                  <Image
                    src={"/images/whyUs.avif"}
                    alt="Professional Team"
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    priority
                  />
                  {/* Fallback background in case image doesn't load */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#636B2F] to-[#D4DE95] opacity-10"></div>
                </div>
              </div>

              {/* Floating Elements - Adjusted for mobile */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#636B2F] to-[#D4DE95] rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg lg:shadow-2xl rotate-6 lg:rotate-12 animate-bounce">
                <PiShieldCheck className="text-white text-lg lg:text-2xl" />
              </div>

              <div className="absolute -bottom-2 -left-2 lg:-bottom-3 lg:-left-3 w-8 h-8 lg:w-12 lg:h-12 border-2 border-[#636B2F] rounded lg:rounded-lg rotate-45 opacity-60"></div>
            </div>

            {/* Stats Overlay - Adjusted for mobile */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-white rounded-lg lg:rounded-2xl p-3 lg:p-6 shadow-lg lg:shadow-2xl border border-gray-200">
              <div className="text-center">
                <div className="text-xl lg:text-3xl font-black text-[#636B2F]">
                  98%
                </div>
                <div className="text-xs lg:text-sm text-gray-600 font-medium">
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Connection Line */}
        <div className="mt-12 lg:mt-20 flex justify-center">
          <div className="w-32 lg:w-48 h-0.5 bg-gradient-to-r from-transparent via-[#636B2F] to-transparent opacity-30"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(10px, -20px) scale(1.1);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-15px, 15px) scale(0.9);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, 10px) scale(1.2);
          }
        }
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
