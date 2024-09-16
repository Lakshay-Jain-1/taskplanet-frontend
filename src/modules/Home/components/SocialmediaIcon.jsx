function SocialmediaIcon({ img, name,number }) {

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",position:"relative" }}>
            <img src={img} style={{ borderRadius: "12px" }} width="45px" height="45px" />
            <h4 style={{color: '#333'}}>{name}</h4>
         <h5 style={{position:"absolute",top:"-10px",right:"25px",color:"darkgreen"}}>{number}</h5>

        </div>
    )
}

export default SocialmediaIcon