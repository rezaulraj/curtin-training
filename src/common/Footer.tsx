"use client";
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaUser,
  FaCertificate,
  FaPortrait,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#3D4127] via-[#2D3120] to-[#1A1D12] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#D4DE95] rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-[#BAC095] rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-[#636B2F] rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 border-2 border-[#D4DE95] rounded-full"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#D4DE95] to-[#BAC095] bg-clip-text text-transparent">
                Curtin Technical Development Training Center
              </h3>
              <div className="inline-block bg-[#636B2F]/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#D4DE95]/20">
                <p className="text-[#BAC095] font-medium">
                  Trade License No: 10192914651234422
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Empowering individuals with industry-ready skills through
              comprehensive technical training programs. Building competent
              professionals for the global workforce since 2006.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="group bg-[#636B2F] hover:bg-[#D4DE95] p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <FaFacebookF className="w-5 h-5 group-hover:text-[#3D4127] transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="group bg-[#636B2F] hover:bg-[#D4DE95] p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <FaYoutube className="w-5 h-5 group-hover:text-[#3D4127] transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#D4DE95] flex items-center space-x-2">
              <FaPortrait className="w-5 h-5" />
              <span>Quick Menu Links</span>
            </h4>
            <ul className="space-y-3">
              {[
                { icon: FaHome, text: "Homepage", href: "#" },
                { icon: FaPortrait, text: "Portfolio", href: "#" },
                { icon: FaUser, text: "About Us", href: "#" },
                { icon: FaCertificate, text: "Certificate", href: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-[#D4DE95] transition-all duration-300 group"
                  >
                    <item.icon className="w-4 h-4 text-[#BAC095] group-hover:text-[#D4DE95] transition-colors duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#D4DE95] flex items-center space-x-2">
              <FaMapMarkerAlt className="w-5 h-5" />
              <span>Our Training Located</span>
            </h4>

            <div className="space-y-4">
              {/* Head Office */}
              <div className="space-y-3">
                <h5 className="font-semibold text-[#BAC095] text-sm uppercase tracking-wide">
                  Head Office
                </h5>
                <div className="flex items-start space-x-3 text-gray-300">
                  <FaHome className="w-4 h-4 text-[#D4DE95] mt-1 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    House #398, Shadhinata Sarani, North Badda, Dhaka-1212,
                    Bangladesh
                  </p>
                </div>
              </div>

              {/* Training Center */}
              <div className="space-y-2">
                <div className="flex items-start space-x-3 text-gray-300">
                  <FaMapMarkerAlt className="w-4 h-4 text-[#D4DE95] mt-1 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    House #398, Shadhinata Sarani, North Badda, Dhaka-1212
                  </p>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <FaEnvelope className="w-4 h-4 text-[#D4DE95] flex-shrink-0" />
                  <a
                    href="mailto:curtintraining@gmail.com"
                    className="text-sm hover:text-[#D4DE95] transition-colors duration-300"
                  >
                    curtintraining@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <FaPhone className="w-4 h-4 text-[#D4DE95] flex-shrink-0" />
                  <a
                    href="tel:+880 1788-541321"
                    className="text-sm hover:text-[#D4DE95] transition-colors duration-300"
                  >
                    +880 1788-541321
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#636B2F]/30 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-[#BAC095] text-sm">
                © {currentYear} Curtin Technical Development Training Center.
                All rights reserved.
              </p>
            </div>

            <div className="text-center">
              <p className="text-[#D4DE95] font-semibold text-sm bg-[#636B2F]/20 px-4 py-2 rounded-lg">
                Designed by Curtin Technical Development Team
              </p>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-xs">
                Trade License: 10192914651234422
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4DE95] via-[#636B2F] to-[#BAC095]"></div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 -left-4 w-8 h-8 bg-[#D4DE95] rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 -right-4 w-6 h-6 bg-[#BAC095] rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#636B2F] rounded-full opacity-20 animate-bounce"></div>
    </footer>
  );
}
