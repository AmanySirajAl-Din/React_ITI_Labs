import { Component } from "react";

import "./navbar.css";

import logoImg from "./assets/images/logo.svg";

export default class Navbar extends Component {
    render() {
        return ( //in react Figmant container
            <>
                <nav className="navbar navbar-expand-lg navbar-dark py-3">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="#">
                            <img src={logoImg} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sign in</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}