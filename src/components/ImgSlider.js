

import styled from "styled-components";
import React from "react";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const ImgSlider = (props) => {

    let settings = {
        dots: true,
        autoplay: true,
        Infinite: true,
        slidesToShow: 1,
        slidestoScroll: 1,
        speed: 500,
    }
    return (
         <div>
            <Carousel {...settings}>
              <Wrap>
                <a href="#3">
                    <img src="/images/slider-badag.jpg" alt=""></img>
                </a>
              </Wrap>
              <Wrap>
                <a  href="#2">
                    <img src="/images/slider-badging.jpg" alt=""></img>
                </a>
              </Wrap>
              <Wrap>
                <a  href="#1">
                    <img src="/images/slider-scale.jpg" alt=""></img>
                </a>
              </Wrap>
              <Wrap>
                <a  href="#4">
                    <img src="/images/slider-scales.jpg" alt=""></img>
                </a>
              </Wrap>
            </Carousel>
         </div>
    )

}

const Carousel = styled(Slider)`
    margin-top:20px;

  > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

   :hover {
    opacity: 1;
    transition: opacity 1s ease 0.2s;
   } 
 }
 ul li button {
    :before{
       font-size: 10px;
       color :rgb(150,158,171)

    }
   }
   li.slick-active  button:before {
    color: white;
   }
   .slick-list {
    overflow: initial;
   }
   .slick-prev {
    left: -75px;
   }
   .slick-next {
    right: -75px;
   }
`

const Wrap = styled.div`

  border-radius:4px;
  padding: 4px;
  cursor: pointer;
  position: relative;


  a {
    padding: 4px;
    border-radius:4px;
    box-shadow: rgb( 0 0 0 /63%) 0px 26px 30px -10px , rgb( 0 0 0 /73%) 0px 16px 10px -10px;
    display: block;
   position: relative;

    img {
      height: 100%;
      width: 100%;
    }
    :hover {
      padding: 0;
      border: 4px solid rgba(249, 249,249,0.8);
      transition-duration:400ms;
    }
  }
`




export default ImgSlider