import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// Components
import NavHeader from "../NavHeader";

// Image logo
import logo from "../../images/eliasfaical.svg";

// Style
import * as S from "./styles.js";

const Header = ({ siteTitle }) => (
  <S.Header>
    <S.Container>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img src={logo} alt="Elias Faical" />
        </Link>
      </h1>

      <NavHeader />
    </S.Container>
  </S.Header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
