import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'

const App = () => {
  return (
    <div>
      <div className='bg-gray-50 min-h-screen'>
        <Navbar/>
        <hr/>
        <div className='flex w-full'>
          <SideBar/>
        </div>
        
      
      </div>

    </div>
  )
}

export default App
