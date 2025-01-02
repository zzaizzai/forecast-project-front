import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/forecast"> Forecast </Link></li>
                <li><Link to="/result"> Result </Link></li>
                <li><Link to="/analysis"> Anaylsis </Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;