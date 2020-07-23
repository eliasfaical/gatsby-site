import styled from 'styled-components';
import { Link } from 'gatsby';
import bgHome from "../../images/bg.jpg";

export const StyledSection = styled.section`
  background: #fbfbfb;
  padding: 2rem 0;
  height: 100vh;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: url(${bgHome}) no-repeat center / cover;
  background-attachment: fixed;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    position: absolute;
    z-index: 1;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 4;

  h1 {
    font-weight: 600;
    font-size: 4.4rem;
    color: #fff;
    margin-bottom: .5rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.6;
    color: #fff;
    max-width: 450px;
    margin: 0 auto;
  }
`;

export const BtnHero = styled(Link)`
  font-weight: 500;
  border: 2px solid #feb633;
  line-height: 55px;
  padding: 0 40px;
  font-size: 1.2rem;
  text-transform: capitalize;
  color: #fff;
  border-radius: 4px;
  display: table;
  text-decoration: none;
  margin: 2rem auto 0;
  transition: all 0.3s;
  background: #feb633;
  box-shadow: 0px 20px 80px 0px rgba(0,0,0,0.3);
`;
