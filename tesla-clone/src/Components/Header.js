import React from 'react';
import './Header.css';
import teslaLogo from './img/teslaLogo.svg';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={teslaLogo} alt="Tesla Logo" className="header__logoImg"/>
            </div>

            <div className="header__center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar panel</p>
            </div>

            <div className="header__right">
                <p>Shop</p>
                <p>Tesla Account</p>
            </div>
        </div>
    )
}

export default Header
