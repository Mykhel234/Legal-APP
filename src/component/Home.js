import React from "react";
import styled from "styled-components";
import JusticePage from "./JusticePage";
import Legal from "./Legal";
import About from "./About";
import Total from "./Total";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <JusticePage />
        <Legal />
        <Total />
        <About />
      </Container>
      <Footer />
    </>
  );
};
export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
