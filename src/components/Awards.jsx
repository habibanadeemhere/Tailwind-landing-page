import React from 'react'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import Card4 from '../assets/card4.png'
import Card5 from '../assets/card5.png'
import Card6 from '../assets/card6.png'



const Awards = () => {
  return (
   <>
   
   <section className="awards mt-10">
   <div className="text text-center">
     <button className="text-black px-2 py-1 bg-[#EFFEFF]/60 border-2 border-[#BFEFF3]/60 rounded-md font-semibold">
      AWARDS
    </button><br /><br />
   <h2>An <b>award</b> winning platform, <b>loved by customers.</b></h2>
   </div>

   <div className="cards flex justify-center gap-14 mt-10 flex-wrap flex-cols md:flex-row">



<div className="card1 h-64 w-64 bg-[#FFF5F3] justify-center rounded-md">
<img className='mx-auto mb-4 mt-7' src={Card1} alt="" />

<b>Market leader across 18 categories</b>
</div>




<div className="card1  h-64 w-64 bg-[#FFF0F9] justify-center rounded-md">
    <img className='mx-auto mb-4 mt-7' src={Card2} alt="" />

<b>Most loved SaaS tool <br /> in 2021</b>
</div>


    <div className="card1  h-64 w-64 bg-[#ECFFFF] justify-center rounded-md">
        <img className='mx-auto mb-4 mt-7' src={Card3} alt="" />

<b>Category leader in <br /> 2022</b>
 </div>



   </div>

 <div className="cards flex justify-center gap-14 mt-5 flex-wrap flex-cols md:flex-row">



<div className="card1 h-64 w-64 bg-[#F6F4FF] justify-center rounded-md">
<img className='mx-auto mb-4 mt-7' src={Card4} alt="" />

<b>Most recommended <br /> tool in 2021</b>
</div>




<div className="card1  h-64 w-64 bg-[#FFF9E7] justify-center rounded-md">
    <img className='mx-auto mb-4 mt-7' src={Card5} alt="" />

<b>Champion in survey <br /> tool 2022</b>
</div>


    <div className="card1  h-64 w-64 bg-[#FFEDE4] justify-center rounded-md">
        <img className='mx-auto mb-4 mt-7' src={Card6} alt="" />

<b>Top performer spring  <br /> 2021</b>
 </div>



   </div>

   </section>
   </>
  )
}

export default Awards
