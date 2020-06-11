import React from "react"
import {Icon} from "semantic-ui-react"

export default function SocialFollow() {
  return (
    <div>
     
      <a href="https://twitter.com/ElysianCaterer" className="twitter social">
        <Icon name="twitter" size="big" />
      </a>
      <a
        href="https://www.instagram.com/elysiancatering/"
        className="instagram social"
      >
        <Icon name="instagram" size="big" />
      </a>
      <a
        href="https://www.facebook.com/Americasfoodtruck/"
        className="facebook social"
      >
        <Icon name="facebook" size="big" />
      </a>
      <a
        href="https://www.linkedin.com/in/asunta-garibay-117a431a5/"
        className="linkedin social"
      >
        <Icon name="linkedin" size="big" />
      </a>
    </div>
  )
}