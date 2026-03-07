import React from 'react'
import Computer from '../assets/computer.png'
const Solution = () => {
  return (
   <>
   
   <section className="flex gap-16 py-12 justify-content-center flex-col md:flex-row align-items-center mt-5 ">
   
     <div className="text-left">
   
       <h2 className="mt-4 text-3xl">
        Looking for a <b>solution</b> <br />
for your business?
       </h2>
       <br />
      

       <p className="mt-4 text-[#676767]">
        Check out Sogolytics enterprise feedback and <br /> experience management platform.
       </p>
   
       <button className="mt-4 bg-[#0CBBC7] text-white px-6 py-3 rounded">
         Learn More
       </button>
      <button className="mt-4 px-6 py-3 rounded  border-[#0CBBC7] ml-5 border-2">
  Schedule a consultation
</button>
     </div>
   
     <div>
       <img src={Computer} className="rounded w-[400px]" alt="" />
     </div>
   
   </section>
   
   
   
   
   
   
   
   </>
  )
}

export default Solution