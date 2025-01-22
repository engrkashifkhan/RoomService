import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import React from 'react'

function Contact() {
  return (
    <section className='max-w-7xl mx-auto mt-20' id='Contact'>
        <div className='my-20'>
            <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-12'>Contact Us</h2>
            <p className='max-w-2xl text-lg mb-12 text-center mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi, quod vitae soluta iure aspernatur.</p>
           <div className='flex flex-col lg:flex-row justify-around mx-4'>
            <div className='flex mb-8 lg:mb-0'>
                <FaWhatsapp className='text-3xl mr-4 '/>
                <div>
                    <p className='text-lg font-semibold'>WhatsaApp</p>
                    <p className='text-neutral-600'>03339447275</p>
                </div>
            </div>
            <div className='flex mb-8 lg:mb-0'>
                <MdOutlineEmail className='text-3xl mr-4 '/>
                <div>
                    <p className='text-lg font-semibold'>Email</p>
                    <p className='text-neutral-600'>kashifkhn6464ak@gmail.com</p>
                </div>
            </div>
            <div className='flex mb-8 lg:mb-0'>
                <FaLocationDot className='text-3xl mr-4 '/>
                <div>
                    <p className='text-lg font-semibold'>Address</p>
                    <p className='text-neutral-600'>Tehkal peshawar, pakistan</p>
                </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Contact