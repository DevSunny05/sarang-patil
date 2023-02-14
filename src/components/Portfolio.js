import React from 'react'
import cyberpunk from '../assets/portfolio/cyberpunk.jpg'
import weatherapp from '../assets/portfolio/weatherapp.jpg'
import expenceTracker from '../assets/portfolio/expenceTracker.jpg'
import pos from '../assets/portfolio/pos.jpg'
import doctorAppointment from '../assets/portfolio/doctorAppointment.jpg'
import portfolio from '../assets/portfolio/portfolio.jpg'


const Portfolio = () => {

    const portfolios=[
        {
        id:1,
        src:expenceTracker,
        codeLink:'https://github.com/DevSunny05/expence-management-system',
        siteLink:'https://amaranth-basket-clam-tie.cyclic.app/'
    },
    {
        id:2,
        src:pos,
        codeLink:'https://github.com/DevSunny05/Point-of-System',
        siteLink:'https://courageous-handkerchief-lion.cyclic.app/'
    },
    {
        id:3,
        src:doctorAppointment,
        codeLink:'https://github.com/DevSunny05/doctors-appointment-app',
        siteLink:'https://jade-aggressive-oyster.cyclic.app/'
    },
    {
        id:4,
        src:portfolio,
        codeLink:'https://github.com/DevSunny05/sarang-patil',
        siteLink:'https://github.com/DevSunny05/sarang-patil'
    },
    {
        id:5,
        src:weatherapp,
        codeLink:'https://github.com/DevSunny05/weather-app-react',
        siteLink:'https://whatsupweather.netlify.app/'
    },
    {
        id:6,
        src:cyberpunk,
        codeLink:'https://github.com/DevSunny05/cyberpunk-react-web',
        siteLink:'https://cyberpunk-web.netlify.app/'
    },
    

]
  return (
    <div name='portfolio' className='w-full h-fit bg-gradient-to-b from-black to-gray-800 text-white '>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-b-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>

        

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            portfolios.map(({id,src,codeLink,siteLink})=>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt=""  className='rounded-md duration-200 hover:scale-105 object-full w-full h-48'/>
                <div className='flex items-center justify-center'>
                    
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={codeLink}>Code</a></button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={siteLink}>Demo</a></button>
                  
                </div>
            </div>
            ))
        }
           
        </div>
      </div>
    </div>
  )
}

export default Portfolio
