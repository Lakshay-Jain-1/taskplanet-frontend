
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





import React from 'react';import SocialmediaIcon from './SocialmediaIcon';

