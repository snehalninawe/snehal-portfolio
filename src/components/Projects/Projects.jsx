import React, { useState } from 'react'
import { projects } from '../../data'

function Projects() {
  const[select,setSelect]=useState(null)

  const handleModel = (project) =>{
    setSelect(project);
  }

  const handleCloseBtn = ()=>{
    setSelect(null);
  }

  return (
    <section id="projects" className='py-24 px-[12vw] pb-24 md:px-[7vw] lg:px-[20vw] relative bg-white dark:bg-[#0d0d23] transition-colors duration-500'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl text-gray-900 dark:text-white font-bold'>
         PROJECTS
        </h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
      </div>

      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

        {projects.map((project)=>(
          <div
          key={project.id}
          onClick={()=>handleModel(project)}
          className='border border-gray-200 dark:border-white bg-gray-100 dark:bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'
          >
            <div className='p-4'>
              <img src={project.image} alt=""  className='rounded-xl object-cover w-full h-48'/>
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                {project.title}
              </h3>
              <p className='text-gray-700 dark:text-gray-400 pt-4 mb-4 line-clamp-3'>
                {project.description}
              </p>
              <div className='mb-4'>
                {project.tags.map((tag,index)=>(
                  
                <span
                key={index}
                className='inline-block bg-[#eae6f9] dark:bg-[#251f38] text-xs font-semibold text-purple-600 dark:text-purple-500 rounded-full px-2 py-1 mr-2 mb-2'
                  >
                    {tag}
                  </span>
                ))}

              </div>
            </div>
          </div>
        ))}
      </div>

     
        {select && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4'>
            <div className='bg-white dark:bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative'>
                <div className='flex justify-end p-4'>
                  <button onClick={handleCloseBtn} className='font-bold text-3xl hover:text-purple-500 text-gray-900 dark:text-white'>
                    &times;
                  </button>
                </div>

                <div className='flex flex-col'>
                  <div className='w-full flex justify-center bg-white dark:bg-gray-900 px-4'>
                    <img src={select.image} alt="" className='lg:w-full w-[95%] object-contain rounded-xl shadow-2xl'/>
                  </div>
                  <div className='lg:p-8 p-6'>
                    <h3 className='lg:text-3xl font-bold  text-gray-900 dark:text-white mb-4 text-md'>{select.title}</h3>
                    <p className='text-gray-700 dark:text-gray-400 mb-6 text-xs lg:text-base'>{select.description}</p>
                    <div className='flex flex-wrap mb-2 gap-2'>
                      {select.tags.map((tag,index)=>(
                      <span
                        key={index}
                        className='bg-[#eae6f9] dark:bg-[#251f38] text-xs font-semibold text-purple-600 dark:text-purple-500 rounded-full px-2 py-1'
                      >
                        {tag}
                      </span>
                      ))}
                    </div>
                    <div className='flex gap-4'>
                      <a href={select.github} target='_blank' rel='noopener noreferrer' className='w-1/2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-800 text-gray-900 dark:text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>View Code</a>

                      <a href={select.webapp} target='_blank' rel='noopener noreferrer' className='w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>View Link</a>


                    </div>
                  </div>
                </div>
            </div>
          </div>
        )}
      
    </section>
  )
}

export default Projects
