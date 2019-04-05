import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render() {
        return(
            <HashRouter>
            <div className="header-parent-box">
                <header>
                    <Link to='/' className="header-box-info">
                        <img src="../../images/houser_logo.png" alt="house" />
                        <h1>Houser</h1>
                    </Link>
                </header>
            </div>
            </HashRouter>
        );
    };
};

export default Header