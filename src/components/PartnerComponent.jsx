import React from "react";
import pratik1 from "../assets/pratik1.jpg";
import symbol from "../assets/Symbol.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function PartnerComponent() {
  return (
    <section className="p-5">
      <h1 className="font-bold text-center text-3xl my-5">What Our Pharma Partners Say</h1>
      <p className="text-lg text-center text-gray-600 mb-10">Driving Transformations, One Brand at a Time</p>
      <div className="flex flex-col md:flex-row items-center mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10 max-w-[1200px]">
        <div className="md:mr-6 mb-6 md:mb-0 flex-shrink-0">
          <img src={pratik1} className="rounded-xl h-[20rem] md:h-[30rem] w-auto" alt="Tabish Khan" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <img src={pratik1} className="h-12 w-12 rounded-full" alt="Tabish Khan" />
            <h1 className="font-bold text-xl md:text-4xl ml-3">Pratik Panchal</h1>
            <img src={symbol} className="ml-4 md:ml-8 w-12 h-12" alt="Symbol" />
          </div>
          <p className="text-xl md:text-3xl leading-[1.500]">
            Osumare's expertise in pharma marketing is unparalleled. Their
            strategies helped us navigate complex regulations while driving
            remarkable growth.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white p-3 md:p-5 rounded-full mr-3 md:mr-5">
          <FaArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button className="bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white p-3 md:p-5 rounded-full">
          <FaArrowRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </section>
  );
}

export default PartnerComponent;
