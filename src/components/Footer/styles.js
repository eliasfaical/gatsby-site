import styled from 'styled-components';

export const Footer = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  background: transparent;
  position: absolute;
  width: 100%;
  z-index: 10;
  bottom: 0;

  p {
    font-size: .9rem;
    margin: 0;
    color: #f5f8fc;
    font-weight: 300;
  }

  a {
    color: #f5f8fc;
    display: inline-block;
    text-decoration: none;
    margin: 0 5px;
  }
`;
