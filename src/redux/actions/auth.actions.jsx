import { Login_Success, Login_Fail, Logout } from "./type.actions";

/* Authentication actions */

export const setLoginSuccessDispatchObject = (token) => {
  return {
    type: Login_Success,
    payload: token,
  };
};

export const loginFailed = (error) => {
  return {
    type: Login_Fail,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: Logout,
  };
};
