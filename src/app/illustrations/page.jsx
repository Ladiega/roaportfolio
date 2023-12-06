'use client'
import React, { useState } from "react"
import Image from "next/image";
import imgframe from "../../../public/img/imgframe.png"
import OverlayIllustration from "../components/Overlayillustration/Overlayillustration"

export default function Illustration() {

  const [overlayOpen, setOverlayOpen] = useState(false);
  
  const showOverlay = () => {
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  return (
    <section className="illustration_gallery_contanier">

      <div className='card_container' onClick={showOverlay}>
        <div className='card_container' onClick={showOverlay}>
          <Image
            className="imgframe"
            src={imgframe}
            alt="imgframe"
          />
          <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
        </div>        
      </div>
      <div className='card_container' onClick={showOverlay}>
        <div className='card_container' onClick={showOverlay}>
          <Image
            className="imgframe"
            src={imgframe}
            alt="imgframe"
          />
          <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
        </div>
      </div>
      <div className='card_container' onClick={showOverlay}>
        <div className='card_container' onClick={showOverlay}>
          <Image
            className="imgframe"
            src={imgframe}
            alt="imgframe"
          />
          <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
        </div>
      </div>
      <div className='card_container' onClick={showOverlay}>
        <div className='card_container' onClick={showOverlay}>
          <Image
            className="imgframe"
            src={imgframe}
            alt="imgframe"
          />
          <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
        </div>
      </div>
      <div className='card_container' onClick={showOverlay}>
        <div className='card_container' onClick={showOverlay}>
          <Image
            className="imgframe"
            src={imgframe}
            alt="imgframe"
          />
          <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
        </div>
      </div>
      <div className='card_container' onClick={showOverlay}>
        <div className='card_container' onClick={showOverlay}>
          <Image
            className="imgframe"
            src={imgframe}
            alt="imgframe"
          />
          <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
        </div>
      </div>
      
          
        
         </section>
  )
}


