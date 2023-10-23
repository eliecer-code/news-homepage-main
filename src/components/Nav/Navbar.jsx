import React, { useState } from 'react'
import logo from "../../assets/images/logo.svg"
import './navbar.css'
import ButtonMenu from '../menu/ButtonMenu'
import menu from '../../assets/images/icon-menu.svg'
import close from '../../assets/images/icon-menu-close.svg'

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    console.log(clicked)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <nav className='nav-container'>
            <img className='nav-container_logo' src={logo} alt="page-logo" />
            <div className={`nav-links ${clicked ? 'active' : ''}`} >
                <a href="#">Home</a>
                <a href="#">New</a>
                <a href="#">Popular</a>
                <a href="#">Trending</a>
                <a href="#">Categories</a>
            </div>
            <ButtonMenu
                handleClick={handleClick}
                image={`${clicked ? close : menu} `} />
        </nav>
    )
}

export default Navbar