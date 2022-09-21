import React from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";

const  Total = () =>{
    return(
        <>
        <AnimationOnScroll animateIn="animate__bounceIn">
            <Container>
                <Wrapper>
                    <SubHead>
                    Why Choose Us
                    </SubHead>
                    <Span>
                        Praesent id leo iaculis, luctus orci nec, lacinia nisi.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </Span>
                    <Holder>
                        <Counter>
                            <Count>1000</Count>
                            Lawyers
                        </Counter>
                        <Counter2>
                            <Count>20000</Count>
                            Lawyers
                        </Counter2>
                        <Counter>
                            <Count>4000</Count>
                            Lawyers
                        </Counter>
                    </Holder>
                </Wrapper>
            </Container>
        </AnimationOnScroll>
            <Over/>
        </>
    )
}
export default Total; 

const Count = styled.div`
    font-size:50px;
    color:rgb(205,155,93);
    font-weight:bolder;

    @media (min-width:60px) and (max-width:768px){
    font-size:15px;
    }
`

const Counter = styled.div`
    width:200px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;   
    @media (min-width:60px) and (max-width:768px){
        width:100px;
    }
`

const Counter2 = styled.div`
    width:300px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    border-right:solid 2px rgb(205,155,93);
    border-left:solid 2px rgb(205,155,93);

    @media (min-width:60px) and (max-width:768px){
        width:200px;
    }
`

const Holder = styled.div`
    width:100%;
    height:250px;
    display:flex;
    justify-content:center;
    align-items:center;
    justify-content:space-around;
`

const Span = styled.span`
    width:70%;
    font-size:20px;
    text-align:center;

    @media (min-width:60px) and (max-width:768px){
        width:90%;
        font-size:15px;
    }
`

const SubHead = styled.h1`
    font-weight:bold;
    font-size:35px;
    color:rgb(233,198,153,100%);

    @media (min-width:60px) and (max-width:768px){
        font-size:20px;
        color:rgb(233,198,153,100%);
    }
`

const Wrapper = styled.div`
    width:90%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    z-index:100;
    color:white;
    // background-color:white;
`

const Over = styled.div`
    width:100%;
    height:50vh;
    position:relative;
    margin-top:40px;
    background:rgb(0,0,0,60%);

    @media (min-width:60px) and (max-width:768px){
        height:55vh;
        margin-top:10px;
    }
`

const Container = styled.div`
    width:100%;
    height:50%;
    background-image:url("../Images/10.jpg");
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    position:absolute;
    margin-top:40px;

    @media (min-width:60px) and (max-width:768px){
        height:55vh;
        margin-top:10px;
    }
`