import React from "react";
import Esports from "./Esports.jpg";
import './Img.css'
export default function Img()
{
    return(
        <div className="container">
        <img src={Esports} className="Img" alt='' width={520} height={300}></img>
        </div>
    )
}


