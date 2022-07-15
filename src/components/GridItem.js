import React from "react"
import styled from 'styled-components'
import '../index.css'

function GridItem({id,url,title,text}){

const Figure = styled.figure`
grid-area:item${id};
height:200px;
margin:0;
display:flex;
flex-direction:column;
text-align:left;
justify-content:flex-end;
color:whitesmoke;
padding:0 .5rem;
padding-bottom:.5rem;
margin:.5rem;
background-size:cover;
background-image:linear-gradient(to top,black,transparent),url(${url});
transition:background 1s ease;


@media (min-width:760px){
height:auto;
width:auto;
}

h2,p{
@media(min-width:760px){
margin:0;
opacity:.1;
}}

h2{
font-size:12px;
font-weight:100;
}

p{
opacity:0;
@media(min-width:760px){
color:#dedede

}}


&:hover{
background-image:linear-gradient(to top,black 0% 20%,#1119),url(${url});
background-position:right;
p{
opacity:1;
}
h2{opacity:0}
}

@media(max-width:760px){
&:hover h2{display:none;
}
}}
`
  return(
<Figure>
<p>{text}</p>
<h2>{title}</h2>
    </Figure>
    )
}

export default GridItem
