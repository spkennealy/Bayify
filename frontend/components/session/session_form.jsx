import React from 'react';
import { Link } from 'react-router-dom';

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

    render() {
        const formType = this.props.formType;

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
                            className="signup-login-input"
                            type="email"
                            onChange={this.handleInput("email")} 
                            placeholder="Email"
                        />
                        <input
                            className="signup-login-input"
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
                    <button className="demo-user-log-in">DEMO USER</button>
                    <div className="divider">
                        <span className="divider-title">OR</span>
                    </div>
                </>
            ) : (
                <>
                    <button className="demo-user">DEMO USER</button>
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
                        className="signup-login-input"
                        type="text"
                        onChange={this.handleInput("username")}
                        placeholder="Username"
                    />

                    <input
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
                        className="signup-login-input"
                        type="password"
                        onChange={this.handleInput("password")}
                        placeholder="Password"
                    />

                    <input
                        className="signup-login-input"
                        type="text"
                        onChange={this.handleInput("username")}
                        placeholder="What should we call you?"
                    />

                    <input
                        className="green-button signup-login-button"
                        type="submit"
                        value={type.toUpperCase()}
                    />
                </>
            )
        );

        const displayLogInErrors = errors => {
            if (errors.includes("Incorrect")) {
                return (
                    <div className="error-username-password">
                        <p>{errors[0]}</p>
                    </div>
                )
            }

            // return errors.map((error, idx) => {
            //     if (error.includes("Incorrect username")) {
            //         return (
            //             <div>
            //             </div>
            //         )
            //     }
            //         // <li key={idx}>{error}</li>
            // }
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
                            
                            <div className="signup-email">{email()}</div>
                            
                            <section className="username-password">
                                {displayUsernamePasswordInputs(formType)}
                            </section>

                            <p>{link}</p>

                            
                        </form>
                    </div>
                </main>
            </>
        );
    }
}
