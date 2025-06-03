import React from 'react'
import {SkillsInfo} from '../../data'
import Tilt from 'react-parallax-tilt'

function Skills() {
  return (
    <section id='skills' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw]  bg-white dark:bg-gradient-to-r dark:from-[#0d0d23] dark:to-[#002147]  transition-colors duration-500   clip-path-custom'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl sm:text-4xl font-bold  text-gray-900 dark:text-white'>SKILLS</h2>
        <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
      </div>

      <div className='flex justify-between flex-wrap gap-1 lg:gap-5 py-10'>
        {SkillsInfo.map((category)=>(
          <div 
          key={category.title}
          className='bg-gray-100 dark:bg-gray-900 dark:backdrop-blur-md  px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-gray-300 dark:border-white  transition-colors duration-500 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
            <h3 className='text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-400 mb-4 text-center'>
              {category.title}
            </h3>

              <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
              {category.skills.map((skills)=>(
                <div
                key={skills.name}
                className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-300 dark:border-gray-700 transition-colors duration-300 rounded-3xl text-center py-2 px-2 sm:py-2 sm:px-2'>
                  <img src={skills.logo} alt='' className='w-6 h-6 sm:w-8 sm:h-8'/>
                  <span className='text-xs sm:text-sm text-gray-800 dark:text-gray-300'>{skills.name}</span>
                </div>
              ))}
            </div>
              </Tilt>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
