import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton, } from 'react-twitter-embed';
import {Container} from 'semantic-ui-react'

const TwitterProfile = () => (
  <Container>
     <TwitterFollowButton
       screenName={'ElysianCaterer'}
     />
     <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ElysianCaterer"
        options={{height: "80vh", width: "60vw"}}
        sameSite='none'
     />
  </Container>
)

export default TwitterProfile