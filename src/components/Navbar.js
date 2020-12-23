import React from 'react'
import logo from '../img/logo.png'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" >
                        <img src={logo} style={{ width: '50%' }} />
                    </a>
                </div>
            </nav>
        </div>
    )
}
