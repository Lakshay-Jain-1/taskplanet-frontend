import React, { useState } from 'react';
import { gettingSubmitedDataAndSendingItToServer } from '../../../services/apiClient';

function AddingTasks() {
   
    const [formData, setFormData] = useState({
        Tasktitle: 'Default Task Title',
        TaskLink: 'https://example.com',
        TaskDescription: 'Default task description',
        points: 0,
        platform: 'facebook',
        earningsDescription: 'Default earnings description'
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function submit(event) {
        event.preventDefault();
        gettingSubmitedDataAndSendingItToServer(formData)
       
    }

    // Inline styles for the form
    const containerStyle = {
        maxWidth: '500px',
        marginTop: '40px',
        marginBottom: '40px',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
    };

    const formGroupStyle = {
        marginBottom: '15px',
        display: 'flex',
        flexDirection: 'column',
    };

    const labelStyle = {
        marginBottom: '5px',
        fontWeight: 'bold',
        color: '#333'
    };

    const inputStyle = {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '14px'
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3'
    };

    return (
        <div style={containerStyle}>
            <h2>Add Tasks</h2>
            <form onSubmit={submit}>
                <div style={formGroupStyle}>
                    <label htmlFor="Tasktitle" style={labelStyle}>Task Title:</label>
                    <input
                        type="text"
                        name="Tasktitle"
                        value={formData.Tasktitle}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>
                
                <div style={formGroupStyle}>
                    <label htmlFor="TaskLink" style={labelStyle}>Task Link:</label>
                    <input
                        type="text"
                        name="TaskLink"
                        value={formData.TaskLink}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>
                
                <div style={formGroupStyle}>
                    <label htmlFor="TaskDescription" style={labelStyle}>Task Description:</label>
                    <textarea
                        name="TaskDescription"
                        value={formData.TaskDescription}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>
                
                <div style={formGroupStyle}>
                    <label htmlFor="points" style={labelStyle}>Points:</label>
                    <input
                        type="number"
                        name="points"
                        value={formData.points}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>

                <div style={formGroupStyle}>
                    <label htmlFor="platform" style={labelStyle}>Choose a platform:</label>
                    <select
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                        style={inputStyle}
                    >
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="twitter">Twitter</option>
                        <option value="youtube">YouTube</option>
                        <option value="telegram">Telegram</option>
                    </select>
                </div>
                
                <div style={formGroupStyle}>
                    <label htmlFor="earningsDescription" style={labelStyle}>Earnings Description:</label>
                    <textarea
                        name="earningsDescription"
                        value={formData.earningsDescription}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>

                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddingTasks;
