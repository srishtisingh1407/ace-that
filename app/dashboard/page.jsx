import React, { Children } from 'react'
import Header from './_components/Header'
import DashboardLayout from './layout'
import AddNewInterview from './_components/AddNewInterview'

function Dashboard() {
  return (
    <div className='p-10'>
    <h2 className='font-bold text-2xl'>Dashboard</h2>
    <h2 className='text-emerald-500'>Create and Start yout AI Mockup Interview</h2>


    <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
      <AddNewInterview/>
    </div>
      </div>
  )
}

export default Dashboard