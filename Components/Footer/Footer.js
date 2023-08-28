import React from 'react'
import classes from './Footer.module.css'
import Image from 'next/image'
import logo from '/public/images/logo.svg'
import facebook from '/public/images/icon-facebook.svg'
import twitter from '/public/images/icon-twitter.svg'
import pintrest from '/public/images/icon-pinterest.svg'
import instagram from '/public/images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className={classes.footer}>
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
        </div>

        <div className={classes.socials}>
            <div className={classes.social}>
                <Image className={classes.socialIcon} src={facebook} alt='facebook logo'/>
                <Image className={classes.socialIcon} src={twitter} alt='twitter logo'/>
                <Image className={classes.socialIcon} src={pintrest} alt='pintrest logo'/>
                <Image className={classes.socialIcon} src={instagram} alt='instagram logo'/>
            </div>
            <div className={classes.copyright}>
                <p> &#169; 2021 loopstudios. All rights reserved
</p>
            </div>
        </div>
    </div>
  )
}

export default Footer