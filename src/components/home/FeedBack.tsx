import React, { useState, useEffect } from "react";
import {
  PiQuotes,
  PiStarFill,
  PiStudent,
  PiGraduationCap,
} from "react-icons/pi";

export default function FeedBack() {
  const [isPaused, setIsPaused] = useState(false);
  const testimonials = [
    {
      id: 1,
      text: "I've learned so much from this course! The trainers made everything easy to understand, and I was able to apply what I learned right away. I feel confident in my new skills and excited about the career opportunities ahead.",
      name: "Ahmed Hossain",
      role: "Welder",
      avatar: "/images/avatar1.jpg",
      rating: 5,
    },
    {
      id: 2,
      text: "The course exceeded my expectations. I appreciated how practical the training was, and the support from the instructors was amazing. I'm now prepared to take on new challenges in my field.",
      name: "Shamim Rahman",
      role: "Pipe Fitter",
      avatar: "/images/avatar2.jpg",
      rating: 5,
    },
    {
      id: 3,
      text: "I'm really happy I enrolled in this course. The lessons were clear, the resources were great, and I could study at my own pace. I now have the skills and certification to take my career to the next level.",
      name: "Rashed Ali",
      role: "Electrical",
      avatar: "/images/avatar3.jpg",
      rating: 5,
    },
    {
      id: 4,
      text: "The training was fantastic! It was very detailed and practical, and the certification helped me gain recognition in my industry. I'm already seeing the difference in my work and confidence.",
      name: "Ibrahim Chowdhury",
      role: "Mechanical",
      avatar: "/images/avatar4.jpg",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10% w-6 h-6 bg-[#636B2F] rounded-full opacity-10 animate-float-1"></div>
        <div className="absolute top-40 right-20% w-4 h-4 bg-[#D4DE95] rounded-full opacity-15 animate-float-2"></div>
        <div className="absolute bottom-40 left-30% w-8 h-8 bg-[#BAC095] rounded-full opacity-10 animate-float-3"></div>

        {/* Connection Lines */}
        <div className="absolute top-1/3 left-1/4 w-0.5 h-24 bg-gradient-to-b from-[#636B2F] to-transparent opacity-20 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-0.5 h-32 bg-gradient-to-t from-[#D4DE95] to-transparent opacity-15 -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left Side - Auto Moving Testimonials */}
          <div className="flex-1 relative">
            {/* Moving Carousel Container */}
            <div
              className="relative h-[600px] overflow-hidden rounded-3xl"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Testimonial Cards Stack */}
              <div
                className={`absolute inset-0 ${
                  isPaused ? "" : "animate-carousel"
                }`}
                style={isPaused ? { animationPlayState: "paused" } : {}}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="absolute inset-0 transition-all duration-1000"
                    style={{
                      transform: `translateY(${index * 100}%)`,
                    }}
                  >
                    <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 h-full">
                      {/* Quote Icon */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#636B2F] to-[#D4DE95] rounded-2xl flex items-center justify-center shadow-lg">
                        <PiQuotes className="text-white text-xl" />
                      </div>

                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-6 justify-end">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <PiStarFill
                            key={i}
                            className="text-yellow-400 fill-yellow-400 text-lg"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                        "{testimonial.text}"
                      </p>

                      {/* Student Info */}
                      <div className="flex items-center gap-4">
                        {/* Avatar Placeholder */}
                        <div className="w-16 h-16 bg-gradient-to-br from-[#636B2F] to-[#D4DE95] rounded-full flex items-center justify-center shadow-lg">
                          <PiStudent className="text-white text-2xl" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-[#636B2F] font-semibold">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-[#BAC095] rounded-lg rotate-45 opacity-40"></div>
                      <div className="absolute top-4 right-4 w-4 h-4 bg-[#D4DE95] rounded-full opacity-20"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>

              {/* Pause Indicator */}
              {isPaused && (
                <div className="absolute top-4 right-4 bg-[#636B2F] text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                  Paused
                </div>
              )}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className="w-3 h-3 bg-[#636B2F] rounded-full opacity-30 animate-pulse"
                  style={{ animationDelay: `${index * 0.5}s` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 relative">
            {/* Vertical Decoration */}
            <div className="absolute -left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#636B2F] to-[#D4DE95] opacity-30"></div>

            <div className="space-y-8">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-3 border border-[#636B2F] rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-[#636B2F] rounded-full animate-pulse"></div>
                <span className="text-[#636B2F] font-bold tracking-widest text-sm">
                  OUR FEEDBACKS
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
                Our Student
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#636B2F] to-[#D4DE95]">
                  Says
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                Our students consistently praise our top-quality training
                programs—discover their valuable feedback on the skills and
                performance of the workers we've trained.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-[#636B2F]">4.9★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#636B2F]">250+</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#636B2F]">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#636B2F]">
                    2.5K+
                  </div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>

              {/* Feature Icons */}
              <div className="flex gap-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#636B2F] to-[#D4DE95] rounded-xl flex items-center justify-center">
                    <PiGraduationCap className="text-white text-xl" />
                  </div>
                  <span className="text-gray-700 font-semibold">Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#636B2F] to-[#D4DE95] rounded-xl flex items-center justify-center">
                    <PiStudent className="text-white text-xl" />
                  </div>
                  <span className="text-gray-700 font-semibold">Practical</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-2 border-[#D4DE95] rounded-2xl rotate-12 opacity-30"></div>
            <div className="absolute top-8 -right-4 w-8 h-8 bg-[#BAC095] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(10px, -15px) scale(1.1);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-12px, 10px) scale(0.9);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(15px, -8px) scale(1.2);
          }
        }
        @keyframes carousel {
          0% {
            transform: translateY(0);
          }
          20% {
            transform: translateY(-100%);
          }
          40% {
            transform: translateY(-200%);
          }
          60% {
            transform: translateY(-300%);
          }
          80% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(0);
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
        .animate-carousel {
          animation: carousel 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
