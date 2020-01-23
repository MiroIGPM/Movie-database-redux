import React from 'react';
import { Link } from 'react-router-dom';

 function Header() {
    return (
        <header>
            <h1>Movies - database</h1>
            <Link to="/Movietable">Table view</Link> | <Link to="/Moviecard">Card view</Link>
        </header>
    )
}

export default Header;