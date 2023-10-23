import React from 'react'
import menu from "../../assets/images/icon-menu.svg"

const ButtonMenu = ({ handleClick, image }) => {
    return (
        <>
            <button onClick={handleClick} className='nav-container_menu'>
                <img src={image} alt="" />
            </button>
        </>
    )
}

export default ButtonMenu