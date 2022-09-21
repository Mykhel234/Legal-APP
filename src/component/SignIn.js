import React, { useContext } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import User from "../globalState/globeState";

const SignUp = () => {
  const myContext = useContext(User);

  const Schema = yup
    .object()
    .shape({
      email: yup.string().email().required("*"),
      password: yup.string().required("*"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const Api = "http://localhost:4000/signIn";

  const Register = async (value) => {
    const { name, email, password } = value;
    await axios.post(`${Api}/${(name, email, password)}`).then((res) => {
      console.log(res);
    });
  };

  return (
    <Container>
      <Card
        onSubmit={handleSubmit((value) => {
          console.log(value);
          Register(value);
          reset();
        })}
      >
        <Logo to="/">LOGO</Logo>
        <Input>
          <span>
            Email
            <p> {errors.email?.message}</p>
          </span>
          <Name placeholder="Email" {...register("email")} />
        </Input>
        <Input>
          <span>
            Password
            <p> {errors.password?.message}</p>
          </span>
          <Name placeholder="Password" {...register("password")} />
        </Input>
        <Button type="submit">Login</Button>
        <span>
          already have an account <a href="/SignUp">Register</a>
        </span>
      </Card>
    </Container>
  );
};

export default SignUp;

const Logo = styled(Link)`
  width: 200px;
  height: 50px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b48757;
  @media (min-width: 60px) and (max-width: 790px) {
    width: 150px;
  }
`;

const Button = styled.button`
  width: 85%;
  height: 45px;
  font-size: 15px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ae7f50;
  border: none;
  border-radius: 5px;
  transform: scale(1);
  transition: all 560ms;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  @media (min-width: 60px) and (max-width: 790px) {
    height: 35px;
    span {
      font-size: 11px;
      margin-top: 5px;
    }
  }
`;

const Name = styled.input`
  width: 98%;
  height: 50%;
  margin-top: 10px;
  border: solid lightgrey 0.3px;
  border-radius: 5px;
  outline: none;
  @media (min-width: 60px) and (max-width: 790px) {
    width: 98%;
    height: 55%;
    margin-top: 5px;
    font-size: 11px;
    padding-left: 5px;
    padding-right: 0px;
  }
`;

const Input = styled.div`
  width: 85%;
  height: 80px;
  margin-bottom: 5px;
  span {
    font-size: 13px;
    display: flex;
    margin-top: 8px;
    p {
      margin: 0px 0px 0px 3px;
      color: red;
      font-size: 15px;
      font-weight: bold;
    }
    div {
      margin: 0px 0px 0px 3px;
      color: red;
      font-size: 11px;
      font-weight: bold;
    }
  }
  @media (min-width: 60px) and (max-width: 790px) {
    height: 65px;
    span {
      font-size: 11px;
      margin-top: 3px;
    }
  }
`;

const Card = styled.form`
  width: 40%;
  height: 80vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 10px;
  a {
    color: blue;
    font-weight: bold;
    text-decoration: none;
    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    height: 99vh;
  }

  @media (min-width: 1440px) {
    height: 85vh;
  }

  @media (min-width: 60px) and (max-width: 790px) {
    width: 90%;
    height: 85vh;
    span {
      font-size: 11px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(63, 29, 4, 10%);
`;
