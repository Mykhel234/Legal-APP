import React from "react";
import style from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Card>
        <Wrap>
          <Title>
            <span>WELCOME</span>
            <div>PLEASE LOGIN</div>
          </Title>
          <InputHold>
            <span>Email Address*</span>
            <Input placeholder="Please Enter your Email" />
            <span>Password*</span>
            <Input placeholder="Please Enter your Password" />
            <button>SUBMIT</button>
          </InputHold>
          <div>
            Don't have an account? then<Span to="/login/signup">SignUp</Span>
          </div>
        </Wrap>
      </Card>
    </Container>
  );
};

export default Login;

const Container = style.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: url("/femalelawyer.jpg");
`;
const Card = style.div`
width: 900px;
height: 700px;
border: silver 5px solid;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
`;
const Span = style(Link)`
text-decoration: none;
// color: black;
font-weight: bolder;
margin-left: 5px;
`;
const Wrap = style.div`
width: 90%;
height: 95%;
display: flex;
border-radius: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
background: grey;
opacity: 0.9;
div{
    margin-top: 20px;
    font-weight: bold;
}
`;
const Title = style.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
line-height: 20px;

div{
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
};
span{
    font-size: 23px;
    font-weight: bold;
    margin-top: 30px;
    // background: silver;
};
`;
const Avatar = style.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Image = style.img`
width: 150px;
height: 150px;
background: white;
border-radius: 100%;
cursor: pointer;
display: flex;
justify-content: center;
object-fit: cover;
`;
const Label = style.label`
padding: 0 10px;
margin-top: 10px;
border-radius: 10px;
width: 150px;
height: 60px;
background: gold;
// border: 5px black solid;
cursor: pointer;
font-weight: bold;
opacity: 0.9;
display: flex;
align-items: center;
:hover{
transform: scale(1.04);
transition: all 450ms;
background: gold;
opacity: 0.7;
// color: white;
}
`;
const ImageInput = style.input`
cursor: pointer;
display: none;
`;
const InputHold = style.div`
margin-top: 20px;
width: 95%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
span{
  width: 95%;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
};
button{
  margin-top: 20px;
  border-radius: 10px;
    width: 150px;
    height: 60px;
    border: 0;
    cursor: pointer;
    font-weight: bold;
    background: gold;
    opacity: 0.9;
    :hover{
        transform: scale(1.1);
        transition: all 450ms;
        background: gold;
        opacity: 0.8;
        // color: white;
    }
}
`;
const Input = style.input`
display: block;
width: 95%;
height: 60px;
padding: 0 5px;
border-radius: 5px;
border: 0;
margin: 5px 0;
cursor: pointer;
`;
const Input1 = style.input`
display: block;
width: 90%;
height: 60px;
padding: 0 5px;
border-radius: 5px;
border: 0;
margin: 5px 0;
cursor: pointer;
`;
const Hold = style.div`
width: 95%;
// background: green;
display: flex;
// flex-direction: column;
align-items: center;
// justify
`;
const Hold1 = style.div`
width: 50%;
span{
  margin-top: 15px;
};
`;
const Hold2 = style.div`
width: 50%;
span{
  margin-top: 15px;
};
`;
