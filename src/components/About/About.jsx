import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Profile from '../../assets/photo-2.jpeg'

function About() {
  return (
    <section
    id='about'
    className='py-4 px-[7vw] md:px-[7vw] lg:px[20vw] font-sans mt-16 md:mt-24 lg:mt-32  bg-white dark:bg-gradient-to-r dark:from-[#0d0d23] dark:to-[#002147]  transition-colors duration-500'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 leading-tight'>
            I'm
          </h1>

          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-blue-300 mb-4 leading-tight'>
            Snehal Ninawe
          </h2>

          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
              <span className='text-gray-900 dark:text-white '>I am  </span>
          <ReactTypingEffect
              text={[
                'Frontend Developer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={1000}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className='text-[#8245ec]'>{cursor}</span>
              )}
        />
           </h3>

          <p className='text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-400 mb-10 mt-8 leading-relaxed'>
              I'm a Frontend Developer who loves design and writing clean, efficient code. I enjoy building websites that look good and work well on all devices, using tools like React, Tailwind CSS, HTML, CSS, and JavaScript. I like solving tricky problems and turning them into smooth, easy-to-use web experiences. Right now, I’m mainly focused on frontend, but I also know a bit about backend and I'm still learning more every day to grow my skills.
          </p>

          <a 
          href="https://drive.google.com/file/d/1k2_zJ3gQ8nHkUbNSZ7HU09-MKF3Ujoqf/view?usp=drive_link"
          target='_blank'
          rel='noopener noreferrer'
          className='text-white inline-block py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 bg-gradient-to-r from-[#8065ae] to-[#5a486b] shadow-[0_0_2px_#8245ec,0_0_10px_#8245ec]'>
              Download CV
            </a>
        </div>

        {/* right side */}

        <div className='md:w-1/2 flex justify-center md:justify-end'>
              <img src={Profile} alt="" className='h-96 w-96 object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] scale-105 hover:scale-110 hover:transition-all duration-300'/>

        </div>
      </div>
    </section>
  )
}

export default About
