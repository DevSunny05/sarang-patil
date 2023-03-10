import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import sass from '../assets/sass.png'
import postman from '../assets/postman.png'
import java from '../assets/java.png'
import selenium from '../assets/selenium.png'
import mongodb from '../assets/mongodb.png'
import mysql from '../assets/mysql.png'


const Experience = () => {
    const techs=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'

        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'REACT',
            style:'shadow-sky-400'
        },
        {
            id:5,
            src:express,
            title:'EXPRESS-JS',
            style:'shadow-white'
        },
        {
            id:6,
            src:node,
            title:'NODE',
            style:'shadow-green-600'
        },
        {
            id:7,
            src:github,
            title:'GITHUB',
            style:'shadow-gray-400'
        },
        {
            id:8,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-sky-400'
        },
        {
            id:9,
            src:sass,
            title:'SASS',
            style:'shadow-pink-400'
        },
        {
            id:10,
            src:postman,
            title:'POSTMAN',
            style:'shadow-orange-800'
        },
        {
            id:11,
            src:java,
            title:'JAVA',
            style:'shadow-red-800'
        },
        {
            id:12,
            src:selenium,
            title:'SELENIUM',
            style:'shadow-blue-800'
        },
        {
            id:13,
            src:mongodb,
            title:'MONGODB',
            style:'shadow-green-400'
        },
        {
            id:14,
            src:mysql,
            title:'MYSQL',
            style:'shadow-blue-900'
        },
    ]
  return (
    <div name='experience' className=' bg-gradient-to-b from-gray-800 to-black w-full h-fit '>
      <div className='mx-auto max-w-screen-lg p-4 flex flex-col justify-center w-full h-full text-white py-12 '>
        <div>
            <p className='text-4xl font-bold border-b-4  border-gray-500 p-2 inline '>Experience</p>
            <p className='py-6 '>These are the technologies I' have worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }
           
        </div>
      </div>
    </div>
  )
}

export default Experience
