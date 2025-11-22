"use client";
import React, { useState } from "react";
import Image from "next/image";

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export default function ViewPortfolio() {
  const portfolioImages: PortfolioItem[] = [
    {
      id: 1,
      src: "/images/portfolio/train1.jpeg",
      alt: "Welding Training Session",
      category: "Training",
    },
    {
      id: 2,
      src: "/images/portfolio/train2.jpeg",
      alt: "Practical Workshop",
      category: "Workshop",
    },
    {
      id: 3,
      src: "/images/portfolio/train3.jpg",
      alt: "Industry Equipment Training",
      category: "Equipment",
    },
    {
      id: 4,
      src: "/images/portfolio/train4.jpeg",
      alt: "Safety Training Program",
      category: "Safety",
    },
    {
      id: 5,
      src: "/images/portfolio/train5.jpg",
      alt: "Technical Skills Development",
      category: "Technical",
    },
    {
      id: 6,
      src: "/images/portfolio/train6.jpeg",
      alt: "Hands-on Practice",
      category: "Practical",
    },
    {
      id: 7,
      src: "/images/portfolio/train7.webp",
      alt: "Advanced Welding Techniques",
      category: "Advanced",
    },
    {
      id: 8,
      src: "/images/portfolio/train8.jpeg",
      alt: "Student Projects Showcase",
      category: "Projects",
    },
    {
      id: 9,
      src: "/images/portfolio/catification.jpg",
      alt: "Certification Program",
      category: "Certification",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(
    null
  );
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Training",
    "Workshop",
    "Equipment",
    "Safety",
    "Technical",
    "Practical",
    "Advanced",
    "Projects",
    "Certification",
  ];

  const filteredImages =
    filter === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === filter);

  const openModal = (image: PortfolioItem) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    if (!selectedImage) return;
    const currentIndex = portfolioImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const previousIndex =
      currentIndex === 0 ? portfolioImages.length - 1 : currentIndex - 1;
    setSelectedImage(portfolioImages[previousIndex]);
  };

  const goToNext = () => {
    if (!selectedImage) return;
    const currentIndex = portfolioImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const nextIndex =
      currentIndex === portfolioImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(portfolioImages[nextIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-[#D4DE95]/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#3D4127] mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-[#636B2F] max-w-2xl mx-auto">
            Showcasing our comprehensive training programs and state-of-the-art
            facilities
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === category
                  ? "bg-[#636B2F] text-white shadow-lg"
                  : "bg-white text-[#3D4127] hover:bg-[#D4DE95] hover:text-[#3D4127] shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] cursor-pointer"
              onClick={() => openModal(image)}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D4127]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {image.alt}
                    </h3>
                    <span className="inline-block bg-[#D4DE95] text-[#3D4127] px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-[#3D4127]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-6xl max-h-[90vh] mx-4">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-[#D4DE95] transition-colors duration-300 z-10"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-[80vh] w-full rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {selectedImage.alt}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-[#D4DE95] text-[#3D4127] px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                  <span className="text-white/80 text-sm">
                    {portfolioImages.findIndex(
                      (img) => img.id === selectedImage.id
                    ) + 1}{" "}
                    / {portfolioImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-[#BAC095] text-6xl mb-4">📷</div>
            <h3 className="text-2xl font-semibold text-[#3D4127] mb-2">
              No images found
            </h3>
            <p className="text-[#636B2F]">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
}
