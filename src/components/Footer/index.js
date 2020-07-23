import React from "react"

import * as S from "./styles"

const Footer = () => (
  <S.Footer>
    <p>
      © {new Date().getFullYear()} | 
      <a href="mailto:eliasfaical@gmail.com">eliasfaical@gmail.com</a> | 
      <a href="tel:027988163812">+55 27 98816-3812</a>
    </p>
  </S.Footer>
)

export default Footer;