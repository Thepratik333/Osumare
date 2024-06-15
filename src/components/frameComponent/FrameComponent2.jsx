import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsFillBookmarkCheckFill, BsStars } from "react-icons/bs";
import { HiDocumentSearch } from "react-icons/hi";
import TrendCard from "../cards/TrendCard";
import rafiki from "../../assets/rafiki.png";

function FrameComponent2() {
  return (
    <section className="flex flex-col md:flex-row items-start w-full">
    <div className="flex-1 flex flex-col items-center justify-center md:items-start md:justify-start gap-8 px-6 md:px-12 lg:px-24">
    <div className="w-full">
            <h1 className="md:text-5xl text-4xl text-center"> Navigating Real Estate's Digital Landscape</h1>
            <p className=" mt-4 md:mt-2 mb-8 md:text-2xl text-lg leading-normal flex items-center justify-center sm:text-lg sm:leading-snug">
              Insights for Real Estate Marketing Advantage
            </p>
          </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start relative md:mx-24 text-left sm:h-auto sm:min-h-[736px]">
          <div className="md:w-[586px] md:absolute unset top-10 left-0 flex flex-col items-start justify-start gap-4 max-w-full">
            <TrendCard
              icon={<BsStars className="text-blue-600 text-2xl" />}
              title="Market Trends Analysis"
              description="Predictive insights to guide real estate strategies."
            />
            <TrendCard
              icon={<AiFillThunderbolt className="text-blue-600 text-2xl" />}
              title="Targeted Buyer Persona"
              description="Understand and connect with your ideal property buyers."
            />
            <TrendCard
              icon={
                <BsFillBookmarkCheckFill className="text-blue-600 text-2xl" />
              }
              title="Competitor Insights"
              description="Stand out in the property market with informed strategies."
            />
            <TrendCard
              icon={<HiDocumentSearch className="text-blue-600 text-2xl" />}
              title="Visual Content Appeal"
              description="Captivate buyers with appealing visuals and immersive experiences."
            />
          </div>
          <div className="absolute -right-32 md:block hidden top-0 z-[-10]">
            <img src={rafiki} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrameComponent2;
