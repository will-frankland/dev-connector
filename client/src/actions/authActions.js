import { TEST_DISPATCH } from "./types"
import axios from "axios";

// Register User
export const registerUser =(userData) => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};

// Login - Get User Token
export const loginUser = (userData) => dispatch => {
  axios.post('/api/users/login', userData)
    .then(res => {

    })
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
};