import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },

    ]


    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>

            <div>
                <h1 className='font-signature text-5xl ml-2'>Aman</h1>
            </div>

            <ul className='hidden md:flex'>

                {links.map(({ link, id }) => (
                    <li key={id} className='px-4 cursor-pointer font-medium text-xl text-gray-500 hover:scale-105 hover:text-white duration-200 '>{link}</li>

                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            { nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 w-full left-0 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>

                {links.map(({ link, id }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize  py-6 text-4xl'>{link}</li>

                ))}
        </ul>
            )

            }

            

        </div>
    )
}

export default Navbar