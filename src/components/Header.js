import React,{Component} from 'react';
import { Link } from "react-router-dom";

import Logo from './img/Erporate.png'

class Header extends React.Component {
    render () {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-white static-top">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            <img src={Logo} alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link text-dark" >Home </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/product" className="nav-link text-dark">Products</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/article" className="nav-link text-dark">Article</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link text-dark">About Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Header;