"use client";
import AboutUs from "@/components/home/AboutUs";
import HeroHome from "@/components/home/HeroHome";
import Service from "@/components/home/Service";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <Service />
      <AboutUs />
    </main>
  );
}
