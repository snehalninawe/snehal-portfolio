import React, { useRef, useState } from 'react'
import {toast, ToastContainer} from 'react-toastify'
import emailjs from '@emailjs/browser'

function Contact() {

  const form = useRef();
  const [isSend,setIsSend] = useState(false);

  const handleSendBtn = (e)=>{
    e.preventDefault();

    emailjs
    .sendForm(
      "service_aek639h",
      "template_hi2skoz",
      form.current,
      "o1pPkA-jg5H7zm-6x"
    )
    .then(
      ()=>{
        setIsSend(true);
        form.current.reset();
        toast.success("Send Successfully..!😊",{
          position:"top-center",
          hideProgressBar:false,
          autoClose:3000,
          closeOnClick:true,
          pauseOnHover:true,
          theme:"dark",
          draggable:true
        })
      },
      (error)=>{
        console.log("Failed To Send..!☹️",error);
        toast.error("Failed To Send..!☹️",{
          position:"top-center",
          hideProgressBar:false,
          autoClose:3000,
          closeOnClick:true,
          pauseOnHover:true,
          theme:"dark",
          draggable:true
        })
      }
    )
    .finally(() => {
        setTimeout(() => setIsSend(false), 3000)
      })
  }
  return (
    <section id='contact' className='flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-white dark:bg-[#0d0d23] transition-colors duration-500'>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>
      <ToastContainer/>

      <div className='mt-8 w-full max-w-md bg-gray-100 dark:bg-[#002147] p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700'>
        <h3 className='text-xl text-gray-900 dark:text-white font-semibold text-center'>Hey! Let's Make a Project Together..!👋 <br/> Connect with me 👇</h3>

        <form ref={form} onSubmit={handleSendBtn} className='mt-4 flex flex-col space-y-4'>
        <input type="email" name='email' placeholder='Enter your email..' required 
        className='w-full p-3 rounded-md text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1d3754] focus:outline-none focus:border-purple-500'/>
        <input type="text" name='name' placeholder='Enter your name..' required 
        className='w-full p-3 rounded-md text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1d3754] focus:outline-none focus:border-purple-500'/>
        <textarea type="text" name='message' placeholder='Write your message..' required 
        className='w-full p-3 rounded-md text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1d3754] focus:outline-none focus:border-purple-500'/>

          <button
          type='submit'
          className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md transition ${
                  isSend ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
          }`}
          >
            {isSend ? 'Sending...' : 'Send'}
          </button>
      </form>
      </div>

      
    </section>
  )
}

export default Contact
