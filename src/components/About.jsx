import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.jpeg'
import icon6 from '../assets/icon6.png'
const About = () => {
  return (
   <>


<section className="abt py-20 ">
  <div className="text-center mb-10">
    <button className="text-black px-2 py-1 bg-[#EFFEFF]/60 border-2 border-[#BFEFF3]/60 rounded-md font-semibold">
      OUR CUSTOMERS
    </button>
    <h2 className="text-3xl sm:text-4xl font-bold mt-6">
      Trusted by <b>100,000+ customers</b> in 90+ countries
    </h2>
  </div>

  <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
    <img src={icon1} alt="" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
    <img src={icon2} alt="" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
    <img src={icon3} alt="" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
    <img src={icon4} alt="" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
    <img src={icon5} alt="" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
    <img src={icon6} alt="" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
  </div>
<br />
  <div className="text flex flex-wrap justify-center items-center gap-6 sm:gap-10">
    <p><b className='text-[#0CBBC7]/60'><i class="fa-solid fa-check"></i> 18281</b>  signed up last month</p>
    <p><b className='text-[#0CCBC7]/60'><i class="fa-solid fa-check"></i> GDPR-</b> & <b className='text-[#0CBBC7]/60'>CCPA</b>-ready</p>
    <p><b className='text-[#0CBBC7]/60'><i class="fa-solid fa-check"></i> Leader@G2</b> Summer</p>
  </div>
</section>
   </>
  ) 
}

export default About