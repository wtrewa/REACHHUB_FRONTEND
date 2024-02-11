import axios from "axios";
import { getLocalStorageValue } from "../localStorage";
import {
  GET_PLAYER_SUCCESS,
  PLAYER_FAILURE,
  PLAYER_REQUEST,
} from "../actionType";

export const getPlayerAction = async (dispatch) => {
  try {
    dispatch({ type: PLAYER_REQUEST });
    const token = getLocalStorageValue("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(
      `https://reachhub0-2.onrender.com/top-players`,
      config
    );

    console.log(res);
    dispatch({ type: GET_PLAYER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: PLAYER_FAILURE });
    console.log(error.message);
  }
};
export const getPlayerActionCsv = async (dispatch) => {
    try {
      const token = getLocalStorageValue("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob', // Set responseType to 'blob' to receive binary data
      };
      const res = await axios.get(
        `https://reachhub0-2.onrender.com/players/rating-history-csv`,
        config
      );
  
      // Create a Blob from the response data
      const blob = new Blob([res.data], { type: 'text/csv' });
  
      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(blob);
  
      // Create a link element and trigger a click to download the file
      const link = document.createElement('a');
      link.href = url;
      link.download = 'player_rating_history.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
      // Cleanup by revoking the URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      dispatch({ type: PLAYER_FAILURE });
      console.log(error.message);
    }
  };
  
