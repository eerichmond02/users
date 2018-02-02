import axios from "axios";
import { ADD_USER, SELECTED_USER, DESELECT_USER, UPDATE_USERS, NEW_USER_PAGE } from "./types";
import { User } from "./reducer";

export const fetchUserData = () => {
  return (dispatch, getState, url) => {
    axios.get(url + "User").then(response => {
      let newArray = response.data.map(user => {
        return addUser(user.name, user.email, user.createdAt, user.id);
      });
      dispatch(updateUsers(newArray));
    });
  };
};
export const addUser = (name, email, createdAt, id) => {
  let newUser = new User(name, email, createdAt, id);
  return newUser;
};
export const selectUser = user => {
  return {
    type: SELECTED_USER,
    payload: user
  };
};
export const deselectUser = () => {
  return { type: DESELECT_USER };
};
export const updateUsers = users => {
  return { type: UPDATE_USERS, payload: users };
};
export const addNewUser = (firstName, lastName, email) => {
  return (dispatch, getState, url) => {
    let newUser = {
      name: firstName + " " + lastName,
      email: email
    };
    axios.post(url + "User", newUser).then(response => {
      dispatch(fetchUserData());
    });
  };
};
export const newUserPage = () => {
    return {type: NEW_USER_PAGE}
}