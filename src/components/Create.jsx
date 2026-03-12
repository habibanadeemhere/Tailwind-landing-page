import React from 'react'
import Image from '../assets/create.png'

const Create = () => {
    return (
        <>
            <section className="create mt-20">
                <div className="text text-center">
                    <button className="text-black px-2 py-1 bg-[#EFFEFF]/60 border-2 border-[#BFEFF3]/60 rounded-md font-semibold">
                        BUILD FOR PEOPLE
                    </button><br /><br />
                    <h2><b>Easy</b> for beginners. <b>Powerful</b> for experts.</h2>
                </div>

                <div className="text2 flex flex-col md:flex-row gap-40 justify-center mt-8 md:p-20">
                    <p className='text-[#0CBBC7] border-b-2 border-[#0CBBC7] shadow-md md:shadow-none flex items-center gap-2'>
                        <i className="fa-solid fa-file-circle-plus"></i> Create
                    </p>
                    <p className='text-[#878787] shadow-md md:shadow-none flex items-center gap-2'>
                        <i className="fa-solid fa-sun"></i> Distribute
                    </p>
                    <p className='text-[#878787] shadow-md md:shadow-none flex items-center gap-2'>
                        <i className="fa-solid fa-layer-group"></i> Collect
                    </p>
                    <p className='text-[#878787] shadow-md md:shadow-none flex items-center gap-2'>
                        <i className="fa-solid fa-magnifying-glass-dollar"></i> Analyze
                    </p>
                </div>
            </section>

            <section className="flex gap-16 py-12 justify-center flex-col md:flex-row items-center bg-[#EDFEFF]">
                <div className="text-left">
                    <h2 className="mt-4 text-3xl">Create</h2>
                    <br />
                    <b>Advanced research software</b>
                    <p className="mt-4 text-[#676767]">
                        Ask the right questions and get the answers you <br /> need with the most secure and collaborative <br /> survey platform on the market featuring <br /> powerful logic, sophisticated analytics, and <br /> built-in automation and integration.
                    </p>
                    <button className="mt-4 bg-[#0CBBC7] text-white px-6 py-3 rounded">
                        Get started for free
                    </button>
                </div>
                <div>
                    <img src={Image} className="rounded w-[500px]" alt="" />
                </div>
            </section>
        </>
    )
}

export default Create
