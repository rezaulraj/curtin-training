import React from "react";
import Image from "next/image";
import { BiPhone } from "react-icons/bi";

export default function Service() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 order-1 lg:order-2">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-xl lg:text-2xl font-bold font-serif text-[#636B2F] leading-tight">
              Our Services
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3D4127] leading-[55px]">
              Comprehensive Training for Industry-Ready Professionals
            </h3>
          </div>

          {/* Main Description */}
          <p className="text-lg text-[#3D4127] leading-relaxed">
            At Curtin Technical Development training Center, we provide
            industry-focused training programs designed to equip workers with
            the practical skills, safety awareness, and professionalism required
            to succeed in the shipbuilding and construction sectors.
          </p>

          {/* Features List */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#3D4127] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-[#3D4127] leading-relaxed">
                We provide necessary training to the Workers for the
                Shipbuilding Industry, construction industry including safety
                requirement, team building, workmanship, pre-departure briefing
                & up to the client expectation in order to be a competent person
                for the specific trades.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#3D4127] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-[#3D4127] leading-relaxed">
                Our training is including theory classes and practical hands on
                under supervision of experienced trainer.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#3D4127] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-[#3D4127] leading-relaxed">
                All level&apos;s welding training carried out as per welding
                procedure.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#3D4127] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-[#3D4127] leading-relaxed">
                All students resided in the safe and healthy environment hostel.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#3D4127] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-[#3D4127] leading-relaxed">
                We provide sufficient facilitates to the students.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-6">
            <button
              className="bg-[#636B2F] hover:bg-[#3D4127] text-white font-semibold py-4 px-8 rounded-lg 
                             transition-all duration-300 transform hover:scale-105 shadow-lg 
                             hover:shadow-xl text-lg cursor-pointer flex items-center space-x-2"
            >
              <BiPhone />
              <span>Call Now</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative order-1 lg:order-2">
          <div
            className="relative h-[600px] lg:h-[700px] w-full rounded-2xl overflow-hidden 
                         shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
          >
            <Image
              src="/images/service.avif"
              alt="Welding Training Services"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#D4DE95]/20 to-[#BAC095]/10 
                           mix-blend-multiply"
            ></div>
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute -top-4 -right-4 w-24 h-24 bg-[#D4DE95] rounded-full 
                         opacity-20 mix-blend-multiply"
          ></div>
          <div
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#BAC095] rounded-full 
                         opacity-20 mix-blend-multiply"
          ></div>
        </div>
      </div>
    </div>
  );
}
