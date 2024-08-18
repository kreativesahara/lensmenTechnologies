import { useState } from 'react'
import Logo from '/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a target="_blank">
          <img src={Logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Lensmen Technologies</h1>
      <button> <a href="tel:+254-706823590">Contact Us: +254 706823590 </a></button>
      <h3>Our Services Are : </h3>
      <main>
        <div className='card'>
          Web and Mobile Applications Development
        </div>
        <div className='card'>
          Web Traffic and Resource Optimization Services
        </div>
        <div className='card'>
          Application Management and Search Engine Optimization
        </div>
        <div className='card'>
          Computer Hardware Resources ie Keyboards, Mouse, adapters.
        </div>
        <div className='card'>
          Internet Services And Installation.     
        </div>
        <div className='card'>
          Api Integration Services(payment service,i.e. Mobile payment service)
        </div>
        <div className='card'>
          Any Computer Graphics and Animations.
        </div>
        <div className='card'>
          Large Printing, Business Cards and posters.
        </div>
        <div className='card'>
          Software Installation Services
        </div>                  
      </main>
      <footer className="read-the-docs" style={{ textAlign: 'center'}}>
        Created by Mwong on 18/08/24.
        Copyright © 2024 Mwong. All rights reserved.   
      </footer>
    </>
  )
}

export default App
