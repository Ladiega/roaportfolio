
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import roa from '../../../../public/img/davidRoa.svg'
import roa2 from '../../../../public/img/roa2.png'
import linkedin from '../../../../public/img/linkedin.svg'
import insta from '../../../../public/img/instagram.svg'
import Ham from '../Hambutton/Hambutton'


const montserrat = Montserrat({ subsets: ['latin'] })

export default function Navbar() {

  

  return (
    <nav className='nav_glabal_container'>
      <div className='nav_header_container'>

        <Image
          className='roa1'
          width={190}
          src={roa}
          alt="David Roa logo"
         
        />
        <div className='nav_icons_movile'>
          <Image
            className='roa2'
            src={roa2}
            alt='logo2'
          />

          <Ham />
        </div>

      </div>


      <div className='nav_items_container'>
        <ul className={montserrat.className}>
          <Link href='./bio' className='nav_items'>
            <li> Bio</li>
          </Link>

          <Link href='./uxui' className='nav_items'>
            <li> UX/UI Desing</li>
          </Link>

          <Link href='./illustrations' className='nav_items'>
            <li> Illustration</li>
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
      </div>


    </nav>

  )
}