import React, {useState} from "react"
import  '../index.css'

function Loader(){
return(
<div className="loading">
<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
</div>
)
}

export default Loader
