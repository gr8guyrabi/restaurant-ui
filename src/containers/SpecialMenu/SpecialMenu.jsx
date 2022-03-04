import React from 'react'

import { Subheading, MenuItem } from '../../components'

import { images, data } from '../../constants'
import './SpecialMenu.css'

const SpecialMenu = () => (
    <div className="app__specialMenu flex__center section__padding">
        <div className="app__specialMenu-title">
            <Subheading title="Menu that fits you palette" />
            <h1 className="headtext__cormorant">Today’s Special</h1>
        </div>
        <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu_wine">
                <p className="app__specialMenu-menu_heading">Wine & Beer</p>
                <div className="app__specialMenu-menu_items">
                    {data?.wines.map((wine, index) => (
                        <MenuItem key={`wine_${index}`} {...wine} />
                    ))}
                </div>
            </div>
            <div className="app__specialMenu-menu_img">
                <img src={images.menu} alt="special_menu" />
            </div>
            <div className="app__specialMenu-menu_cocktail">
                <p className="app__specialMenu-menu_heading">Cocktails</p>
                <div className="app__specialMenu-menu_items">
                    {data?.cocktails.map((cocktail, index) => (
                        <MenuItem key={`cocktail_${index}`} {...cocktail} />
                    ))}
                </div>
            </div>
        </div>
        <div style={{marginTop: '15px'}}>
            <button type="button" className="custom__button">View More</button>
        </div>
    </div>
)

export default SpecialMenu