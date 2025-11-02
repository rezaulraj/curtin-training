import React from "react";
import {
  PiBuilding,
  PiGraduationCap,
  PiGlobe,
  PiUsers,
  PiArrowRight,
  PiSparkle,
} from "react-icons/pi";

export default function Showcase() {
  const stats = [
    {
      icon: <PiBuilding className="text-3xl" />,
      value: "19",
      label: "Years",
      subtitle: "Business Experience",
      gradient: "from-[#636B2F] to-[#3D4127]",
    },
    {
      icon: <PiGraduationCap className="text-3xl" />,
      value: "10",
      suffix: "+",
      label: "Top Courses",
      subtitle: "Specialized Programs",
      gradient: "from-[#D4DE95] to-[#BAC095]",
    },
    {
      icon: <PiGlobe className="text-3xl" />,
      value: "10",
      suffix: "+",
      label: "Countries",
      subtitle: "Global Workers",
      gradient: "from-[#636B2F] to-[#D4DE95]",
    },
    {
      icon: <PiUsers className="text-3xl" />,
      value: "250",
      suffix: "+",
      label: "Happy Clients",
      subtitle: "Satisfied Graduates",
      gradient: "from-[#BAC095] to-[#636B2F]",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-[#3D4127] via-[#2D321F] to-[#1A1D12] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#636B2F] to-[#D4DE95] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#3D4127] to-[#BAC095] rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-[#D4DE95] to-[#636B2F] rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>

        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(#636B2F 1px, transparent 1px), linear-gradient(90deg, #636B2F 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D4DE95] rounded-full opacity-40 animate-float-1"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#BAC095] rounded-full opacity-30 animate-float-2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#636B2F] rounded-full opacity-50 animate-float-3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#636B2F]/30 to-[#D4DE95]/20 backdrop-blur-xl border border-[#636B2F]/50 rounded-2xl px-6 py-3 mb-8 animate-float">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#D4DE95] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#BAC095] rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-[#636B2F] rounded-full animate-pulse delay-300"></div>
            </div>
            <span className="text-[#D4DE95] font-bold tracking-widest text-sm">
              SHOWCASE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
            Our Successful
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4DE95] via-[#BAC095] to-[#636B2F] animate-gradient">
              Portfolio
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-[#BAC095] leading-relaxed max-w-3xl mx-auto">
            Our successful portfolio showcases a diverse range of industries
            where our graduates have excelled, with globally recognized
            certifications helping them secure top positions worldwide.
          </p>
        </div>

        {/* Stats Grid - Glass Morphism Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative animate-stat-slide"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#636B2F] via-[#D4DE95] to-[#BAC095] rounded-3xl blur opacity-40 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-[#3D4127]/80 to-[#2D321F]/60 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-[#636B2F]/30 group-hover:border-[#D4DE95]/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl h-full">
                {/* Background Pattern */}
                <div className="absolute inset-0 rounded-3xl opacity-10">
                  <svg width="100%" height="100%">
                    <pattern
                      id={`pattern-${index}`}
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="20" cy="20" r="1" fill="#D4DE95" />
                    </pattern>
                    <rect
                      width="100%"
                      height="100%"
                      fill={`url(#pattern-${index})`}
                    />
                  </svg>
                </div>

                <div className="relative z-10 text-center">
                  {/* Icon Container */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}
                  >
                    <div className="text-[#3D4127]">{stat.icon}</div>
                  </div>

                  {/* Main Value */}
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl lg:text-4xl xl:text-5xl font-black text-[#D4DE95] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#D4DE95] group-hover:to-[#BAC095] transition-all duration-500">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="text-xl lg:text-2xl text-[#BAC095] font-bold">
                        {stat.suffix}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <div className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-[#D4DE95] transition-colors duration-300">
                    {stat.label}
                  </div>

                  {/* Subtitle */}
                  <div className="text-sm text-[#BAC095] font-medium group-hover:text-[#D4DE95] transition-colors duration-300">
                    {stat.subtitle}
                  </div>
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#636B2F] to-[#D4DE95] group-hover:w-3/4 transition-all duration-500 rounded-full"></div>

                {/* Floating Sparkle */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <PiSparkle className="text-[#D4DE95] text-lg animate-spin" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-[#636B2F]/30 to-[#D4DE95]/20 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-[#636B2F]/30 shadow-2xl">
            <div className="text-left">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                Ready to Join Our Success Story?
              </h3>
              <p className="text-[#BAC095] text-sm lg:text-base">
                Become part of our growing community of successful
                professionals.
              </p>
            </div>
            <button className="group relative bg-gradient-to-r from-[#636B2F] to-[#D4DE95] text-[#3D4127] px-8 lg:px-12 py-4 lg:py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden whitespace-nowrap">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4DE95] to-[#BAC095] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center gap-3">
                Start Your Journey
                <PiArrowRight className="text-xl transition-transform group-hover:translate-x-2" />
              </span>
            </button>
          </div>
        </div>

        {/* Connection Arc */}
        <div className="mt-16 lg:mt-20 flex justify-center">
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-[#636B2F] to-transparent opacity-30 rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes float-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(15px, -20px) scale(1.2);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, 15px) scale(0.8);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(25px, 10px) scale(1.1);
          }
        }
        @keyframes stat-slide {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
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
        .animate-stat-slide {
          animation: stat-slide 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
