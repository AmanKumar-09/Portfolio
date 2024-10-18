// import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";




// const Contact = () => {
//     return (
//         <div className='bg-gradient-to-b from-black  to-gray-800 w-full h-screen text-white'>
//             <div className='py-14  px-4  font-bold'>
//                 <p className='ml-40 text-4xl'>Get in touch</p>
//             </div>
//             <div className='flex items-center w-[1200px] justify-center mx-auto gap-32 '>
//                 <div className='contenet-left bg-gray-500  '>
//                     <p className='text-5xl py-12'>Let's Talk</p>
//                     <p className='text-xl pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero labore cupiditate non sequi reiciendis,Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero? inventore ipsam totam modi </p>

                   
//                 </div>
//                 <form action="" className="flex flex-col items-start gap-3 w-1/2 bg-blue-500"   >
//                     <label htmlFor='' className='text-xl'>Your Name</label>
//                     <input type='text' className='text-black' placeholder='Enter your name ' name='name' />
//                     <label htmlFor=''>Your Email</label>
//                     <input type='email' className='text-black' placeholder='Enter your email ' name='email' />
//                     <label htmlFor=''  >Write your message</label>
//                     <textarea className='text-black' name='message' rows='8' placeholder='Enter your message' />
//                     <button type='submit'>Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Contact



import React from 'react';

const ContactPage = () => {
    return (
        <>
        
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black  to-gray-800 ">

            <div className="container mx-auto px-4 lg:px-20 py-12">
                <div className="lg:flex lg:space-x-12">
                    {/* Left Section */}
                    <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
                        <p className='text-5xl py-12 text-pink-200'>Let's Talk</p>
                        <p className='text-xl pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero labore cupiditate non sequi reiciendis,Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero? inventore ipsam totam modi Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est exercitationem.
                        </p>

                        <div className='flex flex-col gap-4 text-xl'>
                        <div className='flex gap-2 items-center'>
                            <MdMarkEmailRead className='font-extrabold text-2xl'/>
                            theamankumar4u@gmail.com
                        </div >
                        <div className='flex gap-1 items-center'>
                            <FaWhatsapp className='font-extrabold text-2xl' />
                            +91 9646056869 
                        </div>
                        <div className='flex gap-1 items-center'>
                            < IoLocationOutline className='font-extrabold text-2xl'/>
                            Ludhiana, Punjab
                        </div>
                    </div>



                    </div>

                    {/* Right Section (Form) */}
                    <div className="lg:w-1/2  p-8 ">
                    <p className='ml-40 text-4xl text-white'>Get in touch</p>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-300 mb-2" htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-gray-700 text-white  focus:outline-none focus:ring-1"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2" htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-gray-700 text-white  focus:outline-none focus:ring-2 "
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2" htmlFor="message">Write your message here</label>
                                <textarea
                                    id="message"
                                    className="w-full h-32 px-4 py-3 bg-gray-700 text-white  focus:outline-none focus:ring-2 "
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-52 bg-gradient-to-r from-pink-600 to-pink-400  hover:bg-pink-600 text-white py-3 rounded-full transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ContactPage;
