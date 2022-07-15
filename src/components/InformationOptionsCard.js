import styled from "styled-components";
import React, { useState } from "react";
import '../index.css'

const Card = styled.article`
color: whitesmoke;
background-color:#ddd2;
margin:.5rem;
padding:1rem;
cursor:pointer;

&:hover{
background-color:#21242B;
}

@media(min-width:760px){
display:flex;
flex-direction:row;
gap:1rem;

.data{
width:200px;
}

hr{
display:none;
}
}

& h2{
font-size: var(--step--2);
font-weight:unset;
cursor-events:none;
}

& p{
width:200px;
color:#ddd9;
font-size: var(--step--2);
cursor-events:none;
}

& a{
color:whitesmoke;
text-decoration:none;
}
`;

function InformationOptionsCard({ data, text, onClick,modal }) {
  return (
    <Card onClick={onClick} style={{backgroundColor:`${modal ? "#21242B" : ''}`}}>
      <div className="data">
        <h2>{data}</h2>
      </div>
      <hr />
      <div className="text">
        <p>{text}</p>
        <a href="#" target="_blank">
          Learn more
        </a>
      </div>
     </Card>
  );
}

export default InformationOptionsCard;
