import React from "react";
import { connect } from "react-redux";
import { deselectUser } from "./state/actions";

const DisplayUser = props => {
  return (
    <div>
      <h1>User Id: {props.selectedUser.id}</h1>
      <p>Full Name: {props.selectedUser.name}</p>
      <p>Email: {props.selectedUser.email}</p>
      <p>Created At: {props.selectedUser.createdAt}</p>
      <button onClick={props.deselectUser}>Back</button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser
  };
};
const mapDispatchToProps = dispatch => {
    return {
        deselectUser: () => {
          dispatch(deselectUser());
        }
    }
}
const connectedDisplayUser = connect(mapStateToProps, mapDispatchToProps)(DisplayUser);
export default connectedDisplayUser;
