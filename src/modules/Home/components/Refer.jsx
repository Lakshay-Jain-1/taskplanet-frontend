import React from 'react';
import { Copy, Diamond, Users } from 'lucide-react';
import ShareButton from './ShareButton';



const Refer = () => {
    const buttons = [
        { icon: Copy, label: 'Copy Link', gradient: 'linear-gradient(126deg, rgba(181,2,255,0.2909663865546218) 2%, rgba(253,246,231,1) 100%)' },
    ];

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            marginTop: '10px',
            padding: '20px',
            borderRadius: '12 px',
            display: "grid",
            gridTemplateAreas: "'name name''shareLink moneymaker' 'shareLink moneymaker'",
            marginBottom:"40px"
        }}>
            <h2 style={{
                textAlign: 'center',
                color: '#333',
                marginBottom: '20px',
                gridArea: "name"
            }}>
                Share Your Refer Link
            </h2>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '20px',
                gridArea: "shareLink"
            }}>
                {buttons.map((btn, index) => (
                    <ShareButton key={index} {...btn} />
                ))}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: "column",
                gap: '20px',
                gridArea: 'moneymaker'
            }}>
                <div style={{
                    display: 'flex',

                    alignItems: 'center',
                    padding: '10px 20px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                }}>
                    <Diamond size={24} color="#6366F1" style={{ marginRight: '10px' }} />
                    <span style={{ fontWeight: 'bold', color: '#333' }}>Premium Membership</span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 20px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                }}>
                    <Users size={24} color="#6366F1" style={{ marginRight: '10px', }} />
                    <span style={{ fontWeight: 'bold', color: '#333' }}>My Leads</span>
                </div>
            </div>
        </div>
    );
};

export default Refer;