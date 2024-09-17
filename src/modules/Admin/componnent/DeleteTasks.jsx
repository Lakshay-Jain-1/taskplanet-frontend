import React, { useState } from 'react';
import { deletingATask } from '../../../services/apiClient';

const DeleteTask = () => {
  // State to store form input values
  const [Tasktitle, setTaskTitle] = useState('Default Task Title');
  const [points, setPoints] = useState('0');
  const [platform, setPlatform] = useState('facebook');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Log the input data to the console
    const userData = {
      Tasktitle,
      points,
      platform,
    };
    console.log(userData);
    deletingATask(userData);
    
    
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '140px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
        <h3>Delete Tasks</h3>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>Task Title:</label>
        <input
          type="text"
          value={Tasktitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>Points:</label>
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>Platform:</label>
        <input
          type="text"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>

      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Delete Task
      </button>
    </form>
  );
};

export default DeleteTask;
