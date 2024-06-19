import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import TableJEE from './TableJEE';

function Navbar(props) {
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ANMAY</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav nav-pills">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/aboutUs">About Us</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/contactUs">Contact Us</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Free Materials
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/JEE">IIT JEE</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/MAIN">JEE MAIN</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/NEET">NEET</NavLink></li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    NCERT Solutions
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/class12">NCERT Solutions for Class 12</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/class11">NCERT Solutions for Class 11</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/Class10">NCERT Solutions for Class 10</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/Class9">NCERT Solutions for Class 9</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/Class8">NCERT Solutions for Class 8</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/Class7">NCERT Solutions for Class 7</NavLink></li>                                    
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/Class6">NCERT Solutions for Class 6</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/Class5">NCERT Solutions for Class 5</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/Class4">NCERT Solutions for Class 4</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/Class3">NCERT Solutions for Class 3</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/Class2">NCERT Solutions for Class 2</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/Class1">NCERT Solutions for Class 1</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-danger" >
                        <Link className="nav-link"  to="/admin">ADMIN</Link>
                    </button>

                    {/* <button type="button" className="btn btn-success">SIGN IN</button> */}

                </div>
            </nav>
        </div>
    );
}

export default Navbar;