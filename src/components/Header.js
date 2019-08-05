import React from 'react';

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
                                    <a className="nav-link text-dark" href="#">Home </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link text-dark" href="#">Article</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">About Us</a>
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