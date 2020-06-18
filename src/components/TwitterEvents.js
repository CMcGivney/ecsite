import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton, } from 'react-twitter-embed';
import {Container} from 'semantic-ui-react'

const TwitterEvents = () => (
  <Container>
     <TwitterFollowButton
       screenName={'ElysianEvents1'}
     />
     <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ElysianEvents1" 
        options={{height: "70vh", width: "50vw"}}
        sameSite='none'
     />
  </Container>
)

export default TwitterEvents