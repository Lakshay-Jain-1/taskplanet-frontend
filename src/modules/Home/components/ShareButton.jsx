const ShareButton = ({ icon: Icon, label, gradient }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    }}>
        <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: gradient,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
        }}  onClick={()=>navigator.clipboard.writeText("Hello this side lakshay ")} >
            <Icon size={24} color="black" />
        </div>
        <span style={{
            marginTop: '8px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#333',
        }}>
            {label}
        </span>
    </div>
);

export default ShareButton