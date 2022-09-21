import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../Images/law-office-meeting-hokka-ink-pot-YL4GD2W-1536x1026.jpg";
import Img from "../Images/rear-view-of-a-small-statue-of-lady-justice-SNC459L.jpg";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const [datas, setDatas] = useState([]);

  const Api = "http://localhost:4000/lawyer/createProfile";

  useEffect(async () => {
    await axios
      .get(Api)
      .then((res) => {
        setDatas(res.data.data);
        console.log("data successful", res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <SubHead>
            <Avatar />
            <span>Oyilawu Michael</span>
          </SubHead>
          <Div>
            <Selector>
              <Options>Family Law</Options>
              <Options>Administrative Law</Options>
              <Options>Estate Law</Options>
            </Selector>
          </Div>
        </Wrapper>
        {datas.map((props) => (
          <div>
            <Card key={props.id}>
              <Image src={img} />
              <Span>{props.name}</Span>
            </Card>
          </div>
        ))}
      </Container>
      <Footer />
    </>
  );
};
export default Home;

const Avatar = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  border-radius: 100%;
`;

const Span = styled.div`
  height: 20%;
  // background-color:grey;
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  // background-color:blue;
`;

const Card = styled.div`
  width: 250px;
  height: 45vh;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Div = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
`;

const Options = styled.div`
  width: 50%;
  height: 35px;
  padding: 5px;
  border-radius: 5px;
  padding: 5px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Selector = styled.div`
  width: 50%;
  height: 50px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 60px) and (max-width: 768px) {
    font-size: 15px;
    // color:rgb(233,198,153,100%);
    width: 85%;
    border-radius: 7px;
  }
`;

const SubHead = styled.h1`
  font-weight: bold;
  font-size: 30px;
  width: 52%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-break: break-all;
  // color:rgb(233,198,153,100%);
  color: white;
  text-align: center;
  span {
    margin-top: 10px;
  }

  @media (min-width: 60px) and (max-width: 768px) {
    font-size: 18px;
    color: rgb(233, 198, 153, 100%);
    width: 85%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
