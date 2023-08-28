import React from 'react';
import classes from './Menu.module.css';
import Image from 'next/image';
import close from '/public/images/icon-close.svg';

const Menu = ({ closeModal }) => {
  return (
    <div className={classes.menu}>
      <div className={classes.menuHeader}>
        <h1>loopstudios</h1>
        <div onClick={closeModal}>
          <Image src={close} alt='close icon' />
        </div>
      </div>

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
  );
};

export default Menu;
