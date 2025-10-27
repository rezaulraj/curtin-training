import React, { useRef, useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { GiPowerLightning, GiTeacher } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";

const HeroHome: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleCanPlayThrough = () => {
      setIsVideoLoaded(true);
      setShowContent(true);

      // Force play the video
      if (video) {
        video.play().catch((error) => {
          console.log("Video play error:", error);
        });
      }
    };

    const handleLoadedData = () => {
      // Video metadata is loaded, we can show it
      setIsVideoLoaded(true);
      setShowContent(true);
    };

    const handleEnded = () => {
      if (video) {
        video.currentTime = video.duration;
      }
    };

    const handleError = () => {
      console.error("Video loading error");
      setVideoError(true);
      setIsVideoLoaded(true);
      setShowContent(true);
    };

    if (video) {
      // Preload the video more aggressively
      video.preload = "auto";
      video.load(); // Force load the video

      video.addEventListener("canplaythrough", handleCanPlayThrough);
      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("ended", handleEnded);
      video.addEventListener("error", handleError);

      // Try to play immediately
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log("Autoplay failed, showing video anyway:", error);
          setIsVideoLoaded(true);
          setShowContent(true);
        }
      };

      playVideo();

      return () => {
        video.removeEventListener("canplaythrough", handleCanPlayThrough);
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("ended", handleEnded);
        video.removeEventListener("error", handleError);
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden py-20">
      {/* Background Video - Always show but control visibility */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          muted
          playsInline
          preload="auto"
          loop={false}
          poster="/videos/poster.jpg" // Optional: Add a poster frame
        >
          <source src="/videos/herovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback background if video fails to load */}
        {videoError && (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#3D4127] via-[#636B2F] to-[#3D4127]" />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D4127]/50 via-[#636B2F]/50 to-[#3D4127]/50" />

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4DE95' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Loading Spinner - Only show briefly */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#3D4127] z-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#D4DE95] mx-auto mb-4" />
            <p className="text-[#D4DE95] text-lg">Loading Video...</p>
          </div>
        </div>
      )}

      {/* Main Content - Show immediately with video */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto w-full mt-20">
          {/* Main Heading */}
          <div
            className={`transform transition-all duration-700 ease-out ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-90"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl  font-bold text-white mb-4 lg:mb-6 leading-tight tracking-tight">
              <span className="block text-[#D4DE95] drop-shadow-2xl bg-gradient-to-r from-[#D4DE95] to-[#BAC095] bg-clip-text text-transparent">
                Bangladesh’s Leading
              </span>
              <span className="block text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mt-2 lg:mt-4 opacity-90">
                Skills Training Center
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transform transition-all duration-700 delay-200 ease-out ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-90"
            }`}
          >
            <p className="text-xl sm:text-2xl text-white mb-8 lg:mb-12 font-light max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Our programs are designed to build high-demand skills that open
              doors to new opportunities and higher income.
            </p>
          </div>

          {/* Features Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 lg:mb-12 max-w-5xl mx-auto transform transition-all duration-700 delay-400 ease-out ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-90"
            }`}
          >
            {[
              {
                icon: <GiPowerLightning />,
                title: "Hands-On Training",
                description: "Practical sessions with modern equipment",
              },
              {
                icon: <GrCertificate />,
                title: "Certified Courses",
                description: "Industry recognized certifications",
              },
              {
                icon: <GiTeacher />,
                title: "Expert Instructors",
                description: "Learn from experienced professionals",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#3D4127]/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#D4DE95]/20 hover:border-[#D4DE95]/40 transition-all duration-300 hover:scale-105 group cursor-pointer inline-block"
              >
                <div className="flex items-center justify-center gap-5">
                  <div className="text-[#D4DE95] text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#BAC095] text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center transform transition-all duration-700 delay-600 ease-out ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-90"
            }`}
          >
            <button
              className="bg-[#636B2F] hover:bg-[#D4DE95] text-white hover:text-[#3D4127] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-[#3D4127] min-w-[160px] flex items-center gap-4 cursor-pointer"
              onClick={() => console.log("Call Now")}
            >
              Call Now
              <FaSquarePhoneFlip />
            </button>
            <button
              className="bg-transparent hover:bg-[#3D4127] text-[#D4DE95] border-2 border-[#D4DE95] hover:border-[#BAC095] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 min-w-[160px] flex items-center gap-4 cursor-pointer"
              onClick={() => console.log("Contact Us clicked")}
            >
              Contact Us
              <FaEnvelope />
            </button>
          </div>

          {/* Scroll Indicator */}
          {/* <div
            className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-800 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="animate-bounce">
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#D4DE95] rounded-full flex justify-center">
                <div className="w-1 h-2 sm:h-3 bg-[#D4DE95] rounded-full mt-1 sm:mt-2"></div>
              </div>
              <p className="text-[#BAC095] text-xs mt-2 text-center hidden sm:block">
                Scroll Down
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-[#3D4127] to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroHome;
