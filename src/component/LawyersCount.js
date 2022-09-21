import React from "react";
import style from "styled-components";

const LawyersCount = () => {
  return (
    <Container>
      <Wrapper>
        <ImageHolder>
          <img src={"../Images/1.jpg"} />
        </ImageHolder>
        <Contents>
          <Profile>
            <Title>Anne Green</Title>
            <SubTitle>@TheLawyerOfThePeople</SubTitle>
          </Profile>
          <Description>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
            numune kitab oluşturmak üzere bir yaz numune kitab oluşturmak üzere
            bir yaz
          </Description>
        </Contents>
      </Wrapper>
    </Container>
  );
};

export default LawyersCount;

const Container = style.div`
width: 100%;
min-height: 100vh;
height: 100%;
background: whiite;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper = style.div`
width: 90%;
height: 90vh;
background: silver;
display: flex;
align-items: center;
// justify-content: center;

`;
const ImageHolder = style.div`
width: 50%;
height: 100%;
background: white;
display: flex;
justify-content: center;
align-items: center;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;
const Contents = style.div`
width: 50%;
height: 100%;
background: lavender;
display: flex;
flex-direction: column;
align-items: center;
// justify-content: center;
`;

const Profile = style.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
line-height: 38px;
`;
const Title = style.div`
margin-top: 50px;
font-size: 50px;
font-weight: 600;
`;
const SubTitle = style.div`
font-size: 18px;
font-weight: 500;
`;
const Description = style.div`
margin-top: 20px;
width: 90%;
text-align: center;
`;
