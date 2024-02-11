import { GET_PLAYER_SUCCESS, PLAYER_FAILURE, PLAYER_REQUEST } from "../actionType";

const init = { isLoading: false,isAuth:false, isError: false, players: [] };

export const reducer = (state=init, { type, payload }) => {
  switch (type) {
    case PLAYER_REQUEST:return {...state,isLoading:true};
    case GET_PLAYER_SUCCESS:return {...state,isAuth:true,isLoading:false,players:payload};
    case PLAYER_FAILURE :return {...state,isError:true};
    default:
      return state;
  }
};
