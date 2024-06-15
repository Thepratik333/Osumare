import React from 'react'

function ServiceCard({
    title,
    description,
    icon,
}) {
  return (
    <div className='flex flex-col justify-center items-center'>
    <span className='bg-gray-100 p-4 rounded-full'>{icon}</span>
    <h1 className='font-bold'>{title}</h1>
    <p>{description}</p>
    </div>
  )
}

export default ServiceCard