import React, { useState } from "react";
import style from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Header from "./Header";
import axios from "axios";
import img from "../Images/istockphoto-1223671392-612x612-removebg-preview.png";
import Footer from "./Footer";

const Profile = () => {
  const [image, setImage] = useState(img);
  const [avatar, setAvatar] = useState("");

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setAvatar(file);
    setImage(save);
  };

  const Schema = yup.object().shape({
    name: yup.string().required("*"),
    address: yup.string().required("*"),
    email: yup.string().email().required("*"),
    contact: yup.string().required("*"),
    descrption: yup.string().required("*"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const Api = "http://localhost:4000/62be18bcfd6cc207b7b1d9fe/createProfile";

  const Register = async (value) => {
    const { name, email, address, contact, descrption, avatar } = value;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("descrption", descrption);
    formData.append("avater", avatar);

    const config = {
      "content-type": "multipart/form-data",
    };
    console.log(name, email, address, contact, descrption, avatar);
    await axios.post(Api, formData, config).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Header />
      <Container
        onSubmit={handleSubmit((data) => {
          Register(data, avatar);
          reset();
        })}
        type="multipart/form-data"
      >
        <ImageWrap htmlFor="pix">
          <Image src={image} />
          <ImageInput type="file" id="pix" onChange={uploadImage} />
        </ImageWrap>

        <Wrapper>
          <InputWrap>
            <Input
              placeholder="name"
              {...register("name", { required: "error" })}
            />
            <Input
              placeholder="email"
              {...register("email", { required: "error" })}
            />
            <Input
              placeholder="Office Address"
              {...register("officeAdrress", { required: "error" })}
            />
            {/* {errors?.officeAdrress.message} */}
            <Input
              placeholder="contact"
              {...register("contact", { required: "error" })}
            />
            <Input2
              placeholder="Job Description"
              {...register("jobDescription", { required: "error" })}
            />
          </InputWrap>
          <Button type="submit">Submit</Button>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;

const Container = style.div`
width: 100%;
height:120vh;
background: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
// margin-bottom:40px;
// padding-top:40px;
`;
const Wrapper = style.form`
    width: 50%;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
@media (max-width: 768px) and (min-width: 320px){
    width: 85%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;
const ImageWrap = style.label`
width: 50%;
height: 200px;
background: lavender;
display: flex;
flex-direction: column;
align-items: center;
@media (min-width: 60px) and (max-width: 790px) {
  width: 85%;
  height: 200px;
  background-color:lightgrey;
}
`;
const InputWrap = style.div`
display: flex;
flex-direction: column;
width: 100%;
height: 400px;
justify-content: center;
align-items: center;
`;
const Image = style.img`
width: 100%;
height: 100%;
object-fit:contain;
// border: 2px solid;
outline: none;
`;
const ImageInput = style.input`
display: none;
`;
const Label = style.label`
width: 150px;
height: 50px;
background: red;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
margin-top: 5px;
color: white;
`;
const Input = style.input`
width: 98%;
height: 40px;
margin-top: 10px;
padding-left: 10px;
border: solid lightgrey 0.3px;
border-radius: 5px;
outline: none;
@media (min-width: 60px) and (max-width: 790px) {
  width: 98%;
  height: 30%;
  margin-top: 5px;
  font-size: 11px;
  padding-left: 5px;
  padding-right: 0px;
}
`;
const Input2 = style.textarea`
width: 98%;
height: 190px;
margin-top: 10px;
resize: none;
padding-left: 10px;
border: solid lightgrey 0.3px;
border-radius: 5px;
outline: none;
@media (min-width: 60px) and (max-width: 790px) {
  width: 98%;
  height: 54%;
  // outline: flex;
  margin-top: 5px;
  font-size: 11px;
  padding-left: 5px;
  padding-right: 0px;
}
`;
const Button = style.button`
width: 150px;
height: 50px;
background: red;
display: flex;
align-items: center;
justify-content: center;
background-color:red;
border:none;
border-radius: 5px;
font-weight: bold;
font-size:20px;
margin-top: 5px;
color:white;
display:flex;
justify-content:center;
align-items:center; 
transform: scale(1);
transition:all 550ms;

:hover{
    transform: scale(1.05);
    cursor:pointer;
}
`;
