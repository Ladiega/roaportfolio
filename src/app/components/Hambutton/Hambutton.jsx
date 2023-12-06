'use client'
import { Montserrat } from "next/font/google";
import Link from "next/link"
import React, {useState} from "react";
import HamOpen from "../HamOpen/HamOpen";
import Image from "next/image";
import roa from '../../../../public/img/davidRoa.svg'
import linkedin from '../../../../public/img/linkedin.svg'
import insta from '../../../../public/img/instagram.svg'



const montserrat = Montserrat({ subsets: ['latin'] })


const Ham = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`app ${isOpen ? 'open' : ''}`}>
      <div className="menu-button" onClick={toggleMenu}>
        <div className={`bar bar1 ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar bar2 ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar bar3 ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        
        <nav className='nav_glabal_container'>          
          <ul className={montserrat.className}>
            <Link href='./bio' className='nav_items'>
              <li onClick={toggleMenu}> Bio</li>
            </Link>
            
            
            <Link href='./uxui' className='nav_items'>
              <li onClick={toggleMenu}> UX/UI Desing</li>
            </Link>
            <Link href='./illustrations' className='nav_items'>
              <li onClick={toggleMenu}> Illustration</li>
            </Link>
            <div className='nav_social_icons'>
              <li>
                <Link href='https://www.instagram.com/roa_franco/' target='_blank'>
                  <Image
                    src={insta}
                    alt='instagram log'
                  />
                </Link>
              </li>
              <li>
                <Link href='https://www.linkedin.com/in/davidroaui/' target='_blank'>
                  <Image
                    src={linkedin}
                    alt='linkedin log'
                  />
                </Link>
              </li>
            </div>
            <p>Copyright 2021©</p>
          </ul>

        </nav>
      </div>
    </div>
  );
};

export default Ham;


