import React from "react";
import styled from "styled-components";
import GridItem from "./GridItem";

const CardContent = [
  {
    id: 1,
    title: "Liftoff to the Red Planet! lets explore this",
    text: "A United Launch Alliance Atlas V rocket with NASA’s Mars 2020 Perseverance rover onboard launches from Space Launch Complex 41 ",
    link: "#",
url: "http://imgfz.com/i/aVBOrlJ.jpeg",
  },
  {
    id: 2,
    title: "Juno Skims the Cloud Tops of Jupiter",
text: "On April 9, 2022, as NASA’s Juno mission completed its 41st close flyby of Jupiter, its JunoCam",
link: "#",
url: "http://imgfz.com/i/AuZrjXt.jpeg",
  },
  {
    id: 3,
    title: "Nancy Grace Roman: First Chief Astronomer",
    text: "In this undated image form the 1960s, Nancy Grace Roman sits in her office in NASA Headquarters.",
    link: "#",
url: "http://imgfz.com/i/xUVBowf.jpeg",
  },
  {
    id: 4,
    title: "Sidney Poitier's Visit to NASA's Jet Propulsion Laboratory",
    text: "Legendary actor and diplomat, Sidney Poitier, visited JPL in 1979",
    link: "#",
url: "http://imgfz.com/i/9Ch3vxH.jpeg",
  },
  {
    id: 5,
    title: "Become a Flight Director ... And Perhaps a Legend",
    text: "Christopher Kraft, flight director during Project Mercury, works at his console inside the Flight Control",
    link: "#",
url: "http://imgfz.com/i/l0ONBmb.jpeg",
  },
  {
    id: 6,
title: "Sunrise Over the Pacific",
    text: "This view of a sunrise breaking through the Earth's horizon was taken as the International Space Station",
    link: "#",
url: "http://imgfz.com/i/qI8btue.jpeg",
  },
  {
    id: 7,
    title: "Voyager's View of Jupiter's Great Red Spot",
    text: "This view of Jupiter was taken by Voyager 1",
    link: "#",
url: "http://imgfz.com/i/kY0KdS9.jpeg",
  },
  {
    id: 8,
    title: "Earth from Orbit: NOAA Debuts First Imagery from GOES-18",
    text: "NOAA shared the first images of the Western Hemisphere from its Geostationary Operational",
    link: "#",
url: "http://imgfz.com/i/NXWDo07.jpeg",
  },
  {
    id: 9,
    title: "Cygnus Cargo Craft at the Space Station",
    text: "Image of Northrop Grummans's Cygnus cargo craft is pictured attached to the International Space Station.",
    link: "#",
url: "http://imgfz.com/i/FyMmBHW.jpeg",
  },
];

const Section = styled.article`
  width: auto;

@media (min-width:760px){
display:flex;
align-items:center;
flex-direction:column;
height:100vh;
scroll-margin-top:3rem;
width:100%;
}

  & button {
    width: 100%;
    padding: 0.5rem;
    border: none;
    font-weight: bold;
    background-color:#21242B ;
color: whitesmoke;

@media(min-width:760px){
width:50%;
margin:2rem 0;
}

  }

  img {
    width: auto;
    height: 100%;
  }
`;

const Grid = styled.div`
height:auto;
display:grid;

grid-template-areas:
"item1 item1 item2 item2"
"item3 item3 item4 item4"
"item6 item6 item5 item5"
"item7 item7 item7 item7"
"item8 item8 item9 item9";

@media (min-width:760px){
grid-template-areas:
"item1 item2 item3 item4"
"item1 item5 item5 item4"
"item6 item7 item8 item9";

width:800px;
height:500px;
}

img{
object-fit: cover;
height: auto;
width:auto;
    max-width: 100%;
    vertical-align: middle;
display: inline;

:after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
height: 100%;
width:100%;
    background-image: linear-gradient(to left, black,transparent);

}
}

.text-content{
position:absolute;
color:whitesmoke;
}
}
`;

function GridSection() {
  return (
    <Section id="news">
      <Grid>
        {CardContent.map((card) => (
          <GridItem
            url={card.url}
            text={card.text}
            title={card.title}
            key={card.id}
            id={card.id}
            link={card.link}
          />
        ))}
      </Grid>
      <button>Read more</button>
    </Section>
  );
}

export default GridSection;
