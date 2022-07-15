import React from "react";
import styled from 'styled-components';

const Figure = styled.article`
height:200px;
display:flex;
align-items:end;
text-align:left;
padding:.5rem;
background-size:cover;
margin-left:1rem;


h2,p{
margin:0;
}
`

const Div = styled.div`
width:150px;
`

function ArticleCard({ title, short, url}) {
  return (
    <Figure style={{backgroundImage:`linear-gradient(to top,black,transparent),url(${url}`}}>
      <Div>
        <h2>{title}</h2>
        <p>{short}</p>
      </Div>
    </Figure>
  );
}

export default ArticleCard;
