import React, { useEffect, useState } from 'react'
import { CiLight } from "react-icons/ci"; 
import { MdOutlineDarkMode } from "react-icons/md"; 


function DarkMode() {
    const [ theme,setTheme] = useState(
        localStorage.getItem('theme')?localStorage.getItem('theme'):"light"
    );
    

    useEffect(()=>{
        const element = document.documentElement;
        const html = document.documentElement;
        document.documentElement.classList.add('dark');
        html.setAttribute('data-theme',theme);

        if(theme=='dark'){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[theme]);
    
    const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <button className='className="flex cursor-pointer space-x-4'>
      {theme === 'light' ? (
        <MdOutlineDarkMode size={24}
          onClick={toggleTheme}
          className='dark:hover:text-white text-gray-800 dark:text-gray-300 hover:text-[#8bd1e1]'
        />
      ) : (
        <CiLight size={24}
          onClick={toggleTheme}
          className="dark:hover:text-white text-gray-800 dark:text-gray-300 hover:text-[#8bd1e1]"
        />
      )}
    </button>
  )
}

export default DarkMode
