import "./footer.css";


import logoImg from "./assets/images/logo.svg";

function Footer() {
    return (
        <footer className="container-fluid">
            <div className="container">
                <div className="row">
                    <a className="navbar-brand" href="#">
                        <img src={logoImg} />
                    </a>
                </div>

            </div>
        </footer>
    );
}


export default Footer;