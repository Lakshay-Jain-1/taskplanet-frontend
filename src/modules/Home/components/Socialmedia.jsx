
export function Socialmedia() {
    return (
        <div style={{marginTop:"30px",textAlign:"left"}}>
            <h2 style={{marginLeft:"20px", color: '#333',}}>Tasks</h2>
            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", marginTop: "20px", rowGap: "20px" }}>
                <SocialmediaIcon img="./facebook.png" name="Facebook"number={10} />
                <SocialmediaIcon img="./twitter.png" name="Twitter" number={9} />
                <SocialmediaIcon img="./youtube.png" name="Youtube" number={100}/>
                <SocialmediaIcon img="./linkedin.png" name="LinkedIn" number={100} />
                <SocialmediaIcon img="./instagram.png" name="Instagram" number={100} />
                <SocialmediaIcon img="./telegram.png" name="Telegram" number={100} />
            </div>
        </div>
    )

}


function SocialmediaIcon({ img, name,number }) {

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",position:"relative" }}>
            <img src={img} style={{ borderRadius: "12px" }} width="45px" height="45px" />
            <h4 style={{color: '#333'}}>{name}</h4>
         <h5 style={{position:"absolute",top:"-10px",right:"25px",color:"darkgreen"}}>{number}</h5>

        </div>
    )
}


import React from 'react';
