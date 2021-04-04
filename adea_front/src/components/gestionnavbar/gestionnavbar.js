import './gestionnavbar.css';

import React from 'react'
import { Link } from 'react-router-dom';

const GestionNavBar = () => {
    return (
        <div>
            <ul id="nav">
                <li><Link >Home</Link></li>
                <li><Link >Utilisateur</Link></li>
                <li><Link>Parents</Link></li>
                <li><Link >Enfants</Link></li>
            </ul>
        </div>
    )
}

export default GestionNavBar;
