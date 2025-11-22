import React from "react";
import {
  FaUserTie,
  FaGraduationCap,
  FaGlobeAmericas,
  FaAward,
  FaHandshake,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaHeart,
  FaDatabase,
  FaFileAlt,
  FaPlane,
  FaComments,
} from "react-icons/fa";

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-[#D4DE95] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#D4DE95]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#D4DE95]/30 mb-6">
            <FaUserTie className="w-4 h-4 text-[#636B2F]" />
            <span className="text-[#636B2F] font-semibold text-sm uppercase tracking-wider">
              About Our Institution
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#3D4127] mb-6">
            Who We Are
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#D4DE95] via-[#636B2F] to-[#BAC095] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Main Description */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#D4DE95]/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[#D4DE95] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserTie className="w-6 h-6 text-[#3D4127]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3D4127] mb-3">
                    Our Identity
                  </h3>
                  <p className="text-[#3D4127] leading-relaxed">
                    Anik Welding Technical Training Center is a
                    government-registered technical institution and overseas
                    employment agency based in Bangladesh. With more than two
                    decades of experience, we have earned a strong reputation
                    for developing highly capable workers and placing them in
                    reputable positions across international industries.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Strength */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#D4DE95]/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[#636B2F] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3D4127] mb-3">
                    Our Core Strength
                  </h3>
                  <p className="text-[#3D4127] leading-relaxed">
                    Our core strength lies in delivering industry-relevant
                    training that combines in-depth theoretical knowledge with
                    practical, hands-on experience. From entry-level instruction
                    to specialized trade skills like welding, fabrication, and
                    construction techniques, our training programs are designed
                    to meet the specific requirements of overseas employers.
                  </p>
                </div>
              </div>
            </div>

            {/* Management Team */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#D4DE95]/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#BAC095] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUsers className="w-6 h-6 text-[#3D4127]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3D4127] mb-3">
                    Expert Management
                  </h3>
                  <p className="text-[#3D4127] leading-relaxed">
                    The center is managed and operated by seasoned professionals
                    who bring extensive expertise in manpower recruitment, skill
                    development, and international labor compliance. Each member
                    of our team is carefully selected, professionally trained,
                    and regularly updated to maintain peak performance in their
                    respective roles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features & Global Reach */}
          <div className="space-y-8">
            {/* Learning Ecosystem */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#D4DE95]/20">
              <h3 className="text-2xl font-bold text-[#3D4127] mb-6 flex items-center">
                <FaAward className="w-6 h-6 text-[#636B2F] mr-3" />
                Complete Learning Ecosystem
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    icon: FaGraduationCap,
                    text: "Certified welding training programs aligned with international welding procedures",
                  },
                  {
                    icon: FaShieldAlt,
                    text: "Expert-led instruction focused on workplace safety, team collaboration, and craftsmanship",
                  },
                  {
                    icon: FaUsers,
                    text: "Safe, healthy, and well-maintained hostel facilities in a disciplined environment",
                  },
                  {
                    icon: FaChartLine,
                    text: "Structured routine to build professionalism and readiness for global work conditions",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-8 h-8 bg-[#D4DE95] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#636B2F] transition-colors duration-300">
                      <item.icon className="w-4 h-4 text-[#3D4127] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-[#3D4127] leading-relaxed group-hover:text-[#636B2F] transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Deployment */}
            <div className="bg-gradient-to-br from-[#636B2F] to-[#3D4127] rounded-2xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FaGlobeAmericas className="w-6 h-6 text-[#D4DE95] mr-3" />
                Global Deployment
              </h3>
              <p className="mb-4 leading-relaxed">
                Currently, we deploy Bangladeshi workers to various
                international markets including
                <span className="text-[#D4DE95] font-semibold">
                  {" "}
                  Singapore, Qatar, the UAE, Baku Shipyard (Azerbaijan)
                </span>
                , and other regions in sectors such as:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Shipbuilding",
                  "Oil & Gas",
                  "Power Plants",
                  "Large-scale Construction",
                ].map((sector, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#D4DE95] rounded-full"></div>
                    <span className="text-sm">{sector}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[#D4DE95] font-semibold">
                Our goal is to consistently match the right talent with the
                right opportunity.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="bg-white rounded-3xl shadow-2xl border border-[#D4DE95]/20 p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3D4127] mb-4">
              Our Vision & Strategic Commitment
            </h2>
            <div className="w-24 h-1 bg-[#636B2F] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4DE95] to-[#BAC095] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGlobeAmericas className="w-8 h-8 text-[#3D4127]" />
              </div>
              <h3 className="text-2xl font-bold text-[#3D4127] mb-4">
                Our Vision
              </h3>
              <p className="text-[#3D4127] leading-relaxed">
                To become the most credible and reliable Bangladeshi human
                resource provider globally by offering consistent, high-quality
                training and overseas placement services that benefit both
                employers and job seekers.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#636B2F] to-[#3D4127] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaChartLine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#3D4127] mb-4">
                Our Mission
              </h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#D4DE95] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#3D4127] text-sm">
                    Equip Bangladeshi workers with world-class technical skills
                    and ethical work habits for international roles.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#D4DE95] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#3D4127] text-sm">
                    Serve international clients with a dependable workforce that
                    aligns with their expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#BAC095] to-[#D4DE95] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="w-8 h-8 text-[#3D4127]" />
              </div>
              <h3 className="text-2xl font-bold text-[#3D4127] mb-4">
                Our Values
              </h3>
              <div className="space-y-3 text-left">
                {[
                  "Client-Centric Approach: Building trust-based relationships",
                  "Professional Excellence: High standards in all services",
                  "Integrity & Responsibility: Honest and accountable operations",
                  "Respect for People: Dignity and value for everyone",
                ].map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <FaHandshake className="w-4 h-4 text-[#636B2F] flex-shrink-0" />
                    <span className="text-[#3D4127] text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Approach */}
        <div className="bg-gradient-to-br from-[#3D4127] to-[#636B2F] rounded-3xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#D4DE95]">
            Our Strategic Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FaDatabase,
                text: "Maintaining comprehensive candidate database",
              },
              {
                icon: FaFileAlt,
                text: "Conducting rigorous tests and evaluations",
              },
              {
                icon: FaShieldAlt,
                text: "Managing complete documentation & visa processing",
              },
              {
                icon: FaPlane,
                text: "Ensuring timely deployment to meet client schedules",
              },
              {
                icon: FaUsers,
                text: "Offering pre-departure briefings for cultural adjustment",
              },
              {
                icon: FaComments,
                text: "Collecting feedback for continuous improvement",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <item.icon className="w-8 h-8 text-[#D4DE95] mx-auto mb-4" />
                <p className="text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="text-center mt-12 pt-8 border-t border-[#D4DE95]/30">
            <p className="text-xl text-[#D4DE95] font-semibold italic">
              `We believe in working smart—with dedication, discipline, and
              efficiency—to build a future where Bangladeshi workers are known
              worldwide for their skills, professionalism, and dependability.`
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
