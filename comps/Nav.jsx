"use client";

import { useState } from "react";

export default function Nav(){
  const [open, setOpen] = useState(false);

  return(
    <nav className="container mx-auto p-4 md:p-6 z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
          src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1762432787/Logo_zrfyd5.png" 
          alt="Logo" 
          className="h-8 w-auto md:h-10" />
        </div>

        <button
          className="inline-flex items-center justify-center rounded md:hidden text-white p-2 focus:outline-none focus:ring"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex text-white items-center gap-6">
          <li className="hover:underline"><a href="#Home">Home</a></li>
          <li className="hover:underline"><a href="#About">About</a></li>
          <li className="hover:underline"><a href="#Projects">Projects</a></li>
          <li className="hover:underline"><a href="#Skills">Skills</a></li>
          <li className="hover:underline"><a href="#Contact">Contact</a></li>
        </ul>
      </div>

      {open && (
        <ul className="mt-4 md:hidden flex flex-col text-white gap-3">
          <li><a className="block py-2 hover:underline" href="#Home">Home</a></li>
          <li><a className="block py-2 hover:underline" href="#About">About</a></li>
          <li><a className="block py-2 hover:underline" href="#Projects">Projects</a></li>
          <li><a className="block py-2 hover:underline" href="#Skills">Skills</a></li>
          <li><a className="block py-2 hover:underline" href="#Contact">Contact</a></li>
        </ul>
      )}
    </nav>
  )
}