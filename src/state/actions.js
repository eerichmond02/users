import axios from "axios";
import { ADD_USER, SELECTED_USER, DESELECT_USER, UPDATE_USERS, NEW_USER_PAGE, EDIT_USER_PAGE } from "./types";
import { User } from "./reducer";

export const fetchUserData = () => {
  return (dispatch, getState, url) => {
    axios.get(url + "User").then(response => {
      let newArray = response.data.map(user => {
        return addUser(user.firstName, user.lastName, user.email, user.createdAt, user.id);
      });
      dispatch(updateUsers(newArray));
    });
  };
};
export const addUser = (firstName, lastName, email, createdAt, id) => {
  let newUser = new User(firstName, lastName, email, createdAt, id);
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
      firstName: firstName,
      lastName: lastName,
      email: email
    };
    axios.post(url + "User", newUser).then(response => {
      dispatch(fetchUserData());
    });
  };
};
export const editUser = (firstName, lastName, email, id) => {
  console.log(id);
  return (dispatch, getState, url) => {
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email
    };
    axios.put(url + "User/" + id, user).then(response => {
      console.log(response);
      dispatch(fetchUserData());
    })
    .catch(err => console.log(err));
  }
}
export const newUserPage = () => {
    return {type: NEW_USER_PAGE}
}
export const editUserPage = () => {
  return {type: EDIT_USER_PAGE}
}
export const deleteUser = (id) => {
  return (dispatch, getState, url) => {
    axios.delete(url + "User/" + id).then(response => {
      dispatch(fetchUserData());
    })
    .catch(err => console.log(err));
  }
}