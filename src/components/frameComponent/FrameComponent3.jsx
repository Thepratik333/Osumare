import React from "react";
import house from "../../assets/house.png";
import icon from "../../assets/icon.png";
import icon1 from "../../assets/icon (1).png";
import icon2 from "../../assets/icon (2).png";
import icon3 from "../../assets/icon (3).png";
import DrivingActionCard from "../cards/DrivingActionCard";

function FrameComponent3({ className }) {
  return (
    <section className={`flex flex-col ${className}`}>
      <div className="text-center">
        <h1 className="font-bold text-3xl mt-10 mb-4 sm:text-4xl">
          Driving Property Inquiries to Conversions
        </h1>
        <p className="text-lg pb-10">
          Streamlined Strategies for Real Estate Success
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <img src={house} alt="House" className="w-full lg:w-2/5 mb-6 lg:mb-0" />
        <div className="w-full lg:w-3/5 mx-4 lg:mx-7">
          <h2 className="font-bold text-xl text-center sm:text-2xl lg:text-3xl my-4 lg:my-6">
            Optimized Path to Property Purchase
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8">
            In the dynamic realm of real estate, the journey from a property
            inquiry to a successful conversion demands a well-crafted approach.
            At Osumare, we specialize in guiding potential buyers through this
            journey seamlessly, maximizing inquiries-turned-conversions with
            expert strategies.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition duration-300 ease-in-out">
            Get started
          </button>
        </div>
      </div>

      <div className="text-center mt-12 mb-8">
        <h1 className="font-bold text-3xl sm:text-4xl">
          Driving Property Inquiries to Conversions
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <DrivingActionCard
          icon={icon}
          title="Call-to-Action Optimization"
          description="Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates."
        />
        <DrivingActionCard
          icon={icon1}
          title="Landing Page Efficiency"
          description="Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission."
        />
        <DrivingActionCard
          icon={icon2}
          title="Social Proof Utilization"
          description="Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action."
        />
        <DrivingActionCard
          icon={icon3}
          title="Mobile-Friendly Experience"
          description="With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers."
        />
      </div>
    </section>
  );
}

export default FrameComponent3;
