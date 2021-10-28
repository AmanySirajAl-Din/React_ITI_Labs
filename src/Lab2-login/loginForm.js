import { useState, useEffect } from "react";
import './loginForm.css';

export default function LoginForm() {
    // user: const
    // setUser: function to change the value
    // useState: Hook 
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //const emailRegex = /^[-a-zA-Z0-9-()]+(\S+[-a-zA-Z0-9-()]+)*$/;


    const [errors, setErrors] = useState({
        email: null,
        password: null,
    });

    useEffect(() => {
        if (!errors.email && !errors.password) {
            console.log(user);
        }
    }, [errors])

    const handleInputChange = (e) => {
        console.log(e.target, e.target.value);
        if (e.target.name === "email") {
            setUser({
                ...user,
                email: e.target.value,
            });
            setErrors({
                ...errors,
                email:
                    e.target.value.length === 0
                        ? "This field is required"
                        : e.target.value.length < 6
                            ? "Min Length is 6"
                            : !emailRegex.test(e.target.value)
                                ? "Not valid email address"
                                : null,
            });
        }
        if (e.target.name === "password") {
            setUser({
                ...user,
                password: e.target.value,
            });
            setErrors({
                ...errors,
                password:
                    e.target.value.length === 0
                        ? "This field is required"
                        : e.target.value.length < 8
                            ? "Min Length is 8"
                            : null,
            });
        }
    };
    const submitLoginFun = (e) => {
        e.preventDefault();
        setErrors({
            ...errors,
            email:
                user.email.length === 0
                    ? "This field is required"
                    : user.email.length < 6
                        ? "Min Length is 6"
                        : !emailRegex.test(user.email)
                            ? "Not valid email address"
                            : null,
        });
    }
    return (
        <div className="loginForm">
            Hello LoginForm
            <div className="container my-4">
                <form onSubmit={(e) => submitLoginFun(e)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email Address
                        </label>
                        <input
                            name="email"
                            value={user.email} // update value on each change
                            onChange={(e) => handleInputChange(e)}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="exampleInputEmail1"
                        />
                        {errors.email && (
                            <small className="text-danger">{errors.email}</small>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            name="password"
                            value={user.password} // update value on each change
                            onChange={(e) => handleInputChange(e)}
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            aria-describedby="exampleInputPassword1"
                        />
                        {errors.password && (
                            <small className="text-danger">{errors.password}</small>
                        )}
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}