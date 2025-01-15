import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex p-4 items-center justify-between bg-emerald-100 shadow-md'>
        <Image src={'/logo.svg'} width={50} height={50} alt='/logo'></Image>

        <ul className='flex gap-6 font-semibold'>
          <li className='hover:text-emerald-800 hover:font-bold transition-all cursor-pointer'>Dashboard</li>
          <li className='hover:text-emerald-800 hover:font-bold transition-all cursor-pointer'>Questions</li>
          <li className='hover:text-emerald-800 hover:font-bold transition-all cursor-pointer'>Upgrade</li>
          <li className='hover:text-emerald-800 hover:font-bold transition-all cursor-pointer'>How it Works?</li>
        </ul>

<UserButton/>
    </div>
  )
}

export default Header