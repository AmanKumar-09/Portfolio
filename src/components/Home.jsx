import React from 'react'
// import HeroImage from "../assets/img/aman-wnt.jpg"
// import HeroImage2 from "../assets/img/aman-rd.jpg"
// import red from "../assets/img/profile-pic (1).png"
// import black2 from "../assets/img/profile-pic.png"
import black1 from "../assets/img/profile-pic (3).png"
import { MdKeyboardArrowRight } from "react-icons/md";


function Home() {
  return (
    <div name="home" 
      className='h-screen w-full bg-gradient-to-b from-black 
    via-black to-gray-800 text-white '
    >
      <div className='max-w-[1200px]  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row  '>

        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold   '>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-5 max-w-md text-md'>
            I have 1 year of experience building and designing software.
            Currently, I love to work on web application using texhnologies like
            React, Tailwind, Next JS.
          </p>
          <div>
            <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-pink-600 to-pink-300 cursor-pointer'>
              Portfolio
              <span className='hover:rotate-90 duration-300 font-bold '>
                <MdKeyboardArrowRight size={25} className='ml-1' />
              </span>

            </button>
          </div>


        </div>

        <div className='ml-12'>
          <img src={black1} alt="my-img" className=' mx-auto w-2/3 md:w-2/3  ' />
        </div>

      </div>

    </div>
  )
}

export default Home