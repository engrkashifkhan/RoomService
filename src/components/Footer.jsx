import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import React from 'react'

function Footer() {
  return (
    <section className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center border-t-2 py-4'>
            <div className='flex space-x-4 mb-2'>
                <a href="https://kashifkhn6464ak@gmail.com"
                target='_blank'
                reel="noopener noreferrer"
                aria-label='visit our twitter page'
                ><MdOutlineEmail />
                </a> <a href="https://instagram.com/kashifkhan4676"
                target='_blank'
                reel="noopener noreferrer"
                aria-label='visit our instagram page'
                ><FaInstagramSquare />
                </a>
            </div>
            <p className='text-sm'> &Copy, 2025 Kashif. All rights reserved</p>
        </div>
    </section>
  )
}

export default Footer