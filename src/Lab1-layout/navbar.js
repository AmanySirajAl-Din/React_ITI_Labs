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
                        <ul className="navbar-nav mb-2 mb-lg-0">
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
                </nav>
            </>
        );
    }
}