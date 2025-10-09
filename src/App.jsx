import { Suspense, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import AvailablePlayers from './AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './SelectedPlayers/SelectedPlayers'


function App() {
  const fetchPlayerData = fetch('../players.json')
    .then(response => response.json())

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<h2>Player Data Is Loading</h2>}>
        <AvailablePlayers fetchPlayerData={fetchPlayerData}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
