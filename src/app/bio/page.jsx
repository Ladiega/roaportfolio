import { Roboto } from "next/font/google"
import Image from "next/image"
import profile from '../../../public/img/profiletest.png'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})
export default function Bio() {

  return (
    <main className="home_container" >
      <div className="circle">
        <Image
          src={profile}
          alt="profile test"
          width={205}
        />
      </div>
      <div className="home_text_container">
        <p className={roboto.className}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p><br /><br />
        <p className={roboto.className}>Contact: davidroaf@gmail.com <br /> Current Residence: Alexandria, VA</p>
      </div>
    </main>
  )
}
