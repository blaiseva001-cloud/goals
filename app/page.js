import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-screen w-full'>
        <h1>Welcome to Aime blaise Goal</h1>
        <Link href='/goals' className='text-md bg-teal-500 px-6 py-2.5  rounded-md text-teal-100'>Goals</Link>
      </div>
    </div>
  )
}

export default Home