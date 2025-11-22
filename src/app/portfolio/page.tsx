import HeroPortfolio from "@/components/portfolio/HeroPortfolio";
import SuccessStory from "@/components/portfolio/SuccessStory";
import ViewPortfolio from "@/components/portfolio/ViewProtfolio";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroPortfolio />
      <ViewPortfolio />
      <SuccessStory />
    </div>
  );
}
