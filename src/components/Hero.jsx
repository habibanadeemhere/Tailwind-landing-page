import React from 'react'
import Background from '../assets/hero back.png'
import Group from '../assets/Mask group.png'


const Hero = () => {
  return (
  
  <>
  <br /><br /><br /><br />
<section
  className="hero-sec pt-5 bg-cover bg-center h-auto lg:h-80 relative mt-5"
  style={{ backgroundImage: `url(${Background})` }}
>

  <div className="absolute inset-0 bg-[#D6EEEE]/60"></div>

 
  <div className="relative mx-auto lg:mx-0 text-center lg:text-left ">
    <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-4 w-full">
      A powerful online engagement tool <br/>
      that’s intuitive and simple to use.
    </h2>

    <p className='text-[#878787] mb-6'>
      With stellar one-click reports and unmatched support, see how <br /> Circle will make a difference in your business.
    </p>

    <button className='border-2 border-none bg-[#0CBBC7]/60 text-white font-semibold px-6 py-3 rounded'>
      Get started free <i className="fa-solid fa-greater-than ml-2"></i>
    </button>
  </div>

<br /><br />
  <div className="image relative flex justify-center mt-6 lg:mt-0">
    <img src={Group} alt="" className='w-full max-w-[700px] object-contain' />
  </div>
  
</section>
  
  </>


  )
}

export default Hero
