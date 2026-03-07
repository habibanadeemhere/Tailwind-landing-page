import React from 'react'
import Circle from "../assets/circle.png"

const Navbar = () => {
  return (
    <>
    <nav className="navbar fixed w-full bg-white shadow z-20 fixed-top ">
      <div className="container d-flex justify-content-between align-items-center">

      
        <div className="d-flex gap-4 small align-items-center">
          <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="#">Pricing</a>
          <a className="nav-link" href="#">Testimonials</a>
          <a className="nav-link" href="#">Resources</a>
        </div>

       
        <div className=" fs-4">
          <img className='h-28' src={Circle} alt="" />
        </div>

       
        <div className="d-flex gap-4 small">
          <a className="nav-link" href="#">Company</a>
          <a className="nav-link" href="#">Contact</a>
          <button className='border-2 p-2 w-28 px-3 py-1 text-[#0CBBC7]/60 border-[#0CBBC7]/60 font-bold'>Login</button>
        </div>
          
      </div>
    </nav>
    
    
    
    
    </>
  )
}

export default Navbar

