
import React from 'react';

function DisclaimerDialogBox({ onClose }) {
    
  const dialogStyle = {
    position: "absolute",
    top: "50vh",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
    overflow: "hidden",
    display:"flex",
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
      <h2 style={{textAlign:"center",color:"red"}}>Disclaimer</h2>
      <div style={contentStyle}>
         <div style={{position:'absolute', top:"0",right:"13px",fontWeight:"900",fontSize:"20px"}}>X</div> 
        <p>
          You will get 10 points on submission of proof of task in form of screenshot. 
          You will earn your points on successful verification of your task by the task creator.
        </p>
        <p>
          Task verification may take 24-48 hours.
        </p>
      </div>
      <button 
        style={buttonStyle} 
        onClick={onClose}
  
      >
        I Understand
      </button>
    </div>
  );
}

export default DisclaimerDialogBox;