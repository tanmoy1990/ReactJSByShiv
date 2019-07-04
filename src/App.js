import React from 'react';
import './App.css';
import AddUser from './AddUser';
import ListUsers from './ListUsers';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/users")
      .then((response) => {
        this.setState({users: response.data});
      });
  }

  addUserHandler = (user) => {
    let users = this.state.users;

    users.push(user);

    this.setState({users: users});
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <AddUser headerValue={"Add User"} buttonValue={"Add User"} addUserHandler={this.addUserHandler}/>
        </div>
        
        <div className="row" style={{marginTop: '20px'}}>
          <ListUsers users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
