import styled from 'styled-components'
import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Header = styled.header`
  padding: .5rem 1rem;
  position: fixed;
  width: 100%;
  z-index: 5;

  h1 {
    width: 35px;
  }

  &.affix_header {
    box-shadow: 0px 3px 8px 0px rgba(21, 47, 95, 0.12);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
