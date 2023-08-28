import React, {useState}from 'react'
import classes from './Hero.module.css'
import {FiMenu} from 'react-icons/fi'
import Menu from '../Menu/Menu'
import Image from 'next/image'
import logo from '/public/images/logo.svg'

const Hero = () => {
    const[openModal,setOpenModal]=useState(false)

    const handleMenu=()=>{
        setOpenModal(!openModal)
    }
  return (
    <div className={classes.hero}>
        <div className={classes.header}>
        <Image src={logo} alt='logo'/>
        <nav>
            <ul>
                <li>About</li>
                <li>Career</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
            </ul>
        </nav>

        <div className={classes.menu}>
            <FiMenu className={classes.menuIcon} onClick={handleMenu}/>
        </div>
        </div>
        <div className={classes.words}>
            <h1>Immersive experiences that deliver</h1>
        </div>
        {openModal && <Menu closeModal={handleMenu} />}
    </div>
  )
}

export default Hero