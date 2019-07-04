import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                age: '',
                salary: ''
            },
            errorMessage: ''
        };

        this.onAddUser = this.onAddUser.bind(this);
    }

    onBlur(event, key) {
        let user = this.state.user;
        user[key] = event.target.value;
        this.setState(user);
    }

    onAddUser(event) {
        event.preventDefault();
        console.log(this.state.user);

        axios.post("http://localhost:3000/users", this.state.user)
            .then(() => {
                this.props.addUserHandler(this.state.user);
            })
            .catch(() => {
                this.setState({errorMessage: "Failed to add user."});
            });
    }

    render() {
        return(
            <div className="container">
                <div className="col-md-6">
                    <h2>{this.props.headerValue}</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="input" className="form-control" id="name" placeholder="Enter name" 
                                onBlur={(event) => this.onBlur(event, "name")} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type="input" className="form-control" id="age" placeholder="Enter age"
                                onBlur={(event) => this.onBlur(event, "age")} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="salary">Salary</label>
                            <input type="input" className="form-control" id="salary" placeholder="Enter salary"
                            onBlur={(event) => this.onBlur(event, "salary")} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.onAddUser}>{this.props.buttonValue}</button>
                        {this.state.errorMessage &&
                            <div className="alert alert-danger">
                                <span>{this.state.errorMessage}</span>
                            </div>
                        }
                    </form>
                </div>
            </div>
        );
    }
}


AddUser.defaultProps = {
    headerValue: 'AddUser',
    buttonValue: 'AddUser'
}

AddUser.propTypes = {
    headerValue: PropTypes.string,
    buttonValue: PropTypes.string,
}

export default AddUser;
