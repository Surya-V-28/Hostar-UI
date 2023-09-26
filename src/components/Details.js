import styled from "styled-components";

import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import db from '../firebase'
const Details = (props) => {
    const {id}  = useParams();
    const [detailedData,setdetailedData] = useState({});

    useEffect(() => {
        db.collection('movies').doc(id).get().then((doc) =>{
            if(doc.exists){
                setdetailedData(doc.data())
                console.log("the data all shorted");
            }
            else {
                console.log("No documents exists in firebase");
            }
        }).catch((error)=> {
            console.log("An error has occured")
        });
        console.log(detailedData);        
    },[id])

    function notFoundalert() {
      alert("The backend read and write date expired in firebase ");

    }
  return (
    <Container>
      <Background>
        <img src={detailedData.backgroundImg} alt={detailedData.title}></img>
      </Background>
      <Imagetitle>
        <img src={detailedData.titleImg} alt={detailedData.title}></img>
      </Imagetitle>
      <ContainerMeta>
        <Controls>
          <Player onClick={notFoundalert}>
            <img src="/images/play-icon-black.png" alt="" />
            <span > Play</span>
          </Player>
          <Trailer onClick={notFoundalert} >
            <img  src="/images/play-icon-white.png" alt="" />
            <span > Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <img src="/images/group-icon.png" alt=""></img>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailedData.subTitle}</SubTitle>
        <Discription>{detailedData.description}</Discription>
      </ContainerMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  top: 73px;
  min-height: calc(100vh-250px);
  display: block;
  padding: 0 calc(5vh+3px);
`;

const Background = styled.div`
  position: fixed;
  z-index: -1;
  top: 0px;
  right: 0px;
  left: 0px;
  opacity: 0.8;

  img {
    height: 100vh;
    width: 100vw;
    @media screen and (max-width: 768px) {
      img {
        width: initial;
      }
    }
  }
`;
const Imagetitle = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-start;
  height: 30vw;
  width: 100%;
  min-height: 170px;
  margin-left:30px;
  padding-bottom: 24px;
  -webkit-box-pack: start;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 45vh;
  }
`;

const ContainerMeta = styled.div`
  max-width: 874px;
  margin-left: 10px;
`;

const Controls = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 24px 24px;
  min-height: 56px;
`;
const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  height: 56px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }
  :hover {
    background: rgb(198, 198, 198);
  }

  @media screen and (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    margin: 0px 10px 0px 0px;
    font-size: 12px;

    img {
      width: 25px;
    }
  }
`;
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 54px;
  width: 54px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgba(249, 249, 249, 0.8);
    display: inline-block;

    :first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    :nth-child(2) {
      height: 16px;
      transform: translate(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  border-radius: 50%;
  height: 54px;
  width: 54px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid white;
  align-items: center;
  justify-content: center;
  display: flex;

  img {
    width: 100%;
  }
`;
const Discription = styled.div`
  margin-left: 10px;
  font-size: 20px;
  min-height: 20px;
  color: rgb(249, 249, 249);
  padding: 24px 0px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const SubTitle = styled.div`
  margin-left: 10px;
  font-size: 14px;
  min-height: 20px;
  color: rgb(249, 249, 249);
  margin-top:20px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export default Details;
