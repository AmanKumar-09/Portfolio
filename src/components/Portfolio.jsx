import React from 'react';
import swiggy from "../assets/img/swiggy-img.jpg"
import netflix from "../assets/img/netflix-img.png"
import wheather from "../assets/img/wheather-img.png"
import todo from "../assets/img/todo-img.jpg"

function Portfolio() {

  const portfolios = [
    {
      id: 1,
      src: swiggy,
    },
    {
      id: 2,
      src: netflix,
    },
    {
      id: 3,
      src: todo,
    },
    {
      id: 4,
      src: wheather,
    },
    {
      id: 5,
      src: todo,
    },
    {
      id: 6,
      src: swiggy,
    },
  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black  to-gray-800 w-full text-white md:h-screen'>


      <div className='max-w-[1200px] p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4'>Portfolio</p>

          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:px-0'>

          {portfolios.map(({ id, src }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg duration-200  hover:scale-105'>
              <img src={src} alt="" className='rounded-md w-[400px] h-[200px] ' />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>
          ))}


        </div>
      </div>

    </div>
  );
}

export default Portfolio;