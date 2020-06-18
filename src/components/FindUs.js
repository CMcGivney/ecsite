import React from "react"
import {Image} from "semantic-ui-react"
import TheKnot from "../Images/theKnot.jpeg"
import WeddingWire from "../Images/weddingWire.png"


const FindUs = () => (
  
    <div className="findUs">
    
      <Image
       className="findUsItem"
       src={TheKnot}
       alt="The Knot Logo, wedding planning site"
       href="https://www.theknot.com/marketplace/elysian-catering-salt-lake-city-ut-2038693"
       target="_blank"
       rel="noopener noreferrer"
       />
      <Image
       className="findUsItem"
       src={WeddingWire}
       alt="Wedding Wire logo, wedding planning site"
       href="https://www.weddingwire.com/biz/elysian-catering/4e43cba1dbf993d6.html"
       target="_blank"
       rel="noopener noreferrer"
       />
   
    </div>

)

export default FindUs;