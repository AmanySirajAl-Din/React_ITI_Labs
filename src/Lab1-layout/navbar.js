import { Component } from "react";
import logoImg from "./assets/images/logo.svg"

export default class Navbar extends Component {
    render() {
        return ( //in react Figmant container
            <>
                <nav class="navbar navbar-expand-lg navbar-dark py-3">
                    <div class="container-fluid">

                        <a class="navbar-brand" href="#">
                            <img src={logoImg} />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            </ul>
                            <span class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </span>
                            <span class="nav-item">
                                <a class="nav-link" href="#">Team</a>
                            </span>
                            <span class="nav-item">
                                <a class="nav-link" href="#">Sign in</a>
                            </span>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}