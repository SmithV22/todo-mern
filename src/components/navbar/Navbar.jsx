
import React, { useState } from 'react' ;
import { BiHome } from 'react-icons/bi' ;  

import './navbar.css' ;

const Navbar = () => {
    const [activeNav, setActiveNav] = useState() ;
    return (
        <div className='nav__container'>
            <nav>
                <a href="/" onClick={ () => setActiveNav('#home') } className={ activeNav === '#' ? 'active' : '' }><BiHome /></a>
            </nav>
        </div>
    )
}

export default Navbar ;