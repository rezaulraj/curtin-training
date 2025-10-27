"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaYoutube,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaHome,
  FaGraduationCap,
  FaImages,
  FaUserFriends,
  FaAddressBook,
  FaInfoCircle,
  FaWrench,
} from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState<number | null>(null);

  const navItems = [
    {
      lable: "Welding",
      icon: <FaWrench className="text-lg" />,
      subNav: [
        {
          lable: "Manual Metal Arc",
          path: "/manual-metal-arc",
          icon: <FaWrench className="text-sm" />,
        },
        {
          lable: "Tungsten Inert Gas",
          path: "/tungsten-inert-gas",
          icon: <FaWrench className="text-sm" />,
        },
        {
          lable: "Metal Inert Gas",
          path: "/metal-inert-gas",
          icon: <FaWrench className="text-sm" />,
        },
      ],
    },
    {
      lable: "More Course",
      icon: <FaGraduationCap className="text-lg" />,
      subNav: [
        {
          lable: "Pipe Fabrication",
          path: "/pipe-fabrication",
          icon: <FaWrench className="text-sm" />,
        },
        {
          lable: "Electrical",
          path: "/electrical",
          icon: <FaWrench className="text-sm" />,
        },
        {
          lable: "Mechanical / Machinery",
          path: "/mechanical-machinery",
          icon: <FaWrench className="text-sm" />,
        },
        {
          lable: "Steel Fabrication",
          path: "/steel-fabrication",
          icon: <FaWrench className="text-sm" />,
        },
        {
          lable: "Blasting & Painting",
          path: "/blasting-painting",
          icon: <FaWrench className="text-sm" />,
        },
        {
          lable: "Scaffolding",
          path: "/scaffolding",
          icon: <FaWrench className="text-sm" />,
        },
      ],
    },
    {
      lable: "Portfolio",
      path: "/portfolio",
      icon: <FaImages className="text-lg" />,
    },
    {
      lable: "About",
      path: "/about",
      icon: <FaInfoCircle className="text-lg" />,
    },
    {
      lable: "Our People",
      path: "/our-people",
      icon: <FaUserFriends className="text-lg" />,
    },
    {
      lable: "Contact",
      path: "/contact",
      icon: <FaAddressBook className="text-lg" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubNav = (index: number) => {
    setActiveSubNav(activeSubNav === index ? null : index);
  };

  return (
    <div className="fixed w-full top-0 z-50 transition-all duration-500 ease-in-out">
      {/* Top Header - Always Single Line & Fully Responsive */}
      <div
        className={`bg-[#3D4127] text-[#D4DE95] transition-all duration-500 ease-in-out ${
          isScrolled
            ? "h-0 opacity-0 overflow-hidden -translate-y-full"
            : "h-12 opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Contact Info - Always in Single Line */}
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm">
              {/* Phone */}
              <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105 flex-shrink-0">
                <FaPhone className="text-xs sm:text-sm flex-shrink-0" />
                <span className="whitespace-nowrap">+880 1778-631773</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105 flex-shrink-0">
                <FaEnvelope className="text-xs sm:text-sm flex-shrink-0" />
                <span className="whitespace-nowrap hidden xs:inline">
                  anikwelding@gmail.com
                </span>
                <span className="xs:hidden">Email</span>
              </div>

              {/* Location - Responsive Text */}
              <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105 flex-shrink-0">
                <FaMapMarkerAlt className="text-xs sm:text-sm flex-shrink-0" />
                <span className="whitespace-nowrap hidden lg:inline">
                  House #398, Shadhinata Sarani, North Badda, Dhaka
                </span>
                <span className="whitespace-nowrap hidden sm:inline lg:hidden">
                  North Badda, Dhaka
                </span>
                <span className="whitespace-nowrap sm:hidden">Dhaka</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="#"
                className="hover:text-[#BAC095] transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
              >
                <FaFacebook className="text-sm sm:text-base" />
              </a>
              <a
                href="#"
                className="hover:text-[#BAC095] transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
              >
                <FaYoutube className="text-sm sm:text-base" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`bg-[#636B2F] transition-all duration-500 ease-in-out ${
          isScrolled ? "shadow-xl" : "shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
            {/* Logo - Responsive */}
            <div className="flex-shrink-0">
              <div className="bg-[#D4DE95] rounded-lg flex items-center justify-center ">
                <div className="relative w-32 sm:w-36 h-14 md:w-40 md:h-16 lg:w-48 lg:h-20">
                  <Image
                    src="/images/logo.png"
                    alt="carten training"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 192px"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Enhanced with Icons */}
            <div className="hidden xl:block">
              <div className="ml-4 flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {item.subNav ? (
                      <button
                        className="text-[#D4DE95] hover:text-[#BAC095] px-3 py-3 rounded-lg text-lg font-semibold uppercase tracking-wide transition-all duration-300 flex items-center gap-2 group-hover:bg-[#3D4127] group-hover:scale-105"
                        onClick={() => toggleSubNav(index)}
                      >
                        {item.icon}
                        {item.lable}
                        <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                    ) : (
                      <a
                        href={item.path}
                        className="text-[#D4DE95] hover:text-[#BAC095] px-3 py-3 rounded-lg text-lg font-semibold uppercase tracking-wide transition-all duration-300 flex items-center gap-2 hover:bg-[#3D4127] hover:scale-105"
                      >
                        {item.icon}
                        {item.lable}
                      </a>
                    )}

                    {/* Desktop Dropdown */}
                    {item.subNav && (
                      <div className="absolute left-0 mt-1 w-64 rounded-xl shadow-2xl bg-[#3D4127] border border-[#BAC095] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div className="py-2">
                          {item.subNav.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.path}
                              className="block px-4 py-3 text-base text-[#D4DE95] hover:bg-[#636B2F] hover:text-[#BAC095] transition-all duration-200 flex items-center gap-3 group/item hover:pl-6"
                            >
                              {subItem.icon}
                              <span className="font-medium">
                                {subItem.lable}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet Navigation - Medium screens */}
            <div className="hidden lg:block xl:hidden">
              <div className="ml-4 flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {item.subNav ? (
                      <button className="text-[#D4DE95] hover:text-[#BAC095] px-3 py-3 rounded-lg text-base font-semibold uppercase tracking-wide transition-all duration-300 flex items-center gap-2 group-hover:bg-[#3D4127] group-hover:scale-105">
                        {item.icon}
                        <span className="hidden sm:block">{item.lable}</span>
                        <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                    ) : (
                      <a
                        href={item.path}
                        className="text-[#D4DE95] hover:text-[#BAC095] px-3 py-3 rounded-lg text-base font-semibold uppercase tracking-wide transition-all duration-300 flex items-center gap-2 hover:bg-[#3D4127] hover:scale-105"
                      >
                        {item.icon}
                        <span className="hidden sm:block">{item.lable}</span>
                      </a>
                    )}

                    {/* Tablet Dropdown */}
                    {item.subNav && (
                      <div className="absolute left-0 mt-1 w-56 rounded-xl shadow-2xl bg-[#3D4127] border border-[#BAC095] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="py-2">
                          {item.subNav.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.path}
                              className="block px-4 py-2 text-sm text-[#D4DE95] hover:bg-[#636B2F] hover:text-[#BAC095] transition-all duration-200 flex items-center gap-2"
                            >
                              {subItem.icon}
                              {subItem.lable}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#D4DE95] hover:text-[#BAC095] p-3 rounded-lg bg-[#3D4127] transition-all duration-300 transform hover:scale-110"
              >
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
              isMobileMenuOpen
                ? "max-h-[800px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-2 pt-2 pb-4 space-y-2 bg-[#3D4127] rounded-xl mt-2 mb-4 shadow-2xl">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#636B2F] last:border-b-0"
                >
                  {item.subNav ? (
                    <div>
                      <button
                        onClick={() => toggleSubNav(index)}
                        className="flex justify-between items-center w-full text-left text-[#D4DE95] hover:text-[#BAC095] px-4 py-4 rounded-lg text-lg font-semibold uppercase tracking-wide transition-all duration-300 bg-[#3D4127] hover:bg-[#636B2F]"
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          {item.lable}
                        </div>
                        <FaChevronDown
                          className={`text-xs transition-transform duration-300 ${
                            activeSubNav === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown */}
                      <div
                        className={`ml-4 transition-all duration-500 ease-in-out ${
                          activeSubNav === index
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        {item.subNav.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.path}
                            className="flex items-center gap-3 px-4 py-3 text-base text-[#D4DE95] hover:text-[#BAC095] rounded-lg transition-all duration-300 bg-[#3D4127] hover:bg-[#636B2F] hover:pl-6 m-1"
                          >
                            {subItem.icon}
                            {subItem.lable}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.path}
                      className="flex items-center gap-3 text-[#D4DE95] hover:text-[#BAC095] px-4 py-4 rounded-lg text-lg font-semibold uppercase tracking-wide transition-all duration-300 bg-[#3D4127] hover:bg-[#636B2F]"
                    >
                      {item.icon}
                      {item.lable}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
