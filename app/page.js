"use client"
import HeroSection from "@/components/HeroSection"
import AboutHome from "@/components/AboutHome"
import ServiceSection from "@/components/ServiceSection"
import QuoteSection from "@/components/Quotation"
import TestimonialSection from "@/components/Testimonial"
import ActionBoxSection from "@/components/ActionBox"
import BlogSection from "@/components/BlogSection"

export default function page() {
  return (
    <div className="">
      <HeroSection />
      <AboutHome />
      <ServiceSection />
      <QuoteSection />
      <TestimonialSection />
      <ActionBoxSection />
      <BlogSection />
      <div className="animation-section">
        <div className="animation-truck">
          <img
            src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621dbe2c84d5870bfcca78a1_01.svg"
            loading="lazy"
            width="120"
            alt=""
            className="animation-truck-image-left"
          />
          <img
            src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/62207283e85d0a3ded8b3d3c_05.svg"
            loading="lazy"
            width="200"
            alt=""
            className="animation-truck-image-right"
          />
          <div className="road-line"></div>
        </div>
      </div>
    </div>
  );
}
