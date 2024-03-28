import React from 'react'
import Navbar from './Navbar'
import FilterMethods from './FilterMethods'
import JobWorkSpace from './JobWorkSpace'
import Profile from './Profile'


const Dashboard = () => {
  return (
    <>    
    <Navbar/>    
    {/* <Profile/> */}
    <FilterMethods/> 
    <JobWorkSpace/>   
    </>
  )
}

export default Dashboard