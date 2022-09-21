import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo to="/">Logo</Logo>
        <Navigator>
          <Nav to="/">About</Nav>
          <Nav to="/AllLawyer">All Lawyers</Nav>
          <Post to="/:id/Profile">Add a lawyer</Post>
          <Avater to="/User" />
        </Navigator>
      </Wrapper>
    </Container>
  );
};
export default Header;

const Post = styled(Link)`
  text-decoration: none;
  width: 100px;
  height: 60%;
  color: black;
  border-radius: 5px;
  background: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

const Avater = styled(Link)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 0px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Nav = styled(Link)`
  text-decoration: none;
  color: black;
  height: 60%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  font-weight: bold;
`;

const Navigator = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 30px;
  color: white;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

  @media (min-width: 2560px) {
    width: 1440px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  backdrop-filter: blur(5px);
  background-color: rgb(233, 198, 153, 50%);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;
