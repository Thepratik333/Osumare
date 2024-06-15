import React from "react";
import ExpertiseCard from "../cards/ExpertiesCard";
import icon4 from "../../assets/icon (4).png";
import icon5 from "../../assets/icon (5).png";
import icon6 from "../../assets/icon (6).png";
import icon7 from "../../assets/icon (7).png";

function FrameComponent4() {
  return (
    <section className="mt-16 mb-4 px-4 md:px-20">
      <h1 className="text-center font-bold mt-8 mb-8 text-3xl md:text-4xl lg:text-5xl">
        Our Expertise in Action
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <ExpertiseCard
          icon={icon4}
          title="Effective CTAs"
          description="See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency."
        />
        <ExpertiseCard
          icon={icon5}
          title="Conversion-Optimized Landing Pages"
          description="Explore a case study where our landing page optimization increased property lead conversion rates by 30%"
        />
        <ExpertiseCard
          icon={icon6}
          title="Trust Building with Social Proof"
          description="Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project"
        />
        <ExpertiseCard
          icon={icon7}
          title="Mobile-First Success:"
          description="Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency."
        />
      </div>
    </section>
  );
}

export default FrameComponent4;
