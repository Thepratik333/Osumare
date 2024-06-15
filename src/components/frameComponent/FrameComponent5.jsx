import React from 'react';

function FrameComponent5({ className = '' }) {
  return (
    <section className={`text-center relative ${className}`}>
      {/* Background circles */}
      <span className="hidden md:block absolute -left-52 top-0 w-[38vw] h-[50vh] bg-[#E0EAFF] rounded-full blur-[80px] z-[-1]"></span>
      <span className="hidden md:block absolute -right-52 top-0 w-[38vw] h-[50vh] bg-[#f8f2eae4] rounded-full blur-[80px] z-[-1]"></span>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8 py-16 md:py-20">
        <h1 className='font-bold text-4xl md:text-5xl mb-6'>Your Peace of Mind</h1>
        <p className='text-lg md:text-2xl mb-10'>
          Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market
        </p>
        <button className="bg-blue-500 text-white px-6 md:px-10 py-3 md:py-4 hover:shadow-md transition duration-300 ease-in-out rounded-full">
          Get started
        </button>
      </div>
    </section>
  );
}

export default FrameComponent5;
