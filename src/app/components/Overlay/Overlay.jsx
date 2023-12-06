'use client'
import { Roboto } from 'next/font/google';
import React from 'react';
import Image from "next/image"
import x from "../../../../public/img/x.svg"
import Overlayimg from '../../../../public/img/overlayimg.png'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100','300','400','500','700','900']
})

const Overlay = ({ isOpen, onClose }) => {
  return (
    <section className={roboto.className}>
      {isOpen && (
        <div className="overlay"  onClick={onClose}>
          <div className={`overlay-content ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>
              <Image
                src={x}
                alt='x button'
              />
            </button>
            <h2>Project Name</h2>
            <div className='overlay_img_container'>image</div>
            <Image
              src={Overlayimg}
              alt='onerlay img'
              width={849}
              height={477}
            />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea voluptatum, dignissimos maxime repudiandae obcaecati amet modi eveniet, iste ducimus neque similique minus in provident numquam nostrum soluta placeat eius! Dolorem explicabo est fugit odit et hic iusto tenetur perspiciatis nobis! Quia numquam voluptatum quidem harum mollitia perferendis porro dolore dolorum at alias quasi quos nostrum eaque sapiente iste, voluptas, facilis ullam natus perspiciatis vero rerum beatae incidunt enim unde! Voluptates fugit perferendis ea architecto inventore sapiente numquam vel, eius id cumque! Et soluta error debitis quas. Molestias perferendis libero harum dolore repellendus aliquid quasi sapiente. Quo ex enim necessitatibus consequatur fugiat nesciunt eum modi optio, corporis autem exercitationem quisquam officiis architecto. </p>

            <h2>Project Name</h2>
            <div className='overlay_img_container'>image</div>
            <Image
              src={overlayimg}
              alt='onerlay img'
              width={849}
              height={477}
            />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea voluptatum, dignissimos maxime repudiandae obcaecati amet modi eveniet, iste ducimus neque similique minus in provident numquam nostrum soluta placeat eius! Dolorem explicabo est fugit odit et hic iusto tenetur perspiciatis nobis! Quia numquam voluptatum quidem harum mollitia perferendis porro dolore dolorum at alias quasi quos nostrum eaque sapiente iste, voluptas, facilis ullam natus perspiciatis vero rerum beatae incidunt enim unde! Voluptates fugit perferendis ea architecto inventore sapiente numquam vel, eius id cumque! Et soluta error debitis quas. Molestias perferendis libero harum dolore repellendus aliquid quasi sapiente. Quo ex enim necessitatibus consequatur fugiat nesciunt eum modi optio, corporis autem exercitationem quisquam officiis architecto. </p>


          </div>
        </div>
      )}
    </section>
  );
};

export default Overlay;