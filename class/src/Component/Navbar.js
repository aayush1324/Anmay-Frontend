import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/Jee">JEE</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/MAIN">MAIN</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/NEET">NEET</NavLink></li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Calculator
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/BasicCal">Basic Calculator</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/ConversionCal">Conversion Calculator</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/MathCal">Math Calculator</NavLink></li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    NCERT Solutions
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/Class12">NCERT Solutions for Class 12</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/class11">NCERT Solutions for Class 11</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/class10">NCERT Solutions for Class 10</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/class9">NCERT Solutions for Class 9</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/class8">NCERT Solutions for Class 8</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/class7">NCERT Solutions for Class 7</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/class6">NCERT Solutions for Class 6</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/class5">NCERT Solutions for Class 5</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/class4">NCERT Solutions for Class 4</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/class3">NCERT Solutions for Class 3</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/class2">NCERT Solutions for Class 2</NavLink></li>
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/class1">NCERT Solutions for Class 1</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Quiz
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" activeClassName="active" to="/quiz">Quiz</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/quiz">Quizzes</NavLink>
                            </li>

                        </ul>
                    </div>
                    <button type="button" className="btn btn-danger" >
                        <Link className="nav-link"  to="/admin">ADMIN</Link>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;