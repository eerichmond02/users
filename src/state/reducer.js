import {
  ADD_USER,
  SELECTED_USER,
  DESELECT_USER,
  UPDATE_USERS,
  NEW_USER_PAGE,
  EDIT_USER_PAGE
} from "./types";

const initialState = {
  users: [],
  selectedUser: undefined,
  addNewUser: false,
  editUser: false
};

class User {
  constructor(firstName, lastName, email, createdAt, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.createdAt = createdAt;
    this.id = id;
  }
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return {
        ...state,
        users: action.payload
      };
    case SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload
      };
    case DESELECT_USER:
      return {
        ...state,
        selectedUser: undefined
      };
    case NEW_USER_PAGE:
      return {
        ...state,
        addNewUser: !state.addNewUser
      };
      case EDIT_USER_PAGE:
      return {
        ...state,
        editUser: !state.editUser
      };
    default:
      return state;
  }
};
export default reducer;
export { User };
