import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import OsumareLogo from '../assets/OsumareLogo.png'


function About() {
  return (
    <section className="w-full max-w-screen-xl flex flex-row items-start justify-end p-8 mx-auto mt-32">
      <footer className="flex-1 flex flex-col items-start justify-start gap-8 ">
      
      <div className="w-full flex flex-col md:flex-row items-start justify-between p-8 bg-gradient-to-r from-blue-200 to-blue-50 rounded-3xl shadow-lg gap-8">
      <div className="w-full md:w-1/3 flex flex-col items-start justify-start gap-8">
            <div className="flex flex-col items-start justify-start gap-4">
              <div className="w-32 h-18 relative rounded overflow-hidden">
              <img src={OsumareLogo} className="w-28" alt="OsumareLogo" />
              </div>
              <p className="leading-6">
                The best digital marketing agency in Pune with a proven track
                record of consistently delivering quality service.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-2 text-center">
              <a className="tracking-wide leading-6 font-bold text-inherit">
                Address
              </a>
              <p className="leading-6 text-base text-left text-darkslategray-200">
                Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                Pune-14, Maharastra, India.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-6 ">
              <b className="leading-9">Contacts</b>
              <div className="flex flex-col items-start justify-center gap-4 text-base text-darkslategray-200">
                <div className="flex flex-row items-center justify-start gap-2">
                  <MdEmail />

                  <a
                    className="w-40 leading-6 text-inherit whitespace-nowrap"
                    href="mailto:hello@osumare.in"
                    target="_blank"
                  >
                    hello@osumare.in
                  </a>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <IoMdCall />

                  <div className="leading-6 whitespace-nowrap">
                    +91 8459 8762 26
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-8 text-center">
            <b className="leading-12 font-bold">Menu</b>
            <div className="flex flex-col items-start justify-start gap-4 text-base text-darkslategray-200">
              <div className="leading-6 font-medium">Home</div>
              <a className="leading-6 font-medium text-inherit">About</a>
              <a className="leading-6 font-medium text-inherit">Services</a>
              <div className="leading-6 font-medium">Work</div>
              <div className="leading-6 font-medium">Blog</div>
              <div className="leading-6 font-medium">Career</div>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-start justify-start gap-6">
            <b className="leading-12 font-bold">Social</b>
            <div className="flex flex-row flex-wrap items-start justify-start gap-6">
              <span className='bg-gray-100 h-8 flex justify-center items-center w-8 rounded-full'> <FaXTwitter /></span>
              <span className='bg-gray-100 h-8 flex justify-center items-center w-8 rounded-full'><FaFacebookSquare /></span>
              <span className='bg-gray-100 h-8 flex justify-center items-center w-8 rounded-full'><FaYoutube /></span>
              <span className='bg-gray-100 h-8 flex justify-center items-center w-8 rounded-full'><FaPinterest /></span>
              <span className='bg-gray-100 h-8 flex justify-center items-center w-8 rounded-full'><RiWhatsappFill /></span>
              <span className='bg-gray-100 h-8 flex justify-center items-center w-8 rounded-full'><AiFillInstagram /></span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default About;
