import React from 'react';
import './styles.css';

export default function UserList(props) {

    // deleteUser = (id) => console.log(id)

    return (
        <div className="register-container">
            <div className="content">
                <ul>
                    {props.userList.map((user, index) => (
                        <li key={index}>
                            <strong>Name:</strong>
                            <p>{user.name}</p>

                            <strong>Email:</strong>
                            <p>{user.email}</p>

                            <button onClick={() => { }} type="button">
                                Delete
                                </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}
