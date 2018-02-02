// User component
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData, selectUser, newUserPage } from "./state/actions";

class Users extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  }
  render() {
    return (
      <div>
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
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <button onClick={() => this.props.selectUser(user)}>
                      show
                    </button>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={() => this.props.newUserPage()}>Add New User</button>
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
	}
  };
};
const connectedUsers = connect(mapStateToProps, mapDispatchToProps)(Users);
export default connectedUsers;
