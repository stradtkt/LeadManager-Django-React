import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expand="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a href="#" className="navbar-brand">Hidden Brand</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a href="" className="nav-link"></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;
