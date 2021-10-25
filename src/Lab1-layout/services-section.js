import { Component } from "react";

import "./services-section.css";

import img1 from "./assets/images/icon-access-anywhere.svg";
import img2 from "./assets/images/icon-security.svg";
import img3 from "./assets/images/icon-collaboration.svg";
import img4 from "./assets/images/icon-any-file.svg";


function Services_Section() {
    return (
        <section className="container-fluid row text-center bg-darker">
            <div className="col-lg-3 col-md-2 col-1"></div>
            <div className="col-lg-6 col-md-8 col-10">
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="icon-div">
                            <img src={img1} className="icon-img" />
                        </div>
                        <p className="fs-6 fw-bold">Acess your files, anywhere</p>
                        <p className="smaller-txt">
                            Lorem ipsum dolor.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sunt placeat
                        </p>
                    </div>
                    <div className="col-6">
                        <div className="icon-div">
                            <img src={img2} className="icon-img" />
                        </div>
                        <p className="fs-6 fw-bold">Security you can trust</p>
                        <p className="smaller-txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione rem corrupti.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sunt placeat
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="icon-div">
                            <img src={img3} className="icon-img" />
                        </div>
                        <p className="fs-6 fw-bold">Real-time collaboration</p>
                        <p className="smaller-txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione rem corrupti.
                            consectetur adipisicing elit. Iure sunt placeat
                        </p>
                    </div>
                    <div className="col-6">
                        <div className="icon-div">
                            <img src={img4} className="icon-img" />
                        </div>
                        <p className="fs-6 fw-bold">Store any type of file</p>
                        <p className="smaller-txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione rem corrupti.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sunt placeat
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-2 col-1"></div>
        </section>
    );
}

export default Services_Section;