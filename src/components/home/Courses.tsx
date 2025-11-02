"use client"
import React from "react";
import {
  PiPhone,
  PiArrowRight,
  PiSparkle,
  PiLightning,
  PiShield,
  PiRocket,
  PiTrendUp,
  PiMedal,
  PiCertificate,
} from "react-icons/pi";
import Image from "next/image";

interface Course {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  button: string;
  link: string;
  icon: React.ReactNode;
}

export default function Courses() {
  const courseData: Course[] = [
    {
      id: 1,
      image: "/images/service1.avif",
      title: "Manual Metal Arc",
      subTitle:
        "Master electric current welding techniques for construction and fabrication industries with hands-on training.",
      button: "Explore Program",
      link: "/manual-metal-arc",
      icon: <PiLightning className="text-2xl" />,
    },
    {
      id: 2,
      image: "/images/service2.avif",
      title: "Tungsten Inert Gas",
      subTitle:
        "Precision welding using non-consumable tungsten electrode for high-quality detailed metalwork and artistry.",
      button: "Explore Program",
      link: "/tungsten-inert-gas",
      icon: <PiSparkle className="text-2xl" />,
    },
    {
      id: 3,
      image: "/images/service3.avif",
      title: "Metal Inert Gas",
      subTitle:
        "Fast, efficient wire-fed welding techniques for versatile metal joining across various industrial applications.",
      button: "Explore Program",
      link: "/metal-inert-gas",
      icon: <PiTrendUp className="text-2xl" />,
    },
    {
      id: 4,
      image: "/images/service4.avif",
      title: "Steel Fabrication",
      subTitle:
        "Comprehensive training in cutting, shaping, and assembling structural steel components for construction.",
      button: "Explore Program",
      link: "/steel-fabrication",
      icon: <PiShield className="text-2xl" />,
    },
    {
      id: 5,
      image: "/images/service5.avif",
      title: "Pipe Fabrication",
      subTitle:
        "Master precision pipe measurement, cutting, and installation for industrial and commercial systems.",
      button: "Explore Program",
      link: "/pipe-fabrication",
      icon: <PiRocket className="text-2xl" />,
    },
    {
      id: 6,
      image: "/images/service6.avif",
      title: "Industrial Machinery",
      subTitle:
        "Operate, maintain, and repair heavy industrial machinery with expert-led practical training sessions.",
      button: "Explore Program",
      link: "/industrial-machinery",
      icon: <PiMedal className="text-2xl" />,
    },
    {
      id: 7,
      image: "/images/service7.avif",
      title: "Blasting & Painting",
      subTitle:
        "Surface preparation through abrasive blasting and protective coatings for industrial environments.",
      button: "Explore Program",
      link: "/blasting-painting",
      icon: <PiCertificate className="text-2xl" />,
    },
    {
      id: 8,
      image: "/images/service8.avif",
      title: "Scaffolding",
      subTitle:
        "Safely assemble and dismantle temporary structures for construction and maintenance projects.",
      button: "Explore Program",
      link: "/scaffolding",
      icon: <PiSparkle className="text-2xl" />,
    },
    {
      id: 9,
      image: "/images/service9.avif",
      title: "Electrical Systems",
      subTitle:
        "Install, maintain, and troubleshoot wiring systems for residential and commercial applications.",
      button: "Explore Program",
      link: "/electrical-systems",
      icon: <PiLightning className="text-2xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0F172A] to-[#1E293B] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#636B2F] to-[#D4DE95] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-[#3D4127] to-[#BAC095] rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#D4DE95] to-[#636B2F] rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#636B2F 1px, transparent 1px), linear-gradient(90deg, #636B2F 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto">
            {/* Animated Header */}
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#636B2F]/20 to-[#D4DE95]/20 backdrop-blur-xl border border-[#636B2F]/30 rounded-2xl px-8 py-4 mb-12 animate-float">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#D4DE95] rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-[#BAC095] rounded-full animate-pulse delay-150"></div>
                <div className="w-2 h-2 bg-[#636B2F] rounded-full animate-pulse delay-300"></div>
              </div>
              <span className="text-[#D4DE95] font-bold tracking-widest text-sm">
                PREMIUM INDUSTRIAL TRAINING
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight mb-8 animate-glow">
              Forge Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4DE95] via-[#BAC095] to-[#636B2F] animate-gradient">
                Future Legacy
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              Transform your potential into expertise with our industry-leading
              training programs. Where craftsmanship meets innovation and
              careers are built to last.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative bg-gradient-to-r from-[#636B2F] to-[#D4DE95] text-[#1E293B] px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4DE95] to-[#BAC095] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center gap-3">
                  <PiPhone className="text-2xl" />
                  Begin Your Journey Today
                  <PiArrowRight className="text-xl transition-transform group-hover:translate-x-2" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid Section */}
      <div className="relative z-10 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseData.map((course, index) => (
              <div
                key={course.id}
                className="group relative animate-card-float"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#636B2F] via-[#D4DE95] to-[#BAC095] rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl rounded-3xl p-8 h-full border border-slate-700/50 group-hover:border-[#636B2F]/30 transition-all duration-500 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%">
                      <pattern
                        id={`pattern-${course.id}`}
                        x="0"
                        y="0"
                        width="50"
                        height="50"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="25" cy="25" r="1" fill="#D4DE95" />
                      </pattern>
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill={`url(#pattern-${course.id})`}
                      />
                    </svg>
                  </div>

                  {/* Icon with Gradient Background */}
                  <div className="relative z-10 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#636B2F] to-[#D4DE95] rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <div className="text-slate-900">{course.icon}</div>
                    </div>
                  </div>

                  {/* Course Image */}
                  <div className="relative z-10 mb-6 rounded-2xl overflow-hidden">
                    <div className="aspect-video relative bg-gradient-to-br from-[#636B2F] to-[#3D4127] rounded-xl overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

                      {/* Animated Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#636B2F]/20 to-[#D4DE95]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#D4DE95] group-hover:to-[#BAC095] transition-all duration-500">
                      {course.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300">
                      {course.subTitle}
                    </p>

                    <button className="group/btn w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#636B2F]/20 to-[#D4DE95]/20 text-[#D4DE95] py-4 px-6 rounded-xl font-semibold backdrop-blur-sm border border-[#636B2F]/30 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#636B2F] hover:to-[#D4DE95] hover:text-slate-900 hover:scale-105 hover:shadow-2xl">
                      <span className="relative">{course.button}</span>
                      <PiArrowRight className="text-xl transition-transform duration-500 group-hover/btn:translate-x-2" />
                    </button>
                  </div>

                  {/* Hover Effect Lines */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#636B2F] to-[#D4DE95] group-hover:w-full transition-all duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 z-20">
        <div className="animate-bounce bg-gradient-to-r from-[#636B2F] to-[#D4DE95] p-4 rounded-2xl shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300">
          <PiPhone className="text-2xl text-slate-900" />
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

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(212, 222, 149, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(212, 222, 149, 0.8),
              0 0 40px rgba(212, 222, 149, 0.6);
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

        @keyframes card-float {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes tilt {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(1deg) scale(1.02);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-card-float {
          animation: card-float 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          opacity: 0;
        }

        .animate-tilt {
          animation: tilt 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
