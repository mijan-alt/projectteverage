import Image from "next/image";
import Header from "@/components/header";
import { Nav } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import Tailbitreview from "@/components/Tailbitreview";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Service from "@/components/Service";
import Features from "@/components/feautures";
import HomeMainSection from "@/components/Main";
import AboutSection from "@/components/About";
import WhyChooseSection from "@/components/WhyChoose";
import TeamSection from "@/components/TeamSection";
import ActionBoxSection from "@/components/ActionBox";

export default function Home() {
  return (
    <div className="">
      <AboutSection />
      <WhyChooseSection />
      <TeamSection />
      <ActionBoxSection />
    </div>
  );
}
