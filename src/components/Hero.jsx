import React from 'react';
import img from '../assets/hero.jpg';

function Hero() {
  return (
    <section className='max-w-7xl mx-auto border-b-2'>
        <div className='flex flex-col items-center my-20'>
            <h1 className='text-6xl lg:text-[10rem] p-2 uppercase font-bold'>ROOMS</h1>
            <p className='lg:mt-6 text-sm mb-4 font-medium tracking-tighter'>We Have Availabe Comfortable Room For Rents </p>
             <img src={img} alt="hero" className='object-cover w-full rounded-2xl p-2 h-[65vh]' />
        </div>
    </section>
  )
}

export default Hero