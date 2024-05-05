//import React from 'react'
import { Outlet } from'react-router-dom'

const SideBar = () => {
  return (
    <div>
      <h1 className='text-xl font-bold text-red-500'>Sidebar</h1>
      <Outlet />
    </div>
  )
}

export default SideBar
