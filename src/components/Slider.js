import React from 'react'
import { Zoom } from 'react-slideshow-image'
import FoamCaviar from '../Images/foamCaviar.jpeg'
import salmonCuc from '../Images/salmonCuc.jpeg'
import shavedSalad from '../Images/shavedSalad.jpeg'
import cucumberSalad from '../Images/cucumberSalad.jpeg'
import nicoiseSpin from '../Images/nicoiseSpin.jpeg'
import saladOne from '../Images/saladOne.jpeg'
import tunaCan from '../Images/tunaCan.jpeg'
import appDish from '../Images/appDish.jpeg'
import lobstahAmaebi from '../Images/lobstahAmaebi.jpeg'
import shotGlassDessert from '../Images/shotGlassDessert.jpeg'
import sweetFriedPrawns from '../Images/sweetFriedPrawns.jpeg'
import yingYangSoup from '../Images/yingYangSoup.jpeg'
import peachSalad from '../Images/peachSalad.jpeg'
import chartBoard from '../Images/chartBoard.jpeg'
import dessertOne from '../Images/dessertOne.jpeg'
import dessertTwo from '../Images/dessertTwo.jpeg'
import dessertThree from '../Images/dessertThree.jpeg'
import {Image,} from "semantic-ui-react"

 

const images = [
  FoamCaviar, salmonCuc, shavedSalad, cucumberSalad, nicoiseSpin,
  saladOne, tunaCan, appDish, lobstahAmaebi, sweetFriedPrawns, yingYangSoup, peachSalad, chartBoard,
  dessertOne, dessertTwo, dessertThree, shotGlassDessert,
];
 

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <Image key={index} style={{width: "100%"}} src={each} alt={images[index]} />)
          }
        </Zoom>
      </div>
    )
}

export default Slideshow;