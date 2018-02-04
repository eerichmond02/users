// User component
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData, selectUser, newUserPage, editUserPage, deleteUser } from "./state/actions";

class Users extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  }
  render() {
    return (
      <div id='users'>
        <h1 className="App-title">Users</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
            {this.props.users.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.firstName + ' ' + user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <button onClick={() => this.props.selectUser(user)}>
                      show
                    </button>
                    <button onClick={() => {this.props.selectUser(user); this.props.editUserPage()}}>Edit</button>
                    <button onClick={() => this.props.deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button id='newUser' onClick={() => this.props.newUserPage()}>Add New User</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: () => {
      dispatch(fetchUserData());
    },
    selectUser: user => {
      dispatch(selectUser(user));
	},
	newUserPage: () => {
		dispatch(newUserPage());
  },
  editUserPage: () => {
		dispatch(editUserPage());
  },
  deleteUser: (id) => {
		dispatch(deleteUser(id));
	}
 };
};
const connectedUsers = connect(mapStateToProps, mapDispatchToProps)(Users);
export default connectedUsers;
