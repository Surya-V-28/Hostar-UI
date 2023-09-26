

import styled from "styled-components";
import React from "react";
import { auth } from "../firebase";
import { provider } from "../firebase";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'; 
import { selectUserName,selectUserPhoto,selectUserEmail,setUserLoginDetials,setSignOutState} from "../features/users/userslice";

import { useEffect } from "react";


const Header=(props) => {

   const dispatch = useDispatch();
   const history = useNavigate();
   const username = useSelector(selectUserName);
   const userphoto = useSelector(selectUserPhoto);
   const useremail = useSelector(selectUserEmail);

  useEffect(() => {
    auth.onAuthStateChanged( async (user) => {
      if(user) {
      setUser(user);
      history("/home");
     
      }
  })
  },[username]);
  
  // send the data recived form google login to store js to store where we can use in all  over the app
  const setUser =(user) => {
    // dispatch used for sending the data to the store
    dispatch(
      setUserLoginDetials ({
        name:user.displayName,
        email: user.email,
        photo:user.photoURL,
   })
    );
  }
  // onclick to open pop up window 
   const handleAuth =() => {

    if(!username){
    auth.signInWithPopup(provider).then((result)=>{
       setUser(result.user);
    }).catch((error) => {
      alert(error.message);
    });
  } else if(username){
    auth.signOut().then(()=>  {
       dispatch(setSignOutState);
      history('/');

    }).catch((error) => {
      alert(error.message);
    }) ;
  }
}

    return (
        <Nav>
            <Logo> <img src="/images/logo.svg" alt="Disney+" /></Logo>
            {!username ? <LoginButton onClick={handleAuth}>Login</LoginButton>:<>
            <NavMenu>
                <a  href="/home" >
                    <img src="/images/home-icon.svg"  alt="home"></img>
                    <span> HOME</span>
                </a>
                <a  href="/search" >
                    <img src="/images/search-icon.svg"  alt="search"></img>
                    <span> SEARCH </span>
                </a>
                <a  href="/watchlist" >
                    <img src="/images/watchlist-icon.svg"  alt="watchlist"></img>
                    <span> WATCHLIST</span>
                </a>
                <a  href="/original" >
                    <img src="/images/original-icon.svg"  alt="original"></img>
                    <span> ORIGINAL</span>
                </a>
                <a  href="/movie" >
                    <img src="/images/movie-icon.svg"  alt="movie"></img>
                    <span> MOVIE
                    </span>
                </a>
                <a  href="/series" >
                    <img src="/images/series-icon.svg"  alt="series"></img>
                    <span> SERIES</span>
                </a>
            </NavMenu>
            <SignOut>
             <UserImage  src ={userphoto} alt={username}></UserImage>
             <DropDownMenu >
               <span  onClick={handleAuth}>  Sign out </span>
             </DropDownMenu>
             </SignOut>
            </> }
            
        </Nav>
    );
}

const Nav = styled.nav`
position: fixed;
  background-color: #090b13;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index:3;
  padding:0px 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1.5px;
`;

const Logo = styled.a`
padding:0px;
width: 80px;
max-height: 70px;
margin-top:4px;
font-size:0px;
display: inline-block;
img {
    display: block;
    width: 100%;
}
`;



const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-direction:row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin:0%;
  padding: 0%;
  margin-right:auto;
  margin-left: 25px;
   

  a {
   display: flex;
   align-items: center;
   padding: 0px 12px;
   

  

  img {
    height: 20px;
    min-width:20px;
    width: 20px;
    z-index: auto;

  }

  span {
    color: rgb(249,249,249);
    font-size: 13px;
    line-height: 1.08;
    letter-spacing: 1.42px;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;


    :before{
        border-radius: 0px 0px 4px 4px;
        background-color: rgb(249,249,249);
        bottom: -6px;
        left: 0px;
        right: 0px;
        content: "";
        position: absolute;
        height: 2px;
        transform-origin: left center;
        transition:scaleX(0);
        width: auto;
        transition:all 250ms cubic-bezier(0.25,0.46,0.46,0.94) 0s;
        visibility: hidden;
        opacity: 0;

    }
  }
  :hover {
    span:before {
        transition:scaleX(1);
        visibility: visible;
        opacity: 1 !important;
        
    }
  }
}
  @media only screen and (max-width:768px){
    display: none;
    
  }

`
const LoginButton = styled.a`
  background-color: rgba(0.0,0.0,0.0,0.6);
 padding: 8px 16px;
 border: solid 1px;
 text-transform: uppercase;
 border-radius: 4px;
 font-size:14px;
 letter-spacing:1.5;
 transition: all 0.2s ease 0s;
 :hover{
    background-color: #f9f9f9;
    color: black;
    border-color:transparent;
 }
`;


const UserImage = styled.img`
height: 100%;
`;


const DropDownMenu = styled.div`

  position: absolute;
  top: 48px;
  right: 0;
  background-color: rgb(19,19,19);
  padding: 10px;
  border: solid 1.5px #f9f9f9;
  border-radius:4px;
  opacity: 0;
  width: 100px;
  font-size: 14px;
`

const SignOut = styled.div`
position: relative;
height: 48px;
width: 48px;
 display: flex;
 cursor: pointer;
 align-items: center;
 justify-content: center;


 ${UserImage} {
  border-radius:50%;
  height: 100%;
  width: 100%;
 }
 :hover {
  ${DropDownMenu} {
    opacity: 1;
    transition-duration:1.5s;
  }
 }
`





export default Header
