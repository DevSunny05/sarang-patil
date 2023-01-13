import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full h-40 bg-gradient-to-b from-gray-800 to-black text-white md:hidden '>
        <div className='mx-auto max-w-screen-lg flex flex-col  justify-center items-center h-full px-4'>
           <div className='flex p-4  items-center justify-center w-full h-20'>
           <div className='mx-6  hover:scale-110'>
            <a href="https://linkedin.com"><FaLinkedin size={30}/></a>   
            </div>
            <div className='mx-6   hover:scale-110'>
                <a href="https://github.com/DevSunny05"><FaGithub size={30}/></a>   
            </div>
            <div className='mx-6  hover:scale-110'>
                <a href="mailto:sarang.office01@gmail.com"> <HiOutlineMail size={30}/></a>
            </div>
            <div className='mx-6  hover:scale-110'>
                <a href="/resume.pdf" download={true}> <BsFillPersonLinesFill size={30}/></a>
            </div>
           </div>
           <div className='p-4'>
                <p className='flex text-gray-500 '>© Copyright 2023, <b className='flex ml-2 text-white font-semibold text-md'> Sarang Patil</b></p>
           </div>
        </div>
      
    </div>
  )
}

export default Footer
