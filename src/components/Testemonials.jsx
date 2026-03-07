import React from 'react'
import Girl from '../assets/girl.png'
import Pay from '../assets/paypal.png'




const Testemonials = () => {
  return (
   <>
<section className="flex flex-col md:flex-row gap-12 md:gap-20 py-12 px-6 items-center justify-center">

  {/* Left: Text Content */}
  <div className="text-left flex-shrink-0">
    <button className="bg-[#EFFEFF] border border-[#0CBBC7] rounded px-3 py-1 text-sm text-[#0CBBC7]">
      TESTIMONIALS
    </button>

    <h2 className="mt-4 text-3xl leading-snug">
      See how customers <br />
      <b>drive impact</b>
    </h2>

    <button className="mt-6 bg-[#0CBBC7] text-white px-6 py-3 rounded">
      See case studies
    </button>
  </div>

  {/* Right: Image + Card */}
  <div className="relative flex-shrink-0 w-full max-w-md">
    {/* Image */}
    <img
      src={Girl}
      className="rounded w-full md:w-[360px] object-cover"
      alt="Testimonial"
    />

    {/* Testimonial Card — overlaps bottom-right of image */}
    <div className="bg-[#EDFEFF] rounded-md p-4 w-64 shadow-md
                    mt-4
                    md:absolute md:bottom-[-2rem] md:right-[-2rem] md:mt-0">
      <img src={Pay} alt="PayPal" className="mb-3" />
      <p className="text-[#878787] text-sm">
        "I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."
      </p>
      <p className="text-black font-bold mt-4 text-sm">Michel Dedrick</p>
      <p className="text-[#878787] text-sm">Senior Conversion Optimizer</p>
    </div>
  </div>

</section>
   
   
   
   
   </>
  )
}

export default Testemonials