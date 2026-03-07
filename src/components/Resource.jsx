import React from 'react'
import Women from '../assets/women.png'
import Lady from '../assets/lady.png'
import Ball from '../assets/footbal.png'

const Resource = () => {
  return (
    <>
     <section className="resources mt-5 px-4 md:px-20">
  <div className="text text-left">
    <button className="text-black px-2 py-1 bg-[#EFFEFF]/60 border-2 border-[#BFEFF3]/60 rounded-md font-semibold">
      RESOURCESS
    </button>
    <br /><br />
    <h2 className="text-3xl md:text-4xl"><b>Stay</b> in the <b>know</b></h2>
  </div>

  <div className="cards flex flex-col md:flex-row flex-wrap gap-10 md:gap-12 justify-center mt-6">
    
    {/* Card 1 */}
    <div className="card1 p-4 border w-full md:w-80 text-left">
      <img src={Women} alt="" className="w-full rounded" />
      <br />
      <p className='mt-2'><b>Excepteur sint occaecat cupidatat <br /> non proident</b></p>
      <br />
      <p className='text-[#878787] text-sm'>
        Nemo enim ipsam voluptatem quia <br /> voluptas sit aspernatur aut odit aut fugit, <br /> sed quia consequuntur magni dolores eos <br /><br />Neque porro quisquam est, qui dolorem <br /> ipsum quia dolor sit amet, consectetur, <br /> adipisci veli
      </p>
      <br />
      <button className="mt-4 bg-[#0CBBC7] text-white px-6 py-3 rounded">
        Learn more
      </button>
    </div>

    {/* Card 2 */}
    <div className="card1 p-4 border w-full md:w-80 text-left">
      <img src={Ball} alt="" className="w-full rounded" />
      <br />
      <p className='mt-2'><b>Excepteur sint occaecat cupidatat <br /> non proident</b></p>
      <br />
      <p className='text-[#878787] text-sm'>
        Nemo enim ipsam voluptatem quia <br /> voluptas sit aspernatur aut odit aut fugit, <br/> sed quia consequuntur magni dolores eos <br /><br />Neque porro quisquam est, qui dolorem <br /> ipsum quia dolor sit amet, consectetur, <br /> adipisci veli
      </p>
      <br />
      <button className="mt-4 bg-[#0CBBC7] text-white px-6 py-3 rounded">
        Learn more
      </button>
    </div>

    {/* Card 3 */}
    <div className="card1 p-4 border w-full md:w-80 text-left">
      <img src={Lady} alt="" className="w-full rounded" />
      <br />
      <p className='mt-2'><b>Excepteur sint occaecat cupidatat <br /> non proident</b></p>
      <br />
      <p className='text-[#878787] text-sm'>
        Nemo enim ipsam voluptatem quia <br /> voluptas sit aspernatur aut odit aut fugit, <br /> sed quia consequuntur magni dolores eos <br /><br />Neque porro quisquam est, qui dolorem <br /> ipsum quia dolor sit amet, consectetur, <br /> adipisci veli
      </p>
      <br />
      <button className="mt-4 bg-[#0CBBC7] text-white px-6 py-3 rounded">
        Learn more
      </button>
    </div>

  </div>
</section>
    </>
  )
}

export default Resource