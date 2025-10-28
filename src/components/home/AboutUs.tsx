import React from "react";
import Image from "next/image";

export default function AboutUs() {
  const courses = [
    "Manual Metal Arc",
    "Tungsten Inert Gas",
    "Metal Inert Gas",
    "Pipe Fabrication /Pipe Fitter",
    "Steel Fabrication",
    "Mechanical / Machinery",
    "Electrical",
    "Scaffolding",
    "Blasting & Painting (Basic Course)",
    "General Works",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side - Image */}
        <div className="relative order-1">
          <div
            className="relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden 
                         shadow-2xl transform hover:scale-[1.02] transition-all duration-500"
          >
            <Image
              src="/images/aboutus.avif"
              alt="About Anik Welding Technical Training Center"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#D4DE95]/10 via-[#BAC095]/5 to-[#636B2F]/15 
                           mix-blend-multiply"
            ></div>
          </div>

          {/* Experience Badge */}
          <div
            className="absolute -top-4 -left-4 bg-[#636B2F] text-white px-6 py-3 rounded-lg 
                         shadow-xl transform rotate-[-5deg]"
          >
            <div className="text-center">
              <div className="text-2xl font-bold">19</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#D4DE95] rounded-full 
                         opacity-20 mix-blend-multiply"
          ></div>
          <div
            className="absolute top-1/2 -left-8 w-20 h-20 bg-[#BAC095] rounded-full 
                         opacity-15 mix-blend-multiply"
          ></div>
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-8 order-2">
          {/* Heading Section */}
          <div className="space-y-4">
            <h2 className="text-xl lg:text-2xl font-bold font-serif text-[#636B2F] leading-tight">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3D4127] leading-[55px]">
              We Are Skills Training Industry with 19 Years Experience
            </h3>
            <div className="inline-block bg-[#D4DE95]/20 px-4 py-2 rounded-lg">
              <p className="text-[#3D4127] font-medium">
                Trade License No: 20191913651000706
              </p>
            </div>
          </div>

          {/* Main Description */}
          <div className="space-y-6">
            <p className="text-lg text-[#3D4127] leading-relaxed">
              Our institute, located in the heart of Dhaka, has been dedicated
              to developing skilled professionals since 2006. We go beyond
              traditional classroom-based education by offering practical,
              hands-on training that reflects real-world demands. Our mission is
              to empower individuals with the knowledge and experience they need
              to succeed in their careers.
            </p>

            {/* Inspirational Quote */}
            <div
              className="relative bg-gradient-to-r from-[#D4DE95]/10 to-[#BAC095]/10 
                          border-l-4 border-[#636B2F] p-6 rounded-r-lg"
            >
              <p className="text-xl italic text-[#3D4127] leading-relaxed">
                &quot;One skill, one right decision, and one training—sometimes
                that&apos;s all it takes to transform your entire life.&quot;
              </p>
              <div className="absolute -bottom-2 -right-2 text-6xl text-[#D4DE95] opacity-30">
                ”
              </div>
            </div>
          </div>

          {/* Courses Section */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-[#636B2F]">
              Check Out Our Top Courses
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 group hover:transform hover:translate-x-2 
                           transition-all duration-300"
                >
                  <div
                    className="w-2 h-2 bg-[#D4DE95] rounded-full group-hover:bg-[#636B2F] 
                               transition-colors duration-300"
                  ></div>
                  <span
                    className="text-[#3D4127] group-hover:text-[#636B2F] 
                                 transition-colors duration-300"
                  >
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-6">
            <button
              className="bg-gradient-to-r from-[#636B2F] to-[#3D4127] hover:from-[#3D4127] 
                             hover:to-[#636B2F] text-white font-semibold py-4 px-8 rounded-lg 
                             transition-all duration-300 transform hover:scale-105 shadow-lg 
                             hover:shadow-xl text-lg flex items-center space-x-2"
            >
              <span>Call Now</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
