import mountain1 from "../assets/1.jpg"
import mountain2 from "../assets/2.jpg"
import mountain3 from "../assets/3 (1).jpg"
import mountain4 from "../assets/4.jpg"
import "./DestinationStyles.css"
import React from 'react'
import DestinationData from "./DestinationData"

const Destination = () => {
  return (
    <div className='Destination'>
        <h1>Popular Destination</h1>
        <p>
            Tour give you the opportunity to see a lot, within a time frame.
        </p>

        <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Batangas is also famous for the Camden market on the north side and the Portobello road on the west side.To enjoy the shopping, it is better to get out of the metro by foot to these markets, where you can see colorful houses and shops that sell old crafts on the street leading to the market. The most beautiful part of London is the dynamic intercultural integration that a visitor can recognize the city by walking on the sidewalk, riding the city’s famous red bus or by traveling on the subway."
       img1={mountain1}
       img2={mountain2}
       />

        <DestinationData
        className="first-des-reverse"
        heading="Mr. Daguldul, Batangas"
        text="Batangas is also famous for the Camden market on the north side and the Portobello road on the west side.To enjoy the shopping, it is better to get out of the metro by foot to these markets, where you can see colorful houses and shops that sell old crafts on the street leading to the market. The most beautiful part of London is the dynamic intercultural integration that a visitor can recognize the city by walking on the sidewalk, riding the city’s famous red bus or by traveling on the subway."
        img1={mountain3}
        img2={mountain4}
       />

      <h1>Hello World</h1>


        
        </div>

  )
}

export default Destination