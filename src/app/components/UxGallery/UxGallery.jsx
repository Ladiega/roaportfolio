'use client'
import React, { useState } from "react"
import Overlay from "../Overlay/Overlay"
import Image from "next/image";
import imgframe from "../../../../public/img/imgframe.png"

export default function UxGallery() {

  const [overlayOpen, setOverlayOpen] = useState(false);

  const showOverlay = () => {
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  }

  return (
    <section className="uxgallery_container">

      <div className='card_container' onClick={showOverlay}>
        <Image
          className="imgframe"
          src={imgframe}
          alt="imgframe"
        />
        <Overlay isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Image
          className="imgframe"
          src={imgframe}
          alt="imgframe"
        />
        <Overlay isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Image
          className="imgframe"
          src={imgframe}
          alt="imgframe"
        />
        <Overlay isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Image
          className="imgframe"
          src={imgframe}
          alt="imgframe"
        />
        <Overlay isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Image
          className="imgframe"
          src={imgframe}
          alt="imgframe"
        />
        <Overlay isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Image
          className="imgframe"
          src={imgframe}
          alt="imgframe"
        />
        <Overlay isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      
    </section>
  )
}