import {
  ADD_USER,
  SELECTED_USER,
  DESELECT_USER,
  UPDATE_USERS,
  NEW_USER_PAGE
} from "./types";

const initialState = {
  users: [],
  selectedUser: undefined,
  addNewUser: false
};

class User {
  constructor(name, email, createdAt, id) {
    this.name = name;
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
    default:
      return state;
  }
};
export default reducer;
export { User };
