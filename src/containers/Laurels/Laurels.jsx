import React from 'react'

import { Subheading, AwardCard } from '../../components'
import { images, data } from '../../constants'

import './Laurels.css'

const Laurels = () => (
    <div className="app__bg app__wrapper section__padding">
        <div className="app__laurels-logo">
            <img src={images.logo} alt="award_logo" />
        </div>
        <div className="app__laurels-content">
            <Subheading title="Awards & recognition" />
            <h1 className="headtext__cormorant">Our Laurels</h1>
            <div className="app__laurels-awards">
                {data?.awards?.map((award, index) => (
                    <AwardCard key={`award_${index}`} {...award} />
                ))}
            </div>
        </div>

        <div className="app__laurels-img">
            <img src={images.laurels} alt="laurels" />
        </div>
    </div>
)

export default Laurels