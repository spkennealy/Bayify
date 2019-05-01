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
        // check history.hash
            // make another action to clear errors
            this.props.clearErrors();
    }

    render() {
        const formType = this.props.formType;

        const link = formType === "Log In" ? (
            <Link to="/signup">Sign Up!</Link>
            ) : (
                <Link to="/login">Log In!</Link>
            );

        const email = () => {
            if (formType === "Sign Up") {
            return (
                <label>Email:
                            <input
                        type="email"
                        onChange={this.handleInput("email")} />
                </label>
                );
            }
        };

        const displayErrors = () => {

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
            <form onSubmit={this.handleSubmit}>
                <h3>{formType === "Log In" ? "Log In" : "Sign Up"}</h3>
                <label>Username:
                    <input
                        type="text"
                        onChange={this.handleInput("username")} />
                </label>
                <div>{email()}</div>

                <label>Password:
                    <input
                        type="password"
                        onChange={this.handleInput("password")} />
                </label>
                <input type="submit" value={formType} />

                <p>{link}</p>

                <ul>
                    {this.props.errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
            </form>
        );
    }
}
