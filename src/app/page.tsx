"use client";
import AboutUs from "@/components/home/AboutUs";
import Courses from "@/components/home/Courses";
import FeedBack from "@/components/home/FeedBack";
import HeroHome from "@/components/home/HeroHome";
import Service from "@/components/home/Service";
import Showcase from "@/components/home/Showcase";
import Trast from "@/components/home/Trast";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <Service />
      <AboutUs />
      <Courses />
      <Trast />
      <WhyUs />
      <Showcase />
      <FeedBack />
    </main>
  );
}
