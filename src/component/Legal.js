import React from "react";
import styled from "styled-components";
import OurLawyer from "./OurLawyer";

const  Legal = () =>{
    return(
        <Container>
            <Wrapper>
                <HeaderText>Reliable & effective legal solution</HeaderText>
                <Holder>
                    <Card>
                        <Icon>
                            <Wrap>
                                <IconTag/>
                                <Span>Family Law</Span>
                            </Wrap>
                        </Icon>
                        <Div>
                            <Wrap2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec .
                            </Wrap2>
                        </Div>
                    </Card>
                    <Card>
                        <Icon>
                            <Wrap>
                                <IconTag/>
                                <Span>Administrative Law</Span>
                            </Wrap>
                        </Icon>
                        <Div>
                            <Wrap2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec .
                            </Wrap2>
                        </Div>
                    </Card>
                    <Card>
                        <Icon>
                            <Wrap>
                                <IconTag/>
                                <Span>Estate Law</Span>
                            </Wrap>
                        </Icon>
                        <Div>
                            <Wrap2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec .
                            </Wrap2>
                        </Div>
                    </Card>
                </Holder>
                <OurLawyer/>
            </Wrapper>
        </Container>
    )
}
export default Legal; 

const HeaderText = styled.h1`
margin-top:10px;
display:flex;
justify-content:center;
align-items:center;
@media (min-width:60px) and (max-width:832px){ 
    font-size:19px;
    text-align:center;
}
`

const Wrap2 = styled.div`
    width:80%;
    height:100%;

    @media (min-width:60px) and (max-width:832px){ 
        font-size:15px;
        width:70%;
        height:80%;
    }
`

const Div = styled.div`
    width:311px;
    height:100px;
    display:flex;
    justify-content:flex-end;
`

const Span = styled.span`
    margin-left:10px;
    font-weight:bold;
    font-size:23px;   
    @media (min-width:60px) and (max-width:832px){ 
        font-size:20px;
    }
`

const IconTag = styled.div`
    width:60px;
    height:60px;
    background-color:lightgrey;
    border-radius:100%;
`

const Wrap = styled.div`
    width:90%;
    height:100%;
    display:flex;
    align-items:center;
`

const Icon = styled.div`
    width:100%;
    height:30%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:10px;
`

const Card = styled.div`
    width:350px;
    height:200px;
    display:flex;
    flex-direction:column;
    aling-items:center;
    align-items:center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius:5px;
    margin-top:20px;

    @media (min-width:60px) and (max-width:832px){ 
        width:300px;
        height:150px;
        justify-content:space-between;
    }
`

const Holder = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    justify-content:space-around;
    flex-wrap:wrap;
    margin-bottom:15px;

    @media (min-width:60px) and (max-width:832px){ 
        font-size:20px;
    }
`

const Wrapper = styled.div`
    width:90%;
    hight:100%;
    display:flex;
    flex-direction:column;

    p{
        color:rgb(67,33,7);
    }
`

const Container = styled.div`
    width:100%;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
`