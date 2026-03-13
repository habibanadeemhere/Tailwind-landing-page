import React from 'react'
import Map from '../assets/map.png'

const Footer = () => {
  return (
    <section className="w-full bg-[#232323]">
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 text-[#787878] px-10 md:px-24 py-12 mt-5">
        
       <div className="flex flex-col items-center relative">
  <img src={Map} alt="Map" className="w-32 md:w-40"/>
  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs whitespace-nowrap">
    Made with lots of ❤️ in San Francisco
  </p>
</div>

        <div>
          <h5 className="text-white font-bold mb-2">Products</h5>
          <ul className="leading-6 text-sm space-y-1">
            <li>Delta</li>
            <li>Sigma</li>
            <li>Zeta</li>
            <li>Alpha</li>
            <li>Acumen</li>
          </ul>
        </div>
        <div>
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
        <div>
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
  )
}

export default Footer

