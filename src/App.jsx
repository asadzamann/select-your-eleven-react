import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import navImg from './assets/logo.png'
import dollarImg from './assets/pngimg.com - dollar_sign_PNG29 (1).png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Navbar */}
      <div>
        <div class="navbar bg-base-100 shadow-sm">
          <div class="flex-1">
            <a class="btn btn-ghost text-xl">
              <img src={navImg} alt="" />
            </a>
          </div>
          <div class="flex-none">
            <button class="btn btn-square btn-ghost">
              <span>6000000000000</span>
              <img src={dollarImg} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
