import { useNavigate } from "react-router-dom"

function SocialmediaIcon({ img, name,number,direction=false,gap="0px" }) {
    const navigate =   useNavigate()
      function navigateToTask(){
        navigate(`/task/${name.toLowerCase()}`)
      }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: direction?"row":"column",position:"relative",gap }}
          onClick={navigateToTask}
          >
            <img src={img} style={{ borderRadius: "12px" }} width="45px" height="45px" />
            <h4 style={{color: '#333'}}>{name}</h4>
         <h5 style={{position:"absolute",top:"-10px",right:"25px",color:"darkgreen",display:number==0?"none":"block"}}>{number}</h5>

        </div>
    )
}

export default SocialmediaIcon