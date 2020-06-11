import React from 'react'
import {Header, Icon} from 'semantic-ui-react'
import SocialFollow from './SocialFollows'

class Footer extends React.Component {

 
  render() {
    return (
        <>
        <div className="footerGrid">
          <Header.Content className='mainFooter'>Elysian Catering</Header.Content>
           <Header.Content><SocialFollow/></Header.Content>
            <Header.Content className='phoneNum'>
              <Icon name="phone"/><a className="email" href="tel:+1-385-368-3525">1-(385)-368-3525</a>
            </Header.Content>
             <Header.Content className='emailBox'>
               <Icon name="mail"/><a className="email" href="mailto:asuntagaribay18@gmail.com">AsuntaGaribay18@gmail.com</a>
             </Header.Content>
          {/* <div className='bizAddress'>
            <Header.Content>
            business address here 
            </Header.Content>
           </div> */}
         
          {/* <div className="poweredBy">
            <Header.Content>
              Powered by: <a className="email" href="https://chris-portfo.herokuapp.com/">84Creations</a>
             </Header.Content>
          </div> */}
        </div>
       </>
     )
    }
  }
    export default Footer
         

         

          
