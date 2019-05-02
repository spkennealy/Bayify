import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.demoUser = this.demoUser.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        // this.type = this.type.bind(this);
    }

    handleInput(type) {
        return (e) => (
            this.setState({
                [type]: e.target.value
            })
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    // ------------------------------------------------------
    // MY ATTEMPT TO WRITE THE TYPED MODULE USED BELOW
    // type(word, target) {
    //     const htmlElement = document.getElementById(target);
    //     const wordArray = word.split();
    //     console.log(wordArray);

    //     setInterval(() => {
    //         if (wordArray.length < 1) return clearInterval();
    //         htmlElement.value += wordArray.shift();
    //     }, 300);
    // }
    // ------------------------------------------------------

    clearInputs() {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }

    demoUser(e) {
        e.preventDefault();

        this.clearInputs();

        // ------------------------------------------------------
        // MY ATTEMPT TO WRITE THE TYPED MODULE USED BELOW
        // const username = "Curry30";
        // const password = "password";

        // this.type(username, "username");

        // setTimeout(() => {
        //     this.type(password, "password");
        // }, 3000);
        // ------------------------------------------------------

        const username = {
            strings: ["Curry30"],
            typeSpeed: 70
        };

        const password = {
            strings: ["password"],
            typeSpeed: 70
        };

        this.setState({
            username: "",
            password: ""
        });

        new Typed("#username", username);

        setTimeout(() => {
            new Typed("#password", password);
        }, 1000);

        setTimeout(() => {
            this.props.processForm({ 
                username: "Curry30",
                password: "password"
            });
        }, 2000);
    }

    render() {
        const formType = this.props.formType;
        const errors = this.props.errors;

        const link = formType === "Log In" ? (
            <div className="sign-up-instead">
                <p>Don't have an account?</p>
                <Link 
                    to="/signup"
                    className="signup-button"
                >SIGN UP FOR BAYIFY</Link>
            </div>
        ) : (
            <div className="link-to-login">
                <p>Already have an account?</p>
                <Link 
                    to="/login"
                >Log in</Link>
            </div>
        );

        const email = () => {
            if (formType === "Sign Up") {
                return (
                    <>
                        <input
                            className={errors.email ?
                                "signup-login-input-error" : "signup-login-input"}
                            type="email"
                            onChange={this.handleInput("email")} 
                            placeholder="Email"
                        />

                            <div className="errors">
                                {errors.email ?
                                    `Email ${errors.email[0]}` : null}
                            </div>

                        <input
                            className={errors.email ?
                                "signup-login-input-error" : "signup-login-input"}
                            type="email"
                            onChange={this.handleInput("email")}
                            placeholder="Confirm email"
                        />
                    </>
                );
            }
        };

        const displayFormTitle = type => (
            type === "Log In" ? (
                <>
                    <p 
                        className="signup-login-form-text"
                    >To continue, log in to Bayify.</p>
                    <br/>
                    
                    <button 
                        type="button"
                        className="demo-user-log-in"
                        onClick={this.demoUser}
                    >DEMO USER</button>

                    <div className="divider">
                        <span className="divider-title">OR</span>
                    </div>
                </>
            ) : (
                <>
                    <button type="button" className="link-to-demo">
                    <Link 
                        to="/login"
                        className="demo-user"
                        // onClick={this.demoUser}
                        >DEMO USER</Link></button>

                    <div className="divider">
                        <span className="divider-title">or</span>
                    </div>

                    <p className="signup-login-form-text"
                    >Sign up with your email address</p>
                </>
            )
        );

        const displayUsernamePasswordInputs = type => (
            type === "Log In" ? (
                <>
                    <input
                        id="username"
                        className="signup-login-input"
                        type="text"
                        onChange={this.handleInput("username")}
                        placeholder="Username"
                    />

                    <input
                        id="password"
                        className="signup-login-input"
                        type="password"
                        onChange={this.handleInput("password")}
                        placeholder="Password"
                    />

                    <div className="contain-login-button">
                        <label className="hide-default-checkbox">
                            <input type="checkbox" className="green-checkbox"/>
                             Remember me?</label>
                        <input
                            className="green-button login-button"
                            type="submit"
                            value={type.toUpperCase()}
                        />
                    </div>
                </>
            ) : (
                <>
                    <input
                        className={errors.password ?
                            "signup-login-input-error" : "signup-login-input"}
                        type="password"
                        onChange={this.handleInput("password")}
                        placeholder="Password"
                    />
                        <div className="errors">
                            {errors.password ? 
                                `Password ${errors.password[0]}` : null}
                        </div>

                    <input
                        className={errors.username ?
                            "signup-login-input-error" : "signup-login-input"}
                        type="text"
                        onChange={this.handleInput("username")}
                        placeholder="What should we call you?"
                    />

                        <div className="errors">
                            {errors.username ? (
                                errors.username.length > 1 ? 
                                errors.username.forEach(error => {
                                    return ( 
                                    <ul>
                                        <li>{`Username ${error}`}</li>
                                    </ul>
                                );}) : `Username ${errors.username[0]}`
                             ) : null}
                        </div>

                    <input
                        className="green-button signup-login-button"
                        type="submit"
                        value={type.toUpperCase()}
                    />
                </>
            )
        );

        const displayLogInErrors = errors => {
            if (errors.login) {
                return (
                    <div className="error-username-password">
                        <p>{errors.login}</p>
                    </div>
                );
            } 
        };

        // EMAIL VALIDATION FOR LATER
        // const validateEmail = (inputText) => {
        //     const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        //     if (inputText.value.match(mailformat)) {
        //         return true;
        //     }
        //     return false;
        // };

        return (
            <>
                <main className="signup-login">
                    <div>
                        <header className="signup-login-header">
                            <div className="signup-login-logo">
                                <Link to="/">
                                    <img
                                        src="images/bayify-logo.png"
                                        alt="logo"
                                        className="bayify-logo" />
                                    <h3 className="session-title">Bayify</h3>
                                </Link>
                            </div>
                        </header>
                        <form onSubmit={this.handleSubmit} className="signup-login-form">
                            <section>
                                {displayFormTitle(formType)}
                            </section>

                            <section>
                                {displayLogInErrors(this.props.errors)}
                            </section>

                            <div className="signup-email">{email()}</div>
                            
                            <section className="username-password">
                                {displayUsernamePasswordInputs(formType)}
                            </section>

                            <span>{link}</span>

                        </form>
                    </div>
                </main>
            </>
        );
    }
}
