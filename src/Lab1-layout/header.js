import { Component } from "react";
import "./header.css";
import headerImg from "./assets/images/illustration-intro.png";


function Header() {
    return (
        <header className="container-fluid row text-center bg-img1">
            <div className="col-lg-3 col-md-2 col-1"></div>
            <div className="col-lg-6 col-md-8 col-10">
                <img src={headerImg} className="" />
                <div className="container py-5">
                    <h3 className="row">
                        All your files in one secure location,
                        accessible anywhere.
                    </h3>
                    <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione rem corrupti.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sunt placeat
                        ullam aut magni at provident cumque error dolorum mollitia quis,
                        sit inventore explicabo delectus perferendis odio ratione, maiores nihil?
                    </p>
                    <button className="btn btn-info rounded-pill text-light py-1 px-5">Get Started</button>
                </div>
            </div>
            <div className="col-lg-3 col-md-2 col-1"></div>
        </header>
    );
}

export default Header;