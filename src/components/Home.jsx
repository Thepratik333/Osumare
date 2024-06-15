import React from "react";
import background from "../assets/background-complete.png";
import HomeImage from "../assets/Headerimage.png";
import FrameComponent1 from "./frameComponent/FrameComponent1";
import Services from "./frameComponent/Services";
import FrameComponent2 from "./frameComponent/FrameComponent2";
import FrameComponent3 from "./frameComponent/FrameComponent3";
import FrameComponent4 from "./frameComponent/FrameComponent4";
import FrameComponent5 from "./frameComponent/FrameComponent5";
import PartnerComponent from "./PartnerComponent";
import AcordingContainer from './AcordingContainer'
import Contact from "./Contact";
import Footer from "./common/Footer";
import About from "./About";

function Home() {
  return (
    <>
      <div
        className="absolute z-[-9999] hidden md:block top-28 bg-contain"
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
          width: "100%",
        }}
      >
        <span className="w-[38vw] h-[50vh] bg-[#E0EAFF] rounded-full absolute right-4 top-36 blur-[80px]"></span>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className=" bg-opacity-80 md:p-8 p-2 md:mt-28 mt-14 flex flex-col justify-center items-center rounded-lg text-center">
          <h1 className="md:text-5xl text-2xl font-bold mb-4 space-y-2">
            <span className="font-medium block">
              Elevate <b className="text-blue-500 ">Real Estate Success</b> with
            </span>
            <span className="font-medium block">
              Osumare's Digital Expertise
            </span>
          </h1>
          <div className="text-lg text-gray-700 mb-6">
            Tailored Solutions for Thriving in the Digital Real Estate Landscape
          </div>
          <button className="cursor-pointer transition duration-300 ease-in-out hover:shadow-bottom border-none py-3 px-6 bg-blue-500 text-white text-xl rounded-full flex items-center justify-center">
            <b className="font-bold">Get started</b>
          </button>
        </div>
        <div className="mt-20 max-w-full">
          <img
            src={HomeImage}
            alt="Real Estate Success"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <FrameComponent1 className="mt-36 px-20 " />{" "}
        <Services/>
        <FrameComponent2/>
        <FrameComponent3 className=" mt-36 px-20 "/>
        <FrameComponent4/>
        <FrameComponent5 className="md:my-52 m-14 md:mx-52"/>
        <PartnerComponent/>
        <AcordingContainer/>
        <Contact/>
        <About/>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
