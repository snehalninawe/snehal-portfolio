import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import DarkMode from './DarkMode';
  


function Navbar() {
  const [isOpen,setIsOpen]=useState(false)
  const [activeSection,setActiveSection]=useState('');
  const [isScrolled,setIsScrolled] = useState(false);
  

  //check scroll and change the navbar background
  useEffect(()=>{
    const handleScroll = () =>{
      setIsScrolled(window.scrollY>50);
    }
    window.addEventListener("scroll",handleScroll);
    return()=>window.removeEventListener("scroll",handleScroll)
  },[])


  const handleMenuClick=(sectionId)=>{
    setActiveSection(sectionId);
    setIsOpen(false)

    const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
  }

  const menuItem = [
     {id:"about",label:"About"},
     {id:"skills",label:"Skills"},
     {id:"projects",label:"Projects"},
     {id:"contact",label:"Contact"},

  ]
  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-500 px-[7vw] md:px-[7vw] lg:px-[20vw] bg-white dark:bg-[#0d0c1d] ${
        isScrolled?"bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
    } `}>
      <div className='text-gray-800 dark:text-white py-5 flex justify-between items-center'>
        {/* logo */}
        <div className='text-lg cursor-pointer font-semibold'>
       
          <span className='dark:text-white text-black text-3xl'>𝐒nehal 𝐍inawe</span>
        </div>

        {/* Desktop menu */}

        <ul className='hidden md:flex text-gray-300 space-x-8 '>
          {menuItem.map((item)=>(
            <li key={item.id} className={`hover:cursor-pointer text-gray-800 dark:text-gray-300 hover:text-[#8245ec]  ${
              activeSection === item.id? "text-[#8bd1e1]":""
            }`}>
              <button onClick={()=> handleMenuClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
          {/* Icons */}
        <div className='hidden md:flex space-x-4'>

          <div ><DarkMode/></div>
            
        </div>
        
        {/* menu icon */}
          <div className='md:hidden'>
        
        {
          isOpen?(

          
          <RxCross1  className='text-3xl cursor-pointer  dark:text-gray-300 text-[#8245ec]'
          onClick={()=>setIsOpen(false)}/>
          ):(
          <GiHamburgerMenu  className='text-3xl cursor-pointer  dark:text-gray-300text-[#8245ec]'
          onClick={()=>setIsOpen(true)}/>
          
          )
         
        }
          </div>
      

      </div>

      {/* mobile menu items */}
        {
          isOpen && (
            <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-white dark:bg-[#0d0c1d] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden'>
              <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
                {menuItem.map((item) => (
                  <li className={`dark:hover:text-white text-gray-800 dark:text-gray-300 hover:text-[#8245ec] cursor-pointer ${
                    activeSection === item.id?"text-[#8245ec]":""
                  }`}>
                     <button onClick={()=>handleMenuClick(item.id)}>
                      {item.label}
                     </button>
                  </li>
                ))}
                <div className='flex space-x-4'>
          <div><DarkMode/></div>
                </div>
              </ul>
            </div>
          )
        }


    </nav>
  )
}

export default Navbar
