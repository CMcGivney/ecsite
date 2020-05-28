import React from "react"
import {Header, } from 'semantic-ui-react'

const TitleLogo = () => (
  <div className="title">
  <div className="logo">
   <Header.Content as="h1" className="elysianLogo">Elysian</Header.Content>
   <Header.Content as="h1" className="cateringLogo">Catering</Header.Content>
  </div>
  <Header.Content as="h3" className="motto">You Dream It</Header.Content>
  <Header.Content as="h3" className="motto">We Do It!</Header.Content>
 </div>
)
export default TitleLogo