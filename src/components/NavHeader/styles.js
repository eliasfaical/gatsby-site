import styled from "styled-components";
import { Link } from "gatsby";

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemMenu = styled.li`
  margin-left: 1.5rem;
`;

export const LinkTo = styled(Link)`
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  display: block;
  border-bottom: 1px solid transparent;
  transition: all 0.25s ease;

  /* &::after {
    content: "";
    height: 2px;
    width: 0;
    background: #feb633;
    display: block;
    margin-top: 3px;
    transition: all 0.25s ease;
  }

  &:hover {
    color: #feb633;

    &::after {
      width: 30px;
    }
  } */
`;