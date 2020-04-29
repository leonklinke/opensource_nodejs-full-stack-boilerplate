import React from 'react';
import './styles.css';

export default function UserList(props) {

    // deleteUser = (id) => console.log(id)
    if (props.userList.length <= 0) {
        return (
            <div className="register-container">No users</div>
        )
    }

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

                            <button onClick={() => props.onDelete(user.id)} type="button">
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}
