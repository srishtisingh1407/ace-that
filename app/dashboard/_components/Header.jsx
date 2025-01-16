"use client";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex p-4 items-center justify-between bg-blue-50 shadow-md border rounded-b-[50px]">
      <Image src={'/logo.svg'} width={50} height={50} alt="/logo" />

      <ul className="hidden md:flex gap-6 font-light">
        <li
          className={`hover:text-emerald-800 hover:font-bold transition-all cursor-pointer ${
            path === '/dashboard' && 'text-emerald-800 font-normal'
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-emerald-800 hover:font-bold transition-all cursor-pointer ${
            path === '/questions' && 'text-emerald-800'
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-emerald-800 hover:font-bold transition-all cursor-pointer ${
            path === '/upgrade' && 'text-emerald-800'
          }`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-emerald-800 hover:font-bold transition-all cursor-pointer ${
            path === '/howitworks' && 'text-emerald-800'
          }`}
        >
          How it Works?
        </li>
      </ul>

      <UserButton />
    </div>
  );
}

export default Header;
