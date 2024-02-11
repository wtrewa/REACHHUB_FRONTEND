import axios from "axios";
import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  CART_PRODUCT_FAILURE,
  PATCH_CART_PRODUCT_SUCCESS,
  POST_AUTH_SUCCESS,
} from "../actionType";
import { getLocalStorageValue, setLocalStorageValue } from "../localStorage";


export const loginAction = (obj) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });
    await axios
      .post(`https://reachhub0-2.onrender.com/user/login`, obj)
      .then((res) => {
        console.log(res);
        console.log(res.data.token);
        setLocalStorageValue("token", res.data.token);
        dispatch({ type: POST_AUTH_SUCCESS, payload: res.data.data });
        return res
      });
  } catch (error) {
    dispatch({ type: AUTH_FAILURE });
  }
};



export const singupAction = (obj) => async (dispatch) => {
  try {
    
     const res = await axios.post(
      `https://reachhub0-2.onrender.com/user/register`,
      obj
    );
     
    return res;
  } catch (error) {
    console.log(error);
  }
};
