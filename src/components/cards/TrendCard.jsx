import React from 'react';

function TrendCard({
  icon,
  title,
  description
}) {
  return (
    <div className='flex py-10 md:w-[42vw] w-full bg-white shadow-md p-4 rounded-lg'>
      <span className='bg-gray-100 h-14 flex justify-center items-center w-14 rounded-full'>{icon}</span>
      <div className='ml-3'>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <p className='text-lg'>{description}</p>
      </div>
    </div>
  );
}

export default TrendCard;
