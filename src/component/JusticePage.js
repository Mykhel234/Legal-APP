import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Img from "../Images/rear-view-of-a-small-statue-of-lady-justice-SNC459L.jpg"

const JusticePage = () =>{

    return(
        <>
        <Container>
            <Wrapper>
                <Content>
                    <Title>
                        Introducing Y-G Law Firm
                        We’re Ready For A Fight Against Injustice
                    </Title>
                    <Button
                        to = "/signUp"
                    >
                        Register as a lawyer
                    </Button>
                </Content>
            </Wrapper>
        <Over/>
        </Container>
        </>
    )
}
export default JusticePage;

const Over = styled.div`
    width:100%;
    height:100%;
    position:relatives;
    background:rgb(0,0,0,30%);
`

const Button = styled(Link)`
    text-decoration:none;
    color:white;
    width:200px;
    height:55px;
    margin-top:20px;
    border-radius:5px;
    background-color:rgb(63,29,4,90%);
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

    @media (min-width:60px) and (max-width:832px){
        width:100px;
        height:40px;
        margin-top:20px;
        border-radius:5px;
        background-color:black;
        font-size:10px;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`

const Title = styled.div`
    font-size:40px;
    font-weight:bold;
    text-align:center;
    padding:5px;
    p{
        margin-top:0px;
        margin-bottom:10px;
    }
    @media (min-width:60px) and (max-width:832px){ 
       font-size:25px;
    }
`

const Content = styled.div`
    width:55%;
    height:50%;
    display:flex;
    background-color:rgb(90,73,60,40%);
    backdrop-filter:blur(50px);
    justify-content:center;
    align-items:center;
    color:rgb(255,255,255);
    flex-direction:column;
    border-radius:10px;

    @media (min-width:60px) and (max-width:832px){ 
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        width:99%;
        margin-top:100px;
    }
    @media (max-width:1024px){ 
        width:95%;
        margin-top:100px;
    }

    span{
        text-align:center;
        @media (min-width:60px) and (max-width:832px){
            font-size:13px;
            text-align:center;
        }
    }
`

const Wrapper = styled.div`
    width:90%;
    height:100%;
    // background-color:lightgrey;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    position:absolute;

    @media (min-width:2560px){
        width:1440px;
    }
`

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    background-image:url(${Img});
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
`