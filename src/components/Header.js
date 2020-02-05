import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="title title--big">Movies - database</h1>
                <div className="header__links"> 
                    <Link to="/Movietable">Table view</Link> | <Link to="/Moviecard">Card view</Link>
                </div>    
            </header>
        )
    }
}

export default Header;