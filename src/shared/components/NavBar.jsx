import React, { useState } from 'react';
import { Home, ClipboardList, PlusCircle, Settings, LayoutGrid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NavItem = ({ icon: Icon, label}) =>{ 
  
  const navigate =   useNavigate()
    
    return (
  <div
  onClick={(event)=>{navigate(label[0].toLowerCase()+label.slice(1))}}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform:'translateY(-5px)' ,
    
    }}
  >
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '50%',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    
    >
      <Icon size={24} color={ '#4169E1' }  />
    </div>
  </div>
)};

const NavBar = () => {
  

  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: ClipboardList, label: 'Tasks' },
    { icon: PlusCircle, label: 'Add' },
    { icon: Settings, label: 'Settings' },
    { icon: LayoutGrid, label: 'Menu' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: "0px",
        width:"422px",
        height:"40px",
        
        background: 'linear-gradient(to right, #4169E1, #6495ED)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 0',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
      }}
    >
      {navItems.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default NavBar;