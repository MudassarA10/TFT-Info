/* eslint-disable no-unused-vars */
// Button.jsx
import React from 'react';
import "../buttun/btn.css";

// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick }) => (
    <button
        // eslint-disable-next-line react/prop-types
        className={`button-20 button-color-${label.toLowerCase().replace(/\s+/g, '-')}`}
        role="button"
        onClick={onClick}
    >
        {label}
    </button>
);



export default Button;
