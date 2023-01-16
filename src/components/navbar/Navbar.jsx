
import React, { useState } from 'react' ;
import { BiHome } from 'react-icons/bi' ;  
import { TbListDetails } from 'react-icons/tb' ;
import { FaRegNewspaper } from 'react-icons/fa' ;
import { SlCalender } from 'react-icons/sl' ;

import './navbar.css' ;

const Navbar = () => {
    const [activeNav, setActiveNav] = useState() ;
    return (
        <div className='nav__container'>
            <nav>
                <a href="/" onClick={ () => setActiveNav('#home') } className={ activeNav === '#' ? 'active' : '' }><BiHome /></a>
            
                <a href="/calender" onClick={ () => setActiveNav('#calender') } className={ activeNav === '#callender' ? 'active' : '' }><SlCalender /></a>
            </nav>
        </div>
    )
}

export default Navbar ;