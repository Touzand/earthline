import React from "react";
import styled from "styled-components";
import "../index.css";

const HeaderHero = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

  & .hero {
    height: 100vh;
    color: whitesmoke;
    background-image: linear-gradient(
        to bottom,
        transparent 60%,
        var(--darkness) 100%
      ),
url(http://imgfz.com/i/xIu81wf.jpeg);
    top: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    text-align: center;

    nav {
      display: none;
    }

    h1 {
      font-size: var(--step-2);
      font-weight: 100;
      text-transform: uppercase;
      margin: 1rem 0;
    }

    p {
      font-size: var(--step--1);
      font-weight: unset;
}

@media(min-width:760px){
nav{display:flex}
}
  }

  button {
    background-color: #3335;
    padding: 2rem;
    backdrop-filter: blur(4px);
    border: none;
    color: grey;
    font-size: 13px;
    bottom: 0rem;
    border-radius: 1rem;
    font-weight: 900;
  }

  input {
    padding: 0.75rem;
    background-color: #ddd2;
    border: thin solid #fff5;
    border-radius: 5rem;
    color: whitesmoke;
    outline: none;

    ::placeholder {
      color: #fff5;
    }
  }

  br {
    display: none;
  }

  @media (min-width: 760px) {
    input {
      width: 300px;
    }

    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;

      div {
        gap: 1rem;
        display: flex;

        a {
          text-decoration: none;
          color: whitesmoke;
          font-weight: 100;
          padding: 0.5rem;
        }

        a:hover {
          background-color: var(--dark);
        }
      }
    }
  }
`;

function Header() {
  return (
    <HeaderHero id="home">
      <div className="hero">
        <div
          style={{
            padding: "2rem",
            height: "100vh",
            position: "relative",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <nav>
            <div>
              <a href="#home">Home</a>
              <a href="#more">Know more</a>
              <a href="#news">News</a>
              <a href="#mision">Our Mision</a>
            </div>
          </nav>
          <div>
            <h1>
              Welcome <br /> to Earthline
            </h1>
            <input type="text" placeholder="Search..." />
          </div>
          <div>
            <button>Scroll down</button>
          </div>
        </div>
      </div>
    </HeaderHero>
  );
}

export default Header;
