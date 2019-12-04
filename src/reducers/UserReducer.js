import {
    LOGIN_SUCCESS
} from '../constant/Filters';
  
  const INITIAL_STATE = {
    loading: false
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return { ...state, loading: false };
      default:
        return state;
    }
  }

  