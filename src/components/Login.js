
import styled from 'styled-components'
import React from "react";



const Login =(props) => {
    return (
       <Container>
        <Content>
          <CTA>
            <CTALogoOne src="/Hostar-UI/images/cta-logo-one.svg"  alt=""/>
            <SignUp> GET ALL THERE </SignUp>
            <Description>
              Get Periumun acvess to the Raya and the last Dragon <br/>
              for an  additional  fee with disney+ subscription.As of<br/>
              4/22/23, the price of disney and the  disney bundle <br/>
              will increase by  $1.
            </Description>
            <CTALogoTwo src='/images/cta-logo-two.png'></CTALogoTwo>
          </CTA>
          <BGImage/>
        </Content>
       </Container>
    )
    

}


const Container = styled.section`
  overflow:hidden;
  display:flex;
  flex-direction:column;
  text-align:center;
  height: 100vh;

`;

const Content = styled.div`
  margin-bottom:10vw;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding :80px 40px;
  height: 100%;
`;
const BGImage = styled.div`
    background-image:url("/images/login-background.jpg");
    z-index: -1;
    position: absolute;
    background-repeat:no-repeat;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-size:cover;
    background-position:top;
`



const CTA =styled.div`
   margin-bottom:2vw;
   max-width: 650px;
   flex-wrap:wrap;
   display: flex;
   flex-direction: column;
   justify-content: center;
  align-items: center;
  text-align: center;
  margin-top:0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`


const CTALogoOne = styled.img`
margin-bottom:12px;
width: 100%;
display: block;
max-width: 600px;
min-height: 1px;

`


const SignUp = styled.a`
  font-weight:bold;
  width: 100%;
  font-size: 14px;
  background-color: #0063e5;
  color: #f9f9f9;
  padding: 16.5px 0px;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  border-radius:5px;
  border:solid 1px transparent;


  :hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
 color: hsla(0,0%,95.1%,1);
 font-size:18px;
 margin: 0px;
 line-height: 1.5;
 margin: 0px 0px 24px ;
`;

const  CTALogoTwo = styled.img`
  max-width: 620px;
  width: 100%;
  margin-bottom:20px;
  display: inline-block;
  vertical-align:bottom;

`

export default Login