import React from 'react'
import Map from '../assets/map.png'
const Footer = () => {
  return (
    <>
   <section className="footer w-full">

<div className="foot flex flex-col md:flex-row flex-wrap justify-between mt-5 items-start gap-10 md:gap-24 text-[#787878] bg-[#232323] px-6 md:px-16 py-10">


  <div className="sec1 flex flex-col items-center md:items-start mt-10 md:mt-6 bg-cover" >
 <img src={Map} alt="Map" className="w-32 md:w-40 absolute" />
    <p className="mt-2 text-sm text-center md:text-left relative top-8 right-5">Made with lots of ❤️ in San Francisco</p>
  </div>

  <div className="sec2 mt-10 md:mt-0">
    <h5 className="text-white font-bold mb-2">Products</h5>
    <ul className="leading-6 text-sm space-y-1">
      <li>Delta</li>
      <li>Sigma</li>
      <li>Zeta</li>
      <li>Alpha</li>
      <li>Acumen</li>
    </ul>
  </div>

  <div className="sec3 mt-10 md:mt-0">
    <h5 className="text-white font-bold mb-2">Resources</h5>
    <ul className="leading-6 text-sm space-y-1">
      <li>Help</li>
      <li>Training Videos</li>
      <li>Webinars</li>
      <li>Request a Demo</li>
      <li>Create Surveys</li>
      <li>Quiz Maker</li>
    </ul>
  </div>

  
  <div className="sec4 mt-10 md:mt-0">
    <h5 className="text-white font-bold mb-2">Company</h5>
    <ul className="leading-6 text-sm space-y-1">
      <li>About Us</li>
      <li>Careers</li>
      <li>Team</li>
      <li>Contact Us</li>
    </ul>
  </div>
</div>
</section>
</>
  )
}

export default Footer