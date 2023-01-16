
import React from 'react' ;

import './header.css' ;
import notebook from '../../assets/notebook.png' ;

const Header = () => {
    return (
        <div>
            <div className='header__line' />
            <header className='header__container'>
                <img src={ notebook } alt="notebook" className="header__background" />
                <div className='header__greeting'>
                    <h1>WELCOME TO YOUR TODO'S </h1>
                    <h3>Let's get started</h3>
                </div>
            </header>
            <div className='header__line' />
        </div>
    )
}

export default Header ;