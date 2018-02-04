import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { addNewUser, newUserPage, editUser, editUserPage, deselectUser } from "./state/actions";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.selectedUser.firstName,
      lastName: this.props.selectedUser.lastName,
      email: this.props.selectedUser.email
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form>
        <label>First Name</label>
        <input
          name="firstName"
          onChange={this.handleChange}
          value={this.state.firstName}
        />
        <label>Last Name</label>
        <input
          name="lastName"
          onChange={this.handleChange}
          value={this.state.lastName}
        />
        <label>E-mail</label>
        <input
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <button
          onClick={e => {
            e.preventDefault();
            this.props.editUser(
              this.state.firstName,
              this.state.lastName,
              this.state.email,
              this.props.selectedUser.id
            );
          }}
        >
          Update
        </button>
        <button onClick={this.props.editUserPage}>Show</button>
        <button onClick={() => {this.props.editUserPage(); this.props.deselectUser()}}>Go back</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    editUser: (firstName, lastName, email, id) => {
        console.log(id);
      dispatch(editUser(firstName, lastName, email, id));
    },
    editUserPage: () => {
      dispatch(editUserPage());
    },
    deselectUser: () => {
        dispatch(deselectUser());
    }
  };
};
const connectedEditUser = connect(mapStateToProps, mapDispatchToProps)(
  EditUser
);
export default connectedEditUser;
