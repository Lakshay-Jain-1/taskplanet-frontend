
import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { displaySubmit } from '../../../store/features/TaskDisclaimer';
function SubmitDialogBox() {
  const dispatch =  useDispatch()
  const displayOrNOT =  useSelector((state)=>state.taskDialogBoxDisplay.displaySubmit)
  const dialogStyle = {
    position: "fixed",
    top: "50vh",
    left: "49.5vw",
    transform: "translate(-50%, -50%)",
    width: "350px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
    overflow: "hidden",
    display:displayOrNOT?"flex":"none",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
  };

  const contentStyle = {
    padding: "10px",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#333",
  };

  const buttonStyle = {
    display: "block",
    width: "200px",
    padding: "12px",
    backgroundColor:"white",
    color: "green",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    
  };

  return (
  
    <div style={dialogStyle}>
      {console.log(displayOrNOT)}
      <h2 style={{textAlign:"center",color:"red"}}>Disclaimer</h2>
      <div style={contentStyle}>
         <div style={{position:'absolute', top:"0",right:"13px",fontWeight:"900",fontSize:"20px"}} onClick={()=>dispatch(displaySubmit())}  >X</div> 
        <p style={{fontSize:"18px",textAlign:"center",marginTop:"10px"}}>
          Task verification may take 24-48 hours.
        </p>
      </div>
      <button 
        style={buttonStyle} 
        onClick={()=>window.location.href=window.localStorage.getItem("link")}       
  
      >
        I Understand
      </button>
    </div>
 
  );
}

export default SubmitDialogBox;