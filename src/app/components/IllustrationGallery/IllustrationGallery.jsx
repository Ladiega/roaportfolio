'use client'
import React, { useState } from "react"
import OverlayIllustration from "../Overlayillustration/Overlayillustration";
import Image from "next/image";
import imgframe from "../../../../public/img/imgframe.png"
import styles from "../../styles/illustrationGallery.module.css"

export default function UxGallery() {

  const [overlayOpen, setOverlayOpen] = useState(false);

  const showOverlay = () => {
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  }

  return (
    <div className={`${styles.illustration_container} uxgallery_container`}>

      <div className='card_container' onClick={showOverlay}>
        <Image
          className="imgframe"
          src={imgframe}
          alt="imgframe"
        />
        <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Image
          className="imgframe"
          src={imgframe}
          alt="imgframe"
        />
        <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Image
          className="imgframe"
          src={imgframe}
          alt="imgframe"
        />
        <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Image
          className="imgframe"
          src={imgframe}
          alt="imgframe"
        />
        <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Image
          className="imgframe"
          src={imgframe}
          alt="imgframe"
        />
        <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Image
          className="imgframe"
          src={imgframe}
          alt="imgframe"
        />
        <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
      </div>

    </div>
  )
}