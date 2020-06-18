import React from 'react'
import {Header, Image, Container} from 'semantic-ui-react'
import HeadShot from '../Images/B&WShot1.PNG'

const About = () => (
  <Container text style={{minHeight: "95vh"}}>
     <div className='contactTitle'>
      <Header.Content as="h2" className= "aboutHead" >Asunta Garibay</Header.Content>
      <Header.Content as="p" className= "aboutMeta">Chef & Founder</Header.Content>
     </div>
    <div className="aboutMeContainer">
     <div className="personalImg">
      <Image
       src = {HeadShot}
       alt= "Head shot of Elysian Chef & Founder"
      //  floated= "left"
       size="small"
       />
     </div>
     <div className="aboutMeText">
       <p> My passion for cooking began at the age of three cooking with my grandmother.  
           Every Sunday morning we would make homemade pasta, scratch sauce and fresh meatballs for our family's Sunday dinner. 
           A memory and experience I carry with me everyday, in my food and my community involvement. 
       </p>
       <p>
           I attended Le Cordon Bleu Los Angeles, graduated in 2007 with high honors, a 3.93.
           I started my career in 2007 at <a href="https://www.citrinandmelisse.com/melissemenu">Melisse</a> in Santa Monica. 
           I am a Michelin star trained chef from Los Angeles where I worked at Melisse and <a href="https://www.patinagroup.com/patina-restaurant/menu">Patina</a>.  
           As a lead Chef I have cooked for many award shows in Los Angeles; MTV awards, The Emmys, The Oscars & The Screen Actors Guild. 
           Currently a member in good standing with the American Culinary Federation since 2007, the IACP (International Association of Culinary Professionals) since 2017, Member of Utah Restaurant Association since 2017, the WCP (Women Chef Professionals) since 2017, ServeSafe management certified since 2014, and HAACP certified since 2019.
       </p>
     </div>
    <div>
      {/* <Header.Content as="h1" >Local First Ensures The Freshest Flavors</Header.Content> */}
    </div>
   </div>
  </Container>
)

export default About