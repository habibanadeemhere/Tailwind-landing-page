import React from 'react'
import Map from '../assets/map.png'
const Footer = () => {
  return (
    <section className="footer flex justify-center align-items-center gap-24 text-[#787878] bg-[#232323] h-auto mt-5 md:min-h-80 flex-cols flex-wrap md:
    flex-row">


<div className="sec1 mt-20">
<img src={Map} alt="" />
<p>Made with lots of ❤️ in San Francisco</p>

</div>

<div className="sec2 mt-20 md:text-left text-center">
<ul className='leading-6'>
   <h5> <b className='text-white '>Products</b></h5>
 <li>Delta</li>
  <li>Sigma</li>
  <li>Zeta</li>
  <li>Alpha</li>
  <li>Acumen</li>

</ul>

</div>




<div className="sec3 mt-20 md:text-left text-center">
<ul className='leading-6'>
   <h5> <b className='text-white '>Resources</b></h5>
 <li>Help</li>
  <li>Training Videos</li>
  <li>Webinars</li>
  <li>Request a Demo</li>
  <li>Create Surveys</li>
  <li>Quiz Maker</li>

</ul>

</div>




<div className="sec4 mt-10 md:text-left text-center">
<ul className='leading-6'>
   <h5> <b className='text-white '>Company</b></h5>
 <li>About Us</li>
  <li>Careers</li>
  <li>Team</li>
  <li>Contact Us</li>

</ul>

</div>
<br /><br /><br />
    </section>
  )
}

export default Footer