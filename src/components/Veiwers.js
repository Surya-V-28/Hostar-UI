
import styled from "styled-components";

import React from "react";


const Veiwers = (props) => {
    return (
        <Container>
           <Wrap>
             <img src="/images/viewers-disney.png" alt=""></img>
             <video autoPlay={true}  loop={true} playsInline={true} >
                <source src="/vedios/1564674844-disney.mp4" type="video/mp4"/>
             </video>
           </Wrap>
           <Wrap>
             <img src="/images/viewers-marvel.png" alt=""></img>
             <video autoPlay={true}  loop={true} playsInline={true}>
                <source src="/vedios/1564676115-marvel.mp4" type="video/mp4"/>
             </video>
           </Wrap>
           <Wrap>
             <img src="/images/viewers-national.png" alt=""></img>
             <video autoPlay={true}  loop={true} playsInline={true}>
                <source src="/vedios/1564676296-national-geographic.mp4" type="video/mp4"/>
             </video>
           </Wrap>
           <Wrap>
             <img src="/images/viewers-pixar.png" alt=""></img>
             <video autoPlay={true}  loop={true} playsInline={true}>
                <source src="/vedios/1564676714-pixar.mp4" type="video/mp4"/>
             </video>
           </Wrap>
           <Wrap>
             <img src="/images/viewers-starwars.png" alt=""></img>
             <video autoPlay={true}  loop={true} playsInline={true}>
                <source src="/vedios/1608229455-star-wars.mp4" type="video/mp4"/>
             </video>
           </Wrap>
        </Container>
    );
}


const Container = styled.div`

 margin-top:30px;
 padding: 30px 0px 26px;
 display: grid;
 grid-gap: 25px;
 gap: 25px;
 grid-template-columns: repeat(5,minmax(0,1fr));


 @media only screen  and (max-width:768px){
    grid-template-columns: repeat(1,minmax(0,1fr));
    
 }
`

const Wrap = styled.div`
border-radius:10px;
padding-top: 56.23%;
box-shadow: rgb( 0 0 0 /63%) 0px 26px 30px -10px , rgb( 0 0 0 /73%) 0px 16px 10px -10px;
cursor: pointer;
position: relative;
overflow:hidden;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94);
border: 4px solid rgba(249,249,249,0.1);


img {
    inset: 0px;
    display: block;
    position: absolute;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    top: 0;
    transition: opacity 400ms ease-in-out 0.2s;
    z-index: 1;
}

  video {
    height: 100%;
    width: 100%;
    position:absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;

 }
 &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }

`

export default Veiwers