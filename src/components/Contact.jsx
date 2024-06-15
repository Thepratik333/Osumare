import React from "react";

function Contact() {
  return (
    <section className="relative">

    <span className="w-[38vw] h-[50vh] md:block hidden bg-[#E0EAFF] rounded-full absolute -left-48 top-0 blur-[80px] z-[-9999]"></span>
    <span className="w-[38vw] h-[50vh] md:block hidden bg-[#f8f2eae4] rounded-full absolute -right-48 top-0 blur-[80px] z-[-9999]"></span>

    <h1 className="font-bold text-center text-3xl my-5">
    Connect with Our Digital Marketing Experts
    </h1>
  <p className="text-lg text-center text-gray-600 mb-10">
  Reach Out for Tailored Strategies and Results-Driven Solutions.
  Let's Elevate Your Online Presence Together
  </p>
      <div className="flex flex-col shadow-lg mx-8 lg:mx-32 mt-20 p-8 bg-white rounded-lg">
        <div className="w-full flex">
          <div className="mr-6">
            <div className="mb-4">
              <label
                htmlFor="input1"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="input1"
                className="w-[30vw] border border-gray-300 rounded-md p-2 mt-1 focus:border-blue-500 focus:ring-blue-500"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="input2"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="input2"
                className="w-[30vw] border border-gray-300 rounded-md p-2 mt-1 focus:border-blue-500 focus:ring-blue-500"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="input3"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="input3"
                className="w-[30vw] border border-gray-300 rounded-md p-2 mt-1 focus:border-blue-500 focus:ring-blue-500"
                type="text"
                placeholder="Enter the subject"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="mb-4">
              <label
                htmlFor="textarea1"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="textarea1"
                className="md:w-[20vw] resize-none h-52 border border-gray-300 rounded-md p-2 mt-1 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white py-2 px-20 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Send Message
          </button>
        </div>
      </div>

    </section>
  );
}

export default Contact;
