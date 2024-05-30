import {
  Get_UserProfile,
  Edit_Username,
  Logout,
} from "../actions/type.actions";

/* Initial user state */

const initialState = {
  status: "VOID",
  userData: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Get_UserProfile:
      return {
        ...state,
        status: "Succeeded",
        userData: action.payload,
      };
    case Edit_Username:
      return {
        ...state,
        status: "Modified",
        userData: {
          ...state.userData,
          username: action.payload,
        },
      };
    case Logout: {
      return initialState;
    }
    default:
      return state;
  }
};
