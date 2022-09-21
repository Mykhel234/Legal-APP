import React from "react";
import styled from "styled-components";
import img from "../Images/Group.jpg";

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={img} />
        <Text>
          <Top>ABOUT</Top>
          <HeaderText>Anastopoulo Law Firm</HeaderText>
          <Descrption>
            <Subhead>
              Platform Attorney is one of the Nigeria's leading, integrated full
              services commercial law firm.
            </Subhead>
            <p>
              At Platform Attorney, we understand the challenges faced by
              businesses, office-workers and individuals today. Our strenght
              comes from a perfect understanding of our client's, the sector
              from which they operate and ultimately, what legal support they
              need. Our lawyers proffer expert, astute and pragmatic advice and
              provide innovative solutions that work for our clients at all
              times.
            </p>
            <p>
              At Anastopoulo Law Firm we understand the difficult circumstances
              our clients and their families face after an accident. We know
              that when you suffer a serious injury or lose a loved one in an
              accident, your life can be changed forever. The results of
              life-changing accidents are why we are committed to providing
              aggressive representation and professional, courteous service to
              our clients who have been a victim of an accident. We are
              committed to obtaining the highest possible settlement on your
              behalf. Unlike many law firms, we do not shy away from jury
              trials. While the majority of our personal injury claims are
              settled out of court, our reputation for engaging in tough and
              successful litigation sets us apart from many other firms.
            </p>
          </Descrption>
        </Text>
      </Wrapper>
    </Container>
  );
};
export default About;

const Top = styled.h1`
  margin-bottom: 3px;
  @media (min-width: 60px) and (max-width: 832px) {
    font-size: 19px;
    text-align: center;
  }
`;

const Subhead = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 19;
  word-break: break-all;
  @media (min-width: 60px) and (max-width: 832px) {
    font-size: 13px;
    text-align: center;
  }
`;

const Descrption = styled.div`
  width: 90%;
  height: 50%;
  text-align: flex-end;

  @media (min-width: 60px) and (max-width: 832px) {
    width: 99%;
    font-size: 10px;
    text-align: center;
    p {
      text-align: center;
    }
  }
`;

const Text = styled.div`
  width: 580px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h1`
  margin-top: 10px;
  font-weight: bolder;
  @media (min-width: 60px) and (max-width: 832px) {
    font-size: 19px;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 555px;
  height: 80vh;
  border-radius: 10px;
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 90%;
  margin-top: 30px;
  min-height: 100%;
  display: flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 60px) and (max-width: 832px) {
    p {
      text-align: center;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 40px;
  margin-bottom: 40px;
`;
