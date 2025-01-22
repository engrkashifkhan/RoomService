import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from '@remixicon/react'
import React from 'react'

function Footer() {
  return (
    <section className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center border-t-2 py-4'>
            <div className='flex space-x-4 mb-2'>
                <a href="https://www.facebook.com"
                target='_blank'
                reel="noopener noreferrer"
                aria-label='visit our pacebook page'
                ><RiFacebookFill/>
                </a>
                <a href="https://www.twitter.com"
                target='_blank'
                reel="noopener noreferrer"
                aria-label='visit our twitter page'
                ><RiTwitterFill/>
                </a> <a href="https://www.instagram.com"
                target='_blank'
                reel="noopener noreferrer"
                aria-label='visit our instagram page'
                ><RiInstagramFill/>
                </a>
            </div>
            <p className='text-sm'> &Copy, 2025 Kashif. All rights reserved</p>
        </div>
    </section>
  )
}

export default Footer