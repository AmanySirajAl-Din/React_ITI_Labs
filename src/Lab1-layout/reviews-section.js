import "./reviews-section.css";
import profile_1 from "./assets/images/profile-1.jpg";
import profile_2 from "./assets/images/profile-2.jpg";
import profile_3 from "./assets/images/profile-3.jpg";


function Header() {
    return (
        <section id="reviews-container" className="container-fluid row bg-quotes bg-darker">
            <div className="card-col col-lg-4 col-md-6 col-12">
                <div className="container card bg-main px-5 py-3 m-2">
                    <p className="row">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <p className="row">
                        <img src={profile_1} className="col-3 rounded-circle" />
                        <p className="col-4">
                            <span className="row smaller-txt fw-bold">Satish Patel</span>
                            <span className="row smaller-txt">Founder &#38; CEO, Huddle</span>
                        </p>
                    </p>
                </div>
            </div>

            <div className="card-col col-lg-4 col-md-6 col-12">
                <div className="container card bg-main px-5 py-3 m-2">
                    <p className="row">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <p className="row">
                        <img src={profile_2} className="col-3 rounded-circle" />
                        <p className="col-4">
                            <span className="row smaller-txt fw-bold">Bruce McKenzie</span>
                            <span className="row smaller-txt">Founder &#38; CEO, Huddle</span>
                        </p>
                    </p>
                </div>
            </div>
            <div className="card-col col-lg-4 col-md-6 col-12">
                <div className="container card bg-main px-5 py-3 m-2">
                    <p className="row">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <p className="row">
                        <img src={profile_3} className="col-3 rounded-circle" />
                        <p className="col-4">
                            <span className="row smaller-txt fw-bold">Eva Boyd</span>
                            <span className="row smaller-txt">Founder &#38; CEO, Huddle</span>
                        </p>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Header;