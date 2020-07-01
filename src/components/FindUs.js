import React from "react"
import {Image} from "semantic-ui-react"
import WeddingWire from "../Images/weddingWire.png"


const FindUs = () => (
  
    <div className="findUs">
    
      <Image
       className="findUsItem"
       src="https://www.xoedge.com/myaccount/2019/website-share/VendorBadge_AsSeenOnWeb.png"
       alt="As Seen on The Knot"
       size="small"
       href="https://www.theknot.com/marketplace/redirect-2038693?utm_source=vendor_website&utm_medium=banner&utm_term=68b97cb8-4426-42a9-a6eb-48aef0035bbb&utm_campaign=vendor_badge_assets"
       target="_blank"
       rel="noopener noreferrer"
       />
      <Image
       className="findUsItem"
       src={WeddingWire}
       alt="Wedding Wire logo, wedding planning site"
       size="small"
       href="https://www.weddingwire.com/biz/elysian-catering/4e43cba1dbf993d6.html"
       target="_blank"
       rel="noopener noreferrer"
       />
   
    </div>

)
{/* <a target="_blank" 
href="https://www.theknot.com/marketplace/redirect-2038693?utm_source=vendor_website&utm_medium=banner&utm_term=68b97cb8-4426-42a9-a6eb-48aef0035bbb&utm_campaign=vendor_badge_assets">
<img 
alt="As Seen on The Knot"
 border="0"
 src="https://www.xoedge.com/myaccount/2019/website-share/VendorBadge_AsSeenOnWeb.png" 
 width="190">

</a> */}
export default FindUs;