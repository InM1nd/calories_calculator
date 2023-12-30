// import React from 'react'

import HeroImg from "../../img/HeroPhoto-removebg-preview.png"

const Hero = () => {
  return (
  <section className=""> 
  <div className="relative">
    <div className="flex text-black h-lvh">
      <div className="container mx-auto flex justify-center flex-col md:flex-column items-center mt-12 md:my-24">
			<div className="mb-6 md:mb-0 md:mt-0 ml-0 flex justify-center">
          {/* <div className="h-48 flex flex-wrap content-center"> */}
            <img className="inline-block md:mt-0 p-0 md:p-0 lg:w-auto lg:h-auto"  src={ HeroImg }/>
          {/* </div> */}
         </div>
        <div className="flex flex-col w-full items-center justify-center p-8">
          {/* <h1 className="text-3xl md:text-7xl text-green-700 tracking-loose">Nutrify</h1> */}
          <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Explore your food
          </h2>
          <p className="text-center text-sm md:text-base mb-4">Explore your favourite food and
            register now to build your weekly nutrition plan.</p>
          <a href="#"
            className="bg-transparent hover:bg-green-700 text-green-700 hover:text-white rounded-3xl shadow hover:shadow-lg py-4 px-8 border border-green-700 hover:border-transparent">
            Register</a>
        </div>
		</div>
     </div>
   </div>
  </section>
  )
}

export default Hero