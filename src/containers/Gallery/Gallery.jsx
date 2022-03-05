import React, { useRef } from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { Subheading } from '../../components'
import { images } from '../../constants'

import './Gallery.css'
const Gallery = () => {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const {current} = scrollRef

        if(direction === 'left') {
            current.scrollLeft -= 300
        } else {
            current.scrollLeft += 300
        }
    }

    const ImagesGallery = [ images.gallery01, images.gallery02, images.gallery03, images.gallery04 ]

  return (
    <div className="app__gallery flex__center">
        <div className="app__gallery-content">
            <Subheading title="Instagram" />
            <h1 className="headtext__cormorant">Photo gallery</h1>
            <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <button className="custom__button" type="button">View More</button>
        </div>
        <div className="app__gallery-images">
            <div ref={scrollRef} className="app__gallery-images_container">
                {ImagesGallery.map((image, index) => (
                    <div key={`gallery_images_${index}`} className="app__gallery-images_card flex__center">
                        <img src={image} alt="gallery_image" />
                        <BsInstagram className="app__gallery-images_card-icon" />
                    </div>
                ))}
            </div>
            <div className="app__gallery-images_arrows">
                <BsArrowLeftShort className="app__gallery-images_arrows-icon" onClick={() => scroll('left')} />
                <BsArrowRightShort className="app__gallery-images_arrows-icon" onClick={() => scroll('right')} />
            </div>
        </div>
    </div>
  )
}

export default Gallery