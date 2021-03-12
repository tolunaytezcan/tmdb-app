import React from 'react';
import './Header.css';
import '../../logo.svg'

function Header() {
    return (
        <div className="header">
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDb)" className="logo"></img>
        </div>
    )
}

export default Header;
