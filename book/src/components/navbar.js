import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div><Link to="/">Accueil</Link></div>
                <div className="navbar-buttons right">
                    <Link to='/new' className="btn "> Nouvelle Page </Link> </div>
            </nav>
        );
    }
}