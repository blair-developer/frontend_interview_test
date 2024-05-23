import { FETCH_USERS, UPDATE_USER } from '../actions';

const initialState = {
  users: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
      };
    default:
      return state;
  }
}
