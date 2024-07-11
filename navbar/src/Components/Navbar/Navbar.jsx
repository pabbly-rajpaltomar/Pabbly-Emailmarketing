import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/pabbly-email-marketing.png'
import toggle_icon from '../../assets/Moon.png'
import sign_in from '../../assets/Sign in.png'
import bars_solid from '../../assets/bars-solid.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo_light}alt=''className='logo'/>
        <button className='Schedule'>
            Schedule a Demo
            </button>
            <button className='Upgrade'>
            Upgrade
            </button>
   <button className='bars-solid'>
   <img className='bars' src={bars_solid} alt="bars" />
        </button>
        <button className='signin'>
        <img className='test' src={sign_in} alt="signin" />
        </button>
        
          
    </div>
  )
}

export default Navbar