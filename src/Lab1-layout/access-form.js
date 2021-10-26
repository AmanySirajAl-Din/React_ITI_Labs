import "./access-form.css";

function Access_Form() {
    return (
        <section className="container-fluid access-form text-center">
            <div className="form-card bg-main px-4 py-4 rounded-1 shadow">
                <h3>Get early access today</h3>
                <p className="smaller-txt">It only takesa minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <input className="col-8 rounded-pill py-1 px-1 m-2 text-center" type="text" placeholder="email@example.com" />
                <button className="col btn btn-info rounded-pill text-light py-1 px-5 m-2">Get Started For Free</button>
            </div>
        </section>
    );
}


export default Access_Form;