import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import navImg from './assets/logo.png'
import dollarImg from './assets/pngimg.com - dollar_sign_PNG29 (1).png'
import Navbar from './Navbar/Navbar'
import AvailablePlayers from './AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './SelectedPlayers/SelectedPlayers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar></Navbar>
  <AvailablePlayers></AvailablePlayers>
  <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
