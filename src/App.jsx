import { useState } from 'react'
import Header from './header/Header'
import Sidebar from './header/Sidebar'

function App() {

  return (
    <div className="App bg-dark">
      <Header />
      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
