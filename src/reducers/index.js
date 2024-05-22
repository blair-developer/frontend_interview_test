// src/reducers/index.js

import { combineReducers } from 'redux';
import { FETCH_USERS, UPDATE_USER } from '../actions';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case UPDATE_USER:
      return state.map(user => (user.id === action.payload.id ? action.payload : user));
    default:
      return state;
  }
};

export default combineReducers({
  users: usersReducer
});
