
import workImg from "./assets/images/illustration-stay-productive.png";


function Work_Section() {
    return (
        <section className="container-fluid row bg-darker px-2 py-5">
            <div className="col-md-6 col-12 p-5">
                <img src={workImg} className="" />
            </div>
            <div className="col-md-6 col-12 p-5 d-flex align-items-center">
                <p>Stay productive, wherever you are Never let location be an issue when accessing your files. Fylo has you Covered for all of your file storage needs. Securely share files and folders with friends, family and calleagues for live callaboration. No email attachments required.
                    <br />
                    <br />
                    <span> <a href="#" className="link-info">See how Fylo works</a></span>
                </p>
            </div>
        </section>
    );
}

export default Work_Section;