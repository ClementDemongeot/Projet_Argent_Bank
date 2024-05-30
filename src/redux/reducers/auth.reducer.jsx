import { Login_Success, Login_Fail, Logout } from "../actions/type.actions";

/* Initial state of authentication */

const initialState = {
  status: "VOID",
  isConnected: false,
  token: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Login_Success:
      return {
        ...state,
        status: "Succeeded",
        isConnected: true,
        token: action.payload,
        error: null,
      };

    case Login_Fail: {
      return {
        ...state,
        status: "Failed",
        isConnected: false,
        error: action.payload,
      };
    }
    case Logout: {
      return initialState;
    }
    default:
      return state;
  }
};
