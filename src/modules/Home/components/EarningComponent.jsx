import React from 'react';
import { Wallet, DollarSign, Share2 } from 'lucide-react';

const InfoCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: '4px',
      borderRadius: '12px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s ease-in-out',
      cursor: 'pointer',
    
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2px',
      }}>
        <p style={{
          color: 'black',
          fontWeight: 'medium',
        }}>{title}</p>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <p style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: color,
          marginRight: '2px',
        }}>{value}</p>
        <Icon size={24} color="blue" />
      </div>
    </div>
  );
};

const UserWallet = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent:"space-around",
      alignItems:"center",
      marginTop:"30px"
    }}>
      <InfoCard title="Wallet" value="₹2875.00" icon={Wallet} color="black" />
      <InfoCard title="Earnings" value="₹2875.00" icon={DollarSign} color="black" />
      <InfoCard title="Referrals" value="2417" icon={Share2} color="black" />
    </div>
  );
};

export default UserWallet;