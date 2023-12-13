import React from 'react'
import SideBar from '../_components/sidebar'
import Navbar from '../_components/navbar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-50 h-[80px] w-full md:pl-56"><Navbar /></div>
      <div className="fixed inset-y-0 z-50 hidden h-full w-56 flex-col md:flex">
        <SideBar />
      </div>
      {children}
    </div>
  )
}
export default DashboardLayout
