import React, { Component } from "react";
import "./App.css";
import Users from "./Users";
import DisplayUser from "./DisplayUser";
import { connect } from "react-redux";
import AddNewUser from "./AddNewUser";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.selectedUser ? <DisplayUser /> : this.props.addNewUser ? <AddNewUser /> : <Users />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser,
    addNewUser: state.addNewUser
  };
};

const connectedApp = connect(mapStateToProps)(App);
export default connectedApp;
