import React from 'react'
import {Header, Image,} from 'semantic-ui-react'
import Twitter from './Twitter.js'
import TitleLogo from './TitleLogo.js'
import YouTube from 'react-youtube-embed'
import bbbsUtah from "../Images/BBBSUtah-logo.png"
import catholicUtah from "../Images/catholicCommunity.jpg"
import voaUtah from "../Images/volunteersOfAmerica.png"
import { Parallax,} from 'react-parallax';
import BackImage from '../Images/ninePlates.jpg'

const insideStyles = {
  background: "#DBAE4B",
  padding: "20px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "50%",
  height: '22rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const Home = () => (  
  <>
    <Parallax
      style={{marginTop:'2.2rem'}}
      bgImage={BackImage}
      bgImageAlt="Nine styled food plates"
      strength={-300}
       >
        <div className="titleBox" >
         <div style={insideStyles}>
          <TitleLogo/>
         </div>
        </div>
     </Parallax>

     <div className="homeContentGrid">

      <div className='missionStatement'>
       <Header.Content as="h4" style={{margin: "0 1em .5em 1em"}}>Food should taste good. It should feel good. It should do good things for you and the world around you.</Header.Content>
       <Header.Content as="p">~ The Elysian Catering Promise ~</Header.Content>
      </div> 
  
     <div className="youtubeContainer" >
      <div className="mediaTitle">
        <Header.Content as="h3" className="aboutHead">Want to see what we are up too? </Header.Content>
        <Header.Content as="h5" className="aboutMeta">*Subscribe to Chef AG's YouTube!</Header.Content>
      </div>
      <div className="youtube">
        <YouTube id="2B9ZMw1kp9g" appendSrc="?autoplay=0&playlist=2B9ZMw1kp9g&loop=1&modestbranding=1&SameSite=none'&Secure"/>
      </div>
    </div>

    <div className="twitterContainer">
     <div className="mediaTitle">
       <Header.Content as="h3" className="aboutHead">Want to know where we are cooking? </Header.Content>
       <Header.Content as="h5" className="aboutMeta">*Follow us on Twitter!</Header.Content>
     </div>
     <div className='twitter'>
      <Twitter style={{"alignText": "center"}}/>
     </div>
     </div>
        
      
    <div className="affiliations">
      <Header.Content as="h2" className="com_header">Community Affiliations</Header.Content>
       <Image.Group size="medium" className="imageGroup">
        <Image 
         className="bbbsUtah"
         src={bbbsUtah} 
         alt="Big Brother Big Sister of Utah Link"
         href="https://bbbsu.org/"
         rel="noopener noreferrer"
         target="_blank">
        </Image>
        <Image 
         className="catholicCommunity"
         src={catholicUtah} 
         alt="Catholic Community Services of Northern Utah"
         href="https://www.ccsnorthernutah.org/"
         rel="noopener noreferrer"
         target="_blank">
        </Image>
        <Image 
         className="voAmerica"
         src={voaUtah} 
         alt="Volunteers of America utah"
         href="https://www.voaut.org/"
         rel="noopener noreferrer"
         target="_blank">
        </Image>
       </Image.Group>
      </div>
    </div>
  </> 
)



export default Home;