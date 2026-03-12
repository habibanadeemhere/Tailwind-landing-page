import React from 'react'
import Map from '../assets/map.png'

const Footer = () => {
  return (
    <>
      <section className="footer w-full bg-[#232323]">

        <div className="foot w-full flex flex-col md:flex-row flex-wrap justify-between items-start gap-10 md:gap-24 text-[#787878] px-10 md:px-24 py-12">

          <div className="sec1 flex flex-col items-start">
            <img src={Map} alt="Map" className="w-32 md:w-40"/>
            <p className="mt-3 text-sm">
              Made with lots of ❤️ in San Francisco
            </p>
          </div>

          <div className="sec2">
            <h5 className="text-white font-bold mb-2">Products</h5>
            <ul className="leading-6 text-sm space-y-1">
              <li>Delta</li>
              <li>Sigma</li>
              <li>Zeta</li>
              <li>Alpha</li>
              <li>Acumen</li>
            </ul>
          </div>

          <div className="sec3">
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

          <div className="sec4">
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
