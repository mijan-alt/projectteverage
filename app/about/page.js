import React from 'react'

import AboutSection from "@/components/About";
import WhyChooseSection from "@/components/WhyChoose";
import TeamSection from "@/components/TeamSection";
import ActionBoxSection from "@/components/ActionBox";

export default function page() {
  return (
    <div className="">
      <AboutSection />
      <WhyChooseSection />
      <TeamSection />
      <ActionBoxSection />
    </div>
  );
}
