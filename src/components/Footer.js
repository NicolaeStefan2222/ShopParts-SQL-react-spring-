import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
         &copy; My First Company {new Date().getFullYear()}
        </div>
    );
}

export default Footer;