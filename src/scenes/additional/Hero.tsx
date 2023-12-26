// import React from 'react'

const Hero = () => {
  return (
  <section>
    <div className="bg-white text-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <h1 className="text-3xl md:text-7xl text-green-700 tracking-loose">Nutrify</h1>
          <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Explore your food
          </h2>
          <p className="text-sm md:text-base mb-4">Explore your favourite food and
            register now to build your weekly nutrition plan.</p>
          <a href="#"
            className="bg-transparent hover:bg-green-700 text-green-700 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-green-700 hover:border-transparent">
            Register</a>
        </div>
        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
          <div className="h-48 flex flex-wrap content-center">
            <div>
              <img className="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"/></div>
              <div>
                <img className="inline-block mt-24 md:mt-0 p-8 md:p-0"  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"/></div>
                <div>
                  <img className="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"/></div>
                </div>
              </div>
            </div>
          </div>
  </section>
  )
}

export default Hero