import React from 'react'
import {Header,} from 'semantic-ui-react'
import TwitterEvents from './TwitterEvents'


const Press = () => (
  <>
        <div className='contactTitle'>
      <Header.Content as="h2" className= "aboutHead" >Upcoming Events</Header.Content>
      <Header.Content as="p" className= "aboutMeta">*stop on by</Header.Content>
     </div>
  
       <div className="twitter" style={{margin: "3rem 0"}} >
        <TwitterEvents style={{alignText: 'center'}}/>
       </div>
   
  </>
)

export default Press;