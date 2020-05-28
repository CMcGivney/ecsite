import React from 'react'
import {Header,} from 'semantic-ui-react'
import TwitterEvents from './TwitterEvents'


const Press = () => (
  <>
       <div className="eventHead" >
        <Header.Content as="h1" className="eventHead">Upcoming Events</Header.Content>
       </div>
  
       <div className="twitter" style={{margin: "3rem 0"}} >
        <TwitterEvents style={{alignText: 'center'}}/>
       </div>
   
  </>
)

export default Press;