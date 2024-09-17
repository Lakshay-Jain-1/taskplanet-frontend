import React from 'react';
import SocialmediaIcon from "../../Home/components/SocialmediaIcon";
import { useDispatch } from 'react-redux';
import { displayDisclaimer,displaySubmit } from '../../../store/features/TaskDisclaimer';

const Task = ({ imgName, id, task }) => {
   const dispatch =  useDispatch()
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
    padding: '10px 1px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width:"110px"
  };
  function settingintoLocalStorage(event){
    console.log(task)
    window.localStorage.setItem("link",task.TaskLink)
    dispatch(displayDisclaimer())
  }
  function submmitting(event){
    console.log(1)
    dispatch(displaySubmit())
  }
  return (
    <div style={cardStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px',columnGap:"30px" }}>
       {/* {console.log(task)} */}
        <SocialmediaIcon  img={imgName}  gap='30px' />
        <h3 style={titleStyle}>{task.Tasktitle}</h3>
      </div>
      <h2 style={descriptionStyle}>{task.TaskDescription}</h2>
      <div style={{display:"flex",justifyContent:'space-between',}}>
      <p style={pointsStyle}>Points: {task.points}</p>
      <button style={buttonStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'} onClick={submmitting}>
         Submit
      </button>
      </div>
      <button style={{...buttonStyle,position:"absolute",left:"10px",backgroundColor:"green",width:"110px",bottom:"10px"}} onClick={settingintoLocalStorage}>
      Start Task
      </button>
    </div>
  );
};

export default Task;