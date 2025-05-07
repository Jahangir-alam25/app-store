import React from 'react'

import { Link, useRouteError } from 'react-router'
import Navbar from './Navbar'



const ErrorPage = () => {
  const error = useRouteError()
  console.log(error?.error?.message)
  return (
    <>
 
      <div className='py-24 text-center'>
        <h1 className='mb-8 text-7xl font-bold text-red-500'>
          {error?.status || 404}
        </h1>
        <p className='mb-3 text-xl font-bold text-gray-900 md:text-2xl'>
          { error?.error?.message || 'Something Went Wrong!'}
        </p>
        <Link to='/'>
        <button className='bg-[#0EA106] text-white px-4 py-2 rounded'>Go to HomePage</button>
        </Link>
      </div>
    </>
  )
}

export default ErrorPage