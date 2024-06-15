import React from 'react'

function Frame3Card({
    title,
    description,
    icon,
}) {
  return (
    <div className='flex flex-col m-3 justify-center text-center items-center'>
    <span className='bg-gray-100 p-4 rounded-full'>
    <img src={icon} alt="" />
    </span>
    <h1 className='font-bold text-2xl my-5'>{title}</h1>
    <p className='text-xl'>{description}</p>
    </div>
  )
  
}

export default Frame3Card
