import React from 'react'
import topnav from '../assets/topnav.css'



const Topbar = () => {
  return (
    <>
    <div className="navbar">
      <a>Hemm<span>Hez</span></a>
      <div id='center' className="center hide" >
        <a href="#">Articles</a>
        <a href="#">Chats</a>
        <a href="#">Awards</a>
        <a href="#">About</a>
      </div>
      <div className='hamburger' onClick={()=>document.getElementById('center').classList.toggle('hide')}>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </div>
      <button>Get in touch</button>
    </div>
    </>
  )
}

export default Topbar