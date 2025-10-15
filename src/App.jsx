import { Suspense, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import AvailablePlayers from './AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './SelectedPlayers/SelectedPlayers'


function App() {
  const fetchPlayerData = fetch('../players.json')
    .then(response => response.json())

    const [toggle , setToggle] = useState(false)

  return (
    <>
      <Navbar></Navbar>
      <div className='flex items-center justify-between mx-auto max-w-[1200px]'>
         <h1 className='text-2xl font-bold'>Available Players</h1>
        <div>
          <button className='font-bold py-3 px-4 border border-gray-300 rounded-l-3xl bg-[#E7FE29]'>Available</button>
          <button className='font-bold py-3 px-4 border border-gray-300 rounded-r-3xl border-l-0'>Selected <span>(0)</span></button>
        </div>

      </div>
      { toggle === true? <Suspense fallback={<h2>Player Data Is Loading</h2>}>
        <AvailablePlayers fetchPlayerData={fetchPlayerData}></AvailablePlayers>
      </Suspense> :   <SelectedPlayers></SelectedPlayers>}
      
    
    </>
  )
}

export default App
