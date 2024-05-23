import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const UPDATE_USER = 'UPDATE_USER';

export const fetchUsers = () => async dispatch => {
  try {
    const response = await axios.get('https://lionfish-app-qkntx.ondigitalocean.app/api/users/');
    dispatch({ type: FETCH_USERS, payload: response.data });
  } catch (error) {
    console.error("Error fetching users:", error.response ? error.response.data : error.message);
    // Optionally dispatch an error action here if you want to handle it in the reducer
  }
};

export const updateUser = (user) => async dispatch => {
  try {
    const response = await axios.patch(`https://lionfish-app-qkntx.ondigitalocean.app/api/user/${user.id}`, user);
    dispatch({ type: UPDATE_USER, payload: response.data });
  } catch (error) {
    console.error("Error updating user:", error.response ? error.response.data : error.message);
    // Optionally dispatch an error action here if you want to handle it in the reducer
  }
};
