import React, { useState } from "react";
import ArticleCard from "./ArticleCard";
import styled from "styled-components";
import '../index.css'

const FooterSection = styled.footer`
text-align: center;
color: whitesmoke;
background-image:linear-gradient(to bottom, var(--darkness),transparent),url(http://imgfz.com/i/52BdRbL.jpeg);
background-size:cover;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:left;
align-items:center;

.text{
margin:1rem;
}


@media(min-width:760px){
.text{
width:700px;
}
}
`;

const CardSection = styled.div`
width:95vw;
display:flex;
overflow-x:scroll;

/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;

}

/* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */

@media (min-width:760px){
justify-content:center;
}
`
function Footer() {
  return (
<FooterSection id="mision">
  <div className="text">
      <h1>Our mision</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et just
      </p>
  </div>

      <CardSection>
        <ArticleCard title={"Hubble"} short={"space telescope"} url={"http://imgfz.com/i/kg8Vxj1.jpeg"} />
        <ArticleCard title={"Space X"} short={"space telescope"} url={"http://imgfz.com/i/FaJDbf1.jpeg"} />
        <ArticleCard title={"Moon"} short={"space telescope"} url={"http://imgfz.com/i/OXEcPfb.jpeg"} />
        <ArticleCard title={"Mars"} short={"space telescope"} url={"http://imgfz.com/i/4T0PJvi.jpeg"} />
      </CardSection>
    </FooterSection>
  );
}

export default Footer;
