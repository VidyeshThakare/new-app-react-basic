import React, {useState} from 'react'
import "./Navbar.css"
import { getImageUrl } from '../../utils'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <a className="title" href="/">Portfolio</a>
            <div className='menu'>
                <img className='menuBtn' src="./assets/nav/menuIcons.png" alt="" />
                <ul className='menuItems'>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#Experience">Experience</a>
                    </li>
                    <li>
                        <a href="#Project">Project</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar