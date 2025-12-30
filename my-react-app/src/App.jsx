import { useState } from 'react'
import './App.css'
import Navu from './Components/Navu'
// import Sidebar from './Components/Sidebar'
import Maincontent from './Components/Maincontent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navu/>
    {/* <Sidebar/> */}
    <Maincontent/>

    </>
  )
}

export default App
