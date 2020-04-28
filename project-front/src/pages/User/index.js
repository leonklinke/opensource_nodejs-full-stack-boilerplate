import React, { Component } from 'react';
//Styles
import './styles.css';
//Components
import UserForm from '../../components/UserForm';
import UserList from '../../components/UserList';
//Services
import userService from '../../services/user'

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [
                { name: "leon klinke", email: "leon.klinkea@gmail.com" },
                { name: "leon klinke", email: "leon.klinkea@gmail.com" },
                { name: "User test", email: "user.test@gmail.com" }
            ],
        };
    }
    createUser = async (user) => {
        let response = await userService.add(user);
        console.log("response from API", response)
    }

    render() {
        return (
            <div className="container">
                <h1>Simple user Crud</h1>
                <div className="flex-row">
                    <div className="flex-large">
                        <h2>Add user</h2>
                        <UserForm onUserSave={(user) => this.createUser(user)} />
                    </div>
                    <div className="flex-large">
                        <h2>View users</h2>
                        <UserList userList={this.state.userList} />
                    </div>
                </div>
            </div>
        );
    }
}
