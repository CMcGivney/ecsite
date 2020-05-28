import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTwitter, faInstagram, faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons"

export default function SocialFollow() {
  return (
    <div className="social-container">
     
      <a href="https://twitter.com/ElysianCaterer" className="twitterIcon social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/elysiancatering/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/Americasfoodtruck/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/asunta-garibay-117a431a5/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  )
}