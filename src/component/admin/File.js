import React from "react";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

const File = () => {
  return (
    <>
      <Container>
        <Side>
          <Logo to="/" />
          <Wrapper>
            <User>Samuel Omamuzo</User>
          </Wrapper>
        </Side>
        <Display>
          <Dashboard />
        </Display>
      </Container>
    </>
  );
};

export default File;

const User = styled.div`
  font-size: 25px;
  color: white;
  font-weight: bold;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  background-color: grey;
  margin-top: 30px;
`;

const Logo = styled(Link)`
  width: 100%;
  height: 50px;
  background-color: green;
  margin-top: 10px;
`;

const Display = styled.div`
  width: 80%;
  height: 100vh;
  background: white;
  overflow-y: scroll;
`;

const Side = styled.div`
  width: 20%;
  height: 100vh;
  background: lightgrey;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
