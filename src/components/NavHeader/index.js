import React from "react";
import github from "../../images/github-logo.svg";
import instagram from "../../images/instagram-esbocado.svg";

import * as S from "./styles";

const NavHeader = () => (
  <nav>
    <S.NavMenu>
      <S.ItemMenu>
        <S.LinkTo 
          to="https://github.com/eliasfaical/"
          cover
          duration={0.6}
          title="GitHub"
        >
          <img src={github} alt="GitHub" />
        </S.LinkTo>
      </S.ItemMenu>
      <S.ItemMenu>
        <S.LinkTo 
          to="https://instagram.com/eliasfaical/"
          cover
          duration={0.6}
          title="Instagram"
        >
          <img src={instagram} alt="GitHub" />
        </S.LinkTo>
      </S.ItemMenu>
    </S.NavMenu>
  </nav>
);

export default NavHeader;