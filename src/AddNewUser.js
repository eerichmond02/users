import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { addNewUser, newUserPage } from "./state/actions";

class AddNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form id='newUserForm'>
        <h2>Add a New User</h2>
        <input
          name="firstName"
          onChange={this.handleChange}
          value={this.state.firstName}
          placeholder="firstName"
        />
        <input
          name="lastName"
          onChange={this.handleChange}
          value={this.state.lastName}
          placeholder="lastName"
        />
        <input
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          placeholder="email"
        />
        <button
          onClick={e => {
            e.preventDefault();
            this.props.addNewUser(
              this.state.firstName,
              this.state.lastName,
              this.state.email
            );
            this.setState({ firstName: "", lastName: "", email: "" });
          }}
        >
          Create
        </button>
        <button onClick={this.props.newUserPage}>Go back</button>
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
    addNewUser: (firstName, lastName, email) => {
      dispatch(addNewUser(firstName, lastName, email));
    },
    newUserPage: () => {
        dispatch (newUserPage());
    }
  };
};
const connectedAddNewUser = connect(mapStateToProps, mapDispatchToProps)(
  AddNewUser
);
export default connectedAddNewUser;
