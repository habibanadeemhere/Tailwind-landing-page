import React from 'react'
import Map from '../assets/map.png'

const Footer = () => {
  return (
    <>
      <section className="footer w-full">

        <div className="foot flex flex-col md:flex-row flex-wrap justify-between items-start gap-10 md:gap-20 text-[#787878] bg-[#232323] px-6 md:px-20 py-10">

          {/* Section 1 */}
          <div className="sec1 relative flex flex-col items-start mt-6">
            <img src={Map} alt="Map" className="w-32 md:w-40" />
            <p className="mt-3 text-sm">
              Made with lots of ❤️ in San Francisco
            </p>
          </div>

          {/* Section 2 */}
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

          {/* Section 3 */}
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

          {/* Section 4 */}
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
