import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './login'


function Applications() {
    return (

        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/sign-in'}>
                        CONSTRUCTION WORKER SERVICES
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/sign-in'}>
                                    Sign in
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/sign-up'}>
                                    Sign up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

            <div className="outer">
                <div className="inner">


                </div>
                <div>
                    <img src="https://www.bing.com/th/id/OGC.155942bd98fd614da19b4a1a942f4d80?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f1536793%2fscreenshots%2f3434500%2fvideoconstruc2.gif&ehk=fge2wILmOaGlGCQLjLDHLXUccVP%2fsWviVg6W0UYBPx8%3d" height={200} width={100} ></img>
                </div>
            </div>
        </div>

    )
}

export default Applications