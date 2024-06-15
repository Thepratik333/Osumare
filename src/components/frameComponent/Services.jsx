import React from "react";
import ServiceCard from "../cards/ServiceCard";
import { MdOutlineBarChart, MdOutlineVideoLabel } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaArrowPointer, FaBookBookmark } from "react-icons/fa6";
import { GiBalloons } from "react-icons/gi";

function Services() {
  return (
    <section className="flex flex-col mt-36 items-center justify-center py-6 px-4 max-w-full text-center text-4x ">
      <div className="flex-1 bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start py-24 px-20 max-w-full">
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <b className="text-3xl leading-tight">Our Service Offerings</b>
            <div className="text-lg text-darkslategray-200">
              Strategies that Drive Property Market Excellence
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[510px] text-lg">
            <ServiceCard
              icon={<MdOutlineBarChart className="text-blue-600 text-2xl" />}
              title="Automotive SEO"
              description="Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
            />
            <ServiceCard
              icon={<FaArrowPointer className="text-blue-600 text-2xl" />}
              title="PPC Precision"
              description="Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
            />
            <ServiceCard
              icon={<GiBalloons className="text-blue-600 text-2xl" />}
              title="Social Acceleration"
              description="Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
            />
            <ServiceCard
              icon={<FaBookBookmark className="text-blue-600 text-2xl" />}
              title="Content Excellence"
              description="Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
            />
            <ServiceCard
              icon={<MdOutlineVideoLabel className="text-blue-600 text-2xl" />}
              title="Web Design"
              description="Transform visitors into customers with high-performance websites
                designed for seamless user experiences and increased conversions."
            />
            <ServiceCard
              icon={<BsGraphUpArrow className="text-blue-600 text-2xl" />}
              title="Data-Driven Insights"
              description="Leverage data to refine your strategies, making informed decisions that drive revenue growth."
            />
            <ServiceCard
              icon={<PiUserCirclePlusBold className="text-blue-600 text-2xl" />}
              title="End-to-End Solutions"
              description="From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
            />
            <ServiceCard
              icon={<TfiVideoClapper className="text-blue-600 text-2xl" />}
              title="Video marketing"
              description="Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories."
            />
          </div>
          <button className="cursor-pointer transition duration-300 ease-in-out hover:shadow-bottom py-4 px-6 bg-blue-500 rounded-full text-lg leading-7 font-semibold text-white hover:bg-cornflowerblue">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
