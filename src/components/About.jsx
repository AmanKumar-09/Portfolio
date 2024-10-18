import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-gray-800  to-black  text-white'>
        <div className='max-w-[1200px] p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p  className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div > 
            <div className='text-xl mt-20'>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ipsam repellat officiis culpa qui eius corporis labore quibusdam in? Reiciendis sed doloremque nobis corporis, perspiciatis voluptatibus nostrum accusamus repellendus vel maiores, sint quis adipisci impedit obcaecati molestiae libero debitis iusto iste nam aliquam.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About