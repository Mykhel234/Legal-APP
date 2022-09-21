import React from "react";
import style from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const Schema = yup
    .object()
    .shape({
      name: yup.string().required("*"),
      email: yup.string().email().required("*"),
      password: yup.string().required("*"),
      confirm: yup
        .string()
        .oneOf([yup.ref("password"), null], "password dose not match"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const Api = "http://localhost:4000";

  const Register = async (value) => {
    // await fetch.post(`${Api}/register/${value}`)
    await axios.post(`${Api}/${value}`).then((res) => {
      console.log(res);
    });
  };

  return (
    <Container
      onSubmit={handleSubmit((value) => {
        console.log(value);
        reset();
      })}
    >
      <Wrapper>
        <ImageHolder>
          <Image src={"/BlackSuit.jpg"} />
        </ImageHolder>
        <ContentHold>
          <Heading>Justice For All</Heading>
          <Content>Sign Up</Content>
          <Form>
            <TopInput>
              <Input placeholder="Name" {...register("name")} />
              <Input placeholder="Email" {...register("email")} />
            </TopInput>
            <BottomInput>
              <Input1 placeholder="Password" {...register("password")} />
              <Input1 placeholder="Confirm-Password" {...register("confirm")} />
            </BottomInput>
            <Button type="submit">Submit</Button>
          </Form>
        </ContentHold>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = style.form`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper = style.div`
width: 90%;
height: 90vh;
background: lavender;
display: flex;
border-radius: 5px;
`;
const ImageHolder = style.div`
width: 50%;
height: 100%;
background: #0156FE;;
order: 2;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 768px){
    display: none;
}
`;
const Image = style.img`
object-fit: cover;
width: 550px;
height: 500px;
`;
const ContentHold = style.div`
width: 50%;
height: 100%;
// background: lightgrey;
display: flex;
flex-direction: column;
align-items: center;
// justify-content: center;
order: 1;
@media screen and (max-width: 768px){
    width: 100%;
}

`;

const Heading = style.div`
    width: 100%;
    height: 15%;
    background: rgba(1,86,254, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
`;
const Content = style.div`
width: 85%;
height: 15%;
font-size: 20px;
font-weight: bold;
display: flex;
align-items: end;
`;
const Form = style.div`
width: 100%;
height: 70%;
// background: lavender;
display: flex;
flex-direction: column;
align-items: center;
`;
const TopInput = style.div`
width: 100%;
// display: flex;
height: 15%;
// background: blue;
display: flex;
justify-content: center;
align-items: center;
`;
const Input = style.input`
width: 40%;
margin-left: 10px;
padding: 15px 8px;
border-radius: 5px;
border: silver 2px solid;

`;
const BottomInput = style.div`
width: 100%;
height: 30%;
// background: blue;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`;
const Input1 = style.input`
display: block;
width: 85%;
margin-left: 10px;
padding: 15px 8px;
border-radius: 5px;
border: silver 2px solid;
`;
const Button = style.button`
margin-top: 20px;
width: 85%;
padding: 15px 8px;
height: 60px;
border-radius: 5px;
border: silver 2px solid;
background: #0156FE;
@hover{
    cursor: pointer;
    transition: all 400ms;
    transform: scale(1.1)
}
`;
// const Form = style.div``
