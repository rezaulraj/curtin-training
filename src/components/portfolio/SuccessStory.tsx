import React from "react";

interface Country {
  name: string;
  flag: string;
  workers: string;
  successStories: string[];
  popularSectors: string[];
}

export default function SuccessStory() {
  const countries: Country[] = [
    {
      name: "Saudi Arabia",
      flag: "/flags/saudi-arabia.png",
      workers: "500+ Workers",
      successStories: [
        "Mohammad Rahman - Senior Welder at Aramco",
        "Abdul Karim - Steel Fabrication Supervisor",
        "Jamal Hossain - Pipeline Specialist",
      ],
      popularSectors: ["Oil & Gas", "Construction", "Shipbuilding"],
    },
    {
      name: "Qatar",
      flag: "/flags/qatar.jpg",
      workers: "300+ Workers",
      successStories: [
        "Shahid Islam - World Cup Stadium Project",
        "Rafiq Ahmed - Mechanical Supervisor",
        "Kamal Uddin - Electrical Team Lead",
      ],
      popularSectors: ["Infrastructure", "Stadiums", "HVAC"],
    },
    {
      name: "Malaysia",
      flag: "/flags/malaysia.jpg",
      workers: "450+ Workers",
      successStories: [
        "Anwar Hossain - Manufacturing Plant Manager",
        "Farid Ahmed - Quality Control Inspector",
        "Salam Miah - Industrial Trainer",
      ],
      popularSectors: ["Manufacturing", "Electronics", "Automotive"],
    },
    {
      name: "Singapore",
      flag: "/flags/singapore.avif",
      workers: "200+ Workers",
      successStories: [
        "Rahim Khan - Marine Engineer",
        "Sohel Rana - Precision Welder",
        "Bappi Islam - Shipyard Supervisor",
      ],
      popularSectors: ["Marine", "Precision Engineering", "Construction"],
    },
    {
      name: "Japan",
      flag: "/flags/japan.jpeg",
      workers: "350+ Workers",
      successStories: [
        "Tanim Ahmed - Automotive Welder",
        "Javed Iqbal - Robotics Technician",
        "Mizanur Rahman - Quality Assurance",
      ],
      popularSectors: ["Automotive", "Robotics", "Technology"],
    },
    {
      name: "Indonesia",
      flag: "/flags/indonesia.jpg",
      workers: "600+ Workers",
      successStories: [
        "Alamgir Hossain - Palm Oil Plant Manager",
        "Shamsul Haque - Mining Equipment Specialist",
        "Nur Islam - Construction Foreman",
      ],
      popularSectors: ["Mining", "Plantation", "Infrastructure"],
    },
    {
      name: "Turkey",
      flag: "/flags/turkey.png",
      workers: "400+ Workers",
      successStories: [
        "Habibullah - Textile Machinery Expert",
        "Mamun Or Rashid - Automotive Technician",
        "Sajjad Hossain - Construction Manager",
      ],
      popularSectors: ["Textile", "Automotive", "Construction"],
    },
    {
      name: "UAE",
      flag: "/flags/uae.png",
      workers: "250+ Workers",
      successStories: [
        "Khalid Hasan - Burj Khalifa Project",
        "Rashid Ahmed - Dubai Metro Team",
        "Osman Goni - Luxury Hotel Construction",
      ],
      popularSectors: ["Skyscrapers", "Infrastructure", "Tourism"],
    },
    {
      name: "Kuwait",
      flag: "/flags/kuwait.jpg",
      workers: "180+ Workers",
      successStories: [
        "Sadek Mohammad - Refinery Technician",
        "Azad Hossain - Petrochemical Specialist",
        "Bashar Ahmed - Maintenance Supervisor",
      ],
      popularSectors: ["Oil Refinery", "Petrochemical", "Maintenance"],
    },
    {
      name: "Oman",
      flag: "/flags/oman.png",
      workers: "220+ Workers",
      successStories: [
        "Nazmul Islam - Port Construction",
        "Shahjahan Ali - Airport Project",
        "Arif Hossain - Hotel Development",
      ],
      popularSectors: ["Ports", "Airports", "Tourism"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-[#D4DE95]/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#3D4127] mb-4">
            Success Stories
          </h2>
          <p className="text-xl lg:text-2xl text-[#636B2F] mb-6">
            Our Bangladeshi Students Shining Across the Globe
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4DE95] to-[#636B2F] mx-auto rounded-full"></div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-[#D4DE95]/20">
            <div className="text-3xl font-bold text-[#3D4127]">3000+</div>
            <div className="text-[#636B2F] font-semibold">Total Students</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-[#D4DE95]/20">
            <div className="text-3xl font-bold text-[#3D4127]">15+</div>
            <div className="text-[#636B2F] font-semibold">Countries</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-[#D4DE95]/20">
            <div className="text-3xl font-bold text-[#3D4127]">98%</div>
            <div className="text-[#636B2F] font-semibold">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-[#D4DE95]/20">
            <div className="text-3xl font-bold text-[#3D4127]">19</div>
            <div className="text-[#636B2F] font-semibold">Years Experience</div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {countries.map((country) => (
            <div
              key={country.name}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden border border-[#D4DE95]/30"
            >
              {/* Country Header */}
              <div className="bg-gradient-to-r from-[#636B2F] to-[#3D4127] p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{country.name}</h3>
                  {/* Flag Placeholder */}
                  <div className="w-12 h-8 bg-gradient-to-r from-[#D4DE95] to-[#BAC095] rounded flex items-center justify-center text-xs font-bold text-[#3D4127]">
                    FLAG
                  </div>
                </div>
                <div className="text-[#D4DE95] font-semibold text-sm">
                  {country.workers}
                </div>
              </div>

              {/* Success Stories */}
              <div className="p-6">
                <h4 className="text-[#3D4127] font-semibold mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 text-[#636B2F] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Success Stories
                </h4>
                <ul className="space-y-3 mb-6">
                  {country.successStories.map((story, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#D4DE95] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#3D4127] text-sm leading-relaxed">
                        {story}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Popular Sectors */}
                <div>
                  <h4 className="text-[#3D4127] font-semibold mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-[#636B2F] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                      />
                    </svg>
                    Popular Sectors
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {country.popularSectors.map((sector, idx) => (
                      <span
                        key={idx}
                        className="bg-[#D4DE95]/20 text-[#3D4127] px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-[#D4DE95]/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#636B2F] font-semibold">
                    Since 2006
                  </span>
                  <span className="text-[#BAC095]">★ ★ ★ ★ ★</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-[#D4DE95] to-[#BAC095] rounded-2xl p-8 text-center">
          <svg
            className="w-12 h-12 text-[#3D4127] mx-auto mb-4 opacity-50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          <p className="text-2xl text-[#3D4127] font-semibold italic mb-4">
            From the streets of Dhaka to the skyscrapers of Dubai, our students
            are building dreams worldwide.
          </p>
          <p className="text-[#636B2F] font-medium">
            - Curtin Technical Development Team
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-[#636B2F] hover:bg-[#3D4127] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
            Start Your Success Story Today
          </button>
        </div>
      </div>
    </div>
  );
}
