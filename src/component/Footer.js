import React from "react";
import style from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Icons>
          <BsFacebook size={"25px"} />
          <AiOutlineTwitter size={"25px"} />
          <AiFillGooglePlusCircle size={"25px"} />
          <BsInstagram size={"25px"} />
        </Icons>
        <Links>
          <div>
            <Link>Client Registatration By Agent</Link>
          </div>
          <div>
            <span>
              <GoPrimitiveDot />
            </span>
            <Link>AdvancedQT Partners</Link>
          </div>
          <div>
            <span>
              <GoPrimitiveDot />
            </span>
            <Link>DPR Email Login</Link>
          </div>
          <div>
            <span>
              <GoPrimitiveDot />
            </span>
            <Link>Email Login</Link>
          </div>
          <div>
            <span>
              <GoPrimitiveDot />
            </span>
            <Link>Client Login</Link>
          </div>
          <div>
            <span>
              <GoPrimitiveDot />
            </span>
            <Link>Other Payments</Link>
          </div>
          <div>
            <span>
              <GoPrimitiveDot />
            </span>
            <Link>BIF</Link>
          </div>
        </Links>
        <Links>
          <Mails>
            <span>
              <GrMail />
            </span>
            <Link>CS@advanceQT.com</Link>
          </Mails>
          <Mails>
            <span>
              <GrMail />
            </span>
            <Link>NIGERIA +2349091110324</Link>
          </Mails>
        </Links>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = style.div`
width: 100%;
height: 30vh;
background-color: #552903;
display: flex;
align-items: center;
font-size:10px;
justify-content: center;
color:white;

@media (min-width: 60px) and (max-width: 790px) {
  width: 100%;
  height: 100%;
}
`;
const Wrapper = style.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
// justify-content: center;
`;
const Icons = style.div`
// background: white;
width: 25%;
display: flex;
align-items: center;
justify-content: space-around;
padding: 30px 0;
`;
const Links = style.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
div{
  display: flex;
};
span{
  margin-left: 10px;
  // margin-bottom: 10px;
}
`;
const Link = style.div`
font-size: small;
display: flex;
align-items: center;
justify-content: center;
`;
const Mails = style.div`
margin-top: 10px;
margin-bottom: 10px;
display: flex;
align-items: center;
span{
  font-size:20px;
  margin-right:5px;
}
`;
