import React from 'react'
import cpp from '../assets/img/cpp.png'
import tailwind from '../assets/img/tailwind2.png'
import reactImg from '../assets/img/reacttrans.webp'
import javascript from '../assets/img/JS.png'
import express from '../assets/img/ExpressJs.png'
import github from '../assets/img/github2.png'
import mongodb from '../assets/img/MongoDb.png'
import node from '../assets/img/Node1.png'

const Experience = () => {

    const techs =[
        {
            id:1,
            src: github,
            title:'Github',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src: cpp,
            title:'cpp',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImg,
            title:'React',
            style:'shadow-blue-600'
        },
       
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:express,
            title:'Express.js',
            style:'shadow-yellow-500'
        },
        {
            id:7,
            src:mongodb,
            title:'MongoDB',
            style:'shadow-green-500'
        },
        {
            id:8,
            src:node,
            title:'Node.js',
            style:'shadow-green-800'
        }
    ]

  return (

    <div
    name='experience'
     className='bg-gradient-to-b from-gray-800  to-black w-full h-screen'
     >
       <div 
       className='max-w-[1200px]  mx-auto p-4 flex flex-col justify-center  h-full text-white
       '>
           <div>
               <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience - Tech</p>
               <p className='py-6'>These are the technologies I've worked with</p>
           </div>


           <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

           { techs.map(({id,src,title,style}) =>{
               return  <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}  >
               <img src={src} alt="img" className='w-24  mx-auto'/>
               <p className='mt-4'>{title}</p>
           </div>
           })}

              
           </div>
       </div>
   </div>
  )
}

export default Experience