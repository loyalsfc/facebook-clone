import { useState } from 'react'
import Feed from './header/Feed'
import Header from './header/Header'
import Sidebar from './header/Sidebar'
import Widget from './header/Widget'
import Login from './header/Login'
import { useStateValue } from './StateProvider'

function App() {
  const [{user}, dispatch] =  useStateValue()


  return (
    <div className="App bg-[#f1f2f5] h-screen">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='flex'>
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>  
      )}
    </div>
  )
}

export default App
