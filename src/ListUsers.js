import React from 'react';

const ListUsers = (props) => {
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user, index) => {
                       return (<tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.salary}</td>
                               </tr>
                            )
                    })}
                </tbody>
            </table>
        );
}

export default ListUsers;