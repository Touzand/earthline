import React, { useState } from "react";
import styled from "styled-components";
import "../index.css";

const ImgContainer = styled.div`
  position: relative;
  margin-top: 2rem;
background-size:cover;
background-position:center;
width:auto;
height:400px;
margin:0;
animation:colorChange .1s 1s ease-in both,staggeredLeft 1s ease both;

@media(min-width:760px){
height:600px;

}

  img {
    object-fit: cover;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }
`;

const TextContainer = styled.div`
  color: whitesmoke;
  text-align: center;
  display: flex;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  bottom: 0.5rem;
  animation: staggeredUp 1s ease both;
`;

function Modal({ data, place, points, url, alt, OpenModal }) {
  return (
    <div
      style={{
        display: `${OpenModal ? "block" : "none"}`,
        position: "relative",
      }}
  >
      <ImgContainer style={{backgroundImage:`linear-gradient(to top,black 0% 2%,transparent 20% 100%),url(${url})`}}>
      <TextContainer>
        <span>{data}</span>
        <span>{place}</span>
        <span>{points}</span>
      </TextContainer>
      </ImgContainer>
    </div>
  );
}

export default Modal;
