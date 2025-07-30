import React from 'react'

const DivImg = ({text}) => {
  return (
    <>
      <div className="aboutContent h-40 sm:h-56 md:h-[40vh] w-full whatUs flex items-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#fab505] font-[heading-1] mb-4">
          {text || 'About Us'}
        </h2>
      </div>
    </>
  )
}

export default DivImg