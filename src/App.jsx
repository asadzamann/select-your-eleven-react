import { Suspense, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import AvailablePlayers from './AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './SelectedPlayers/SelectedPlayers'

 const fetchPlayerData = fetch('../players.json')
    .then(response => response.json())
function App() {
 

    const [toggle , setToggle] = useState(true);
    const [availableBalance , setAvailableBalance] = useState(6000000);
    const [showSelected, setShowSelected] = useState([]);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className='flex items-center justify-between mx-auto max-w-[1200px]'>
         <h1 className='text-2xl font-bold'>Available Players</h1>
        <div className='font-bold'>
          <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-gray-300 rounded-l-2xl border-r-0 ${toggle===true?'bg-[#E7FE29]' : ''} `}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-gray-300 rounded-r-2xl border-l-0 ${toggle === false ? 'bg-[#E7FE29]' : ''}`}>Selected <span>(0)</span></button>
        </div>
      </div>
      { toggle === true? <Suspense fallback={<h2>Player Data Is Loading</h2>}>
        <AvailablePlayers setShowSelected={setShowSelected} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} fetchPlayerData={fetchPlayerData}></AvailablePlayers>
      </Suspense> :   <SelectedPlayers showSelected={showSelected}></SelectedPlayers>}
      
    
    </>
  )
}

export default App
