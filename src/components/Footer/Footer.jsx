import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


function Footer() {
  return (
    <footer className='bg-gray-100 dark:bg-[#0d0d23] transition-colors duration-500 py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center '>

          <p className='text-sm text-gray-600 dark:text-gray-400 mt-6'>
           © 2025 Snehal Ninawe. All rights reserved.
        </p>
        
        <div className='flex flex-wrap justify-center space-x-4 mt-6 '>
          {[
            {icons:<FaGithub/>,link:"https://github.com/snehalninawe"},
            {icons:<FaLinkedinIn />,link:"https://www.linkedin.com/in/snehalninawe08-b28807277/"},
          ].map((item,index)=>(
            <a 
            key={index}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            className='transform transition-transform text-xl text-gray-600 dark:text-white hover:text-purple-500 hover:scale-110'>{item.icons}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}


export default Footer
