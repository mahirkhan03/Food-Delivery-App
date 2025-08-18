import React from 'react'
import NavBar from './component/NavBar/NavBar'
import SideBar from './component/Sidebar/SideBar'

const App = () => {
  return (
    <div>
      <NavBar/>
      <hr />
      <div className="app-content">
        <SideBar/>
      </div>
    </div>
  )
}

export default App