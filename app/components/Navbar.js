import React from 'react'
import Link from 'next/link'

function Navbar() {

  return (
    <nav className='flex justify-between px-10 bg-gray-900 h-[10vh] text-white items-center'>
      <h1 className='font-bold text-3xl'>Sale<span className='text-violet-500'>Sailor</span></h1>
      <div className='flex gap-4'>
        <Link href="/signup" className='border border-white px-4 py-2 rounded-full flex items-center bg-purple-700'>Sign Up</Link>
        <Link href="/login" className='border border-white px-4 py-2 rounded-full flex items-center bg-purple-700'>Login</Link>
      </div>
    </nav>
  )
}

export default Navbar
