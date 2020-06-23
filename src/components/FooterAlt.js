import React from 'react'
import {Header, Icon} from 'semantic-ui-react'
import SocialFollow from './SocialFollows'

class Footer extends React.Component {

 
  render() {
    return (
      
        <div className="footerFlex">
       
           <Header.Content as="h1" className='mainFooter'>
             Elysian Catering
           </Header.Content>
         <div>
           <Header.Content as="h4" className='phoneNum'>
              <Icon name="phone"/>
               <a 
                className="email" 
                href="tel:+1-385-368-3525">
                1-(385)-368-3525
               </a>
            </Header.Content>
           </div>
           <div>
             <Header.Content as="h4">
               <Icon name="mail"/>
               <a 
                 className="email" 
                 href="mailto:asuntagaribay18@gmail.com"
                 rel= "noopener noreferrer"
                 target= "_blank">
                 AsuntaGaribay18@gmail.com
               </a>
             </Header.Content>
          </div>
          <div className="bizAddress">
            <Header.Content as="h4">
             <Icon name="map pin"/>
              <a 
                className="email"  
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://www.google.com/maps/place/640+Wilmington+Ave,+Salt+Lake+City,+UT+84106/@40.7229828,-111.8749303,17z/data=!3m1!4b1!4m5!3m4!1s0x87528abb89b1543f:0x6b967e62340c1c8b!8m2!3d40.7229828!4d-111.8727416"
                > 640 East Wilmington Ave, Salt Lake City, UT 84106 
              </a>
            </Header.Content>
          </div>
          
           <Header.Content as="h4">
             <SocialFollow/>
           </Header.Content>
           <div>
            <Header.Content as="h6">
             © 2019-2020 The Elysian Catering, all rights reserved.
            </Header.Content>
           </div>
          {/* <div className="poweredBy">
            <Header.Content>
              Powered by: <a className="email" href="https://chris-portfo.herokuapp.com/">84Creations</a>
             </Header.Content>
          </div> */}
        </div>
       
     )
    }
  }
    export default Footer
         

         

          
