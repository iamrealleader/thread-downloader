import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-20 px-5 md:px-10 flex justify-between items-center'>
     <Link href={"/"} className="logo">Downloader8k</Link>
     <div className="items flex gap-4">
      <Link href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Technicalpariwar.in@gmail.com"} target="_blank" className="contact font-bold hover:text-green-400">Contact us</Link>
      <Link href={"#about"} className="about font-bold hover:text-green-400">About us</Link>
     </div>
    </nav>
  )
}
export default Navbar
