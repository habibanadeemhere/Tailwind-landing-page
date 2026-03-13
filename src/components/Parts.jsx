import React from 'react'
import image from '../assets/image 40.png'

const Parts = () => {
  return (
    <section className="flex gap-16 py-12 justify-center items-center flex-col md:flex-row px-6">
      <div className="text-left">
        <button className="bg-[#EFFEFF] border rounded px-2 py-1">
          OUR PROMISES
        </button>
        <h2 className="mt-4 text-3xl">
          Tool <b>built for people.</b>
        </h2>
        <p className="mt-4 text-[#676767]">
          Whether you want to edit your Google Docs,<br /> resolve Jira issues, or collaborate over Zoom. <br /><br />
          Circle has 100+ integrations with tools you <br /> already use and love.
        </p>
        <button className="mt-4 bg-[#0CBBC7] text-white px-6 py-3 rounded">
          Get started free
        </button>
      </div>
      <div>
        <img src={image} className="rounded w-full max-w-[400px]" alt="" />
      </div>
    </section>
  )
}

export default Parts
