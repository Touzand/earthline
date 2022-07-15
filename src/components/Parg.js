import React, {useState} from "react"
import styled from 'styled-components'

const Div = styled.div`
color:whitesmoke;
text-align:center;
width:auto;
padding:1rem;

p{
color:grey;
}

@media(min-width:760px){
display:flex;
justify-content:center;
align-items:center;

div{display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:500px;
}
}

`

function Text({children}){
  return(
<Div>
  <div>
  {children}
  </div>
    </Div>
    )
}

export default Text
