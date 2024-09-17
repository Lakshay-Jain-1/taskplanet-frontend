import React from 'react';
import SocialmediaIcon from "../../Home/components/SocialmediaIcon";

const Task = ({ imgName, id, task }) => {
  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '15px',
    width: '350px',
    height:"350px",
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    position:"relative"
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '19px',
    color: '#666',
    marginBottom: '15px',
  };

  const pointsStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: '15px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    position:"absolute",
    bottom:"10px"
  };
  function settingintoLocalStorage(event){
    console.log(task)
  }
  return (
    <div style={cardStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px',columnGap:"30px" }}>
      
        <SocialmediaIcon  img={imgName}  gap='30px' />
        <h3 style={titleStyle}>{task.Tasktitle}</h3>
      </div>
      <h2 style={descriptionStyle}>{task.TaskDescription}</h2>
      <p style={pointsStyle}>Points: {task.points}</p>
      <button style={buttonStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'} onClick={settingintoLocalStorage}>
        Start Task
      </button>
    </div>
  );
};

export default Task;