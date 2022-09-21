import React from "react";
import styled from "styled-components";
import img from "../Images/attractive-male-executive-manager-in-formal-outft-D64RHTY.jpg"
import img2 from "../Images/confident-handsome-businessman-in-restaurant-RZHFMVN.jpg"
import img3 from "../Images/happy-experienced-female-lawyer-standing-in-front-2UK4DZR.jpg"
import img4 from "../Images/young-confident-businessman-or-lawyer-in-elegant-s-BYTZYFP.jpg"

const  OurLawyer = () =>{
    return(
        <Container>
            <Top>OUR TOP RATED LAWYERS</Top>
            <Wrapper>
               <Card>
                   <Image src={img}/>
                   <Span>ugoeihfidhfdfdfehh</Span>
               </Card>
               <Card>
                   <Image src={img2}/>
                   <Span>ugoeihfidhfdfdfehh</Span>
               </Card>
               <Card>
                   <Image src={img3}/>
                   <Span>ugoeihfidhfdfdfehh</Span>
               </Card>
               <Card>
                   <Image src={img4}/>
                   <Span>ugoeihfidhfdfdfehh</Span>
               </Card>
            </Wrapper>
        </Container>
    )
}
export default OurLawyer;

const Top = styled.h1`
@media (min-width:60px) and (max-width:832px){ 
    font-size:19px;
    text-align:center;
}
`

const Span = styled.div`
    height:20%;
    // background-color:grey;
`

const Image = styled.img`
    width:100%;
    height:80%;
    object-fit: cover;
    // background-color:blue;
`

const Card = styled.div`
    width:250px;
    height:45vh;
    background-color:white;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    overflow:hidden;
    margin:10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    
    @media (min-width:2560px){
        width:1440px;
    }
`

const Container = styled.div`
    width:100%;
    height:50%;
    margin-top:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`