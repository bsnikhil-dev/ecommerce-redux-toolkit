import React from 'react';

type Props = {
    label: string;
};

const CustomButton: React.FC<Props> = ({ label }) => {

    const buttonStyle: React.CSSProperties = {
        color: '#e4e7eeff',
        backgroundColor: '#15c0a4ff',
        border: '2px solid #c8d3e9ff',
        fontSize: '18px',
        padding: '12px 24px',
        borderRadius: '8px',
        transition: 'background-color 0.3s ease-in-out',
        cursor: 'pointer',
    };

    const hoverStyle: React.CSSProperties = {
        backgroundColor: '#1a70f1ff',
    };

    const [hover, setHover] = React.useState(false);

    return (
        <button
            style={{ ...buttonStyle, ...(hover ? hoverStyle : {}) }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {label}
        </button>
    );
};

export default CustomButton;
