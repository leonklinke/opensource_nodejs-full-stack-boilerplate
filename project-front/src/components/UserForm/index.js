import React, { Component } from 'react';
import './styles.css';

export default class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
        };
    }

    handleRegister = async (e) => {
        e.preventDefault();
        this.props.onUserSave(this.state)
    }
    render() {
        return (
            <div className="register-container">
                <div className="content">
                    <form onSubmit={this.handleRegister}>
                        <input
                            placeholder="Name"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />

                        <input
                            type="email"
                            placeholder="E-mail"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />

                        <button className="button" type="submit">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}
