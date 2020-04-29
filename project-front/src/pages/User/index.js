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
            userList: [],
        };
    }
    createUser = async (user) => {
        await userService.create(user);
        await this.listUsers();

    }
    listUsers = async () => {
        let response = await userService.listAll();
        this.setState({ userList: response });
    }
    deleteUser = async (id) => {
        await userService.delete(id);
        await this.listUsers();
    }
    componentDidMount = async () => {
        await this.listUsers();
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
                        <UserList
                            onDelete={(id) => this.deleteUser(id)}
                            userList={this.state.userList}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
