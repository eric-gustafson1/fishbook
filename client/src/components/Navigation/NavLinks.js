import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';

import './NavLinks.css';

const NavLinks = (props) => {
    const auth = useContext(AuthContext);

    return <ul className='nav-links'>
        <li>
            <NavLink to='/' exact>ALL USERS</NavLink>
        </li>
        {auth.isLoggedIn && <li>
            <NavLink to='/u1/trips'>MY TRIPS</NavLink>
        </li>}
        {auth.isLoggedIn && <li>
            <NavLink to='/trips/new'>NEW TRIP</NavLink>
        </li>}
        {!auth.isLoggedIn && <li>
            <NavLink to='/auth'>LOGIN</NavLink>
        </li>}
        {auth.isLoggedIn && <li>
            <button onClick={auth.logout}>LOGOUT</button>
        </li>}
    </ul>


}

export default NavLinks;