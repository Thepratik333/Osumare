import React from "react";
import cuate from "../../assets/cuate.png";

function FrameComponent1({ className }) {
  return (
    <section className={`flex flex-col items-center ${className}`}>
      <h1 className="text-center font-bold text-3xl pb-6 mt-10 md:mt-20">
        Real Estate-Focused Digital Mastery
      </h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:max-w-5xl">
        <img
          src={cuate}
          alt="Illustration"
          className="w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0 rounded-lg"
        />
        <div className="flex flex-col mx-4 md:mx-7 md:w-1/2 lg:w-3/5">
          <h2 className="font-bold text-2xl md:text-3xl my-6 md:my-10 text-center md:text-left">
            Unlock the Potential of Digital Real Estate Excellence
          </h2>
          <p className="mb-6 text-lg md:text-xl text-center md:text-left">
            At Osumare, we understand that the real estate landscape demands a
            digital presence that aligns with the intricacies of property
            marketing. Our range of specialized services is meticulously
            designed to catapult your brand's success in the ever-evolving
            digital property market.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full self-center md:self-start">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}

export default FrameComponent1;
