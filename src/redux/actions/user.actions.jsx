import { Get_UserProfile, Edit_Username } from "./type.actions";

/* User data recovery action */

export const userProfile = (userData) => {
  return {
    type: Get_UserProfile,
    payload: userData,
  };
};

/* Username update action */
export const updateUsername = (username) => {
  return {
    type: Edit_Username,
    payload: username,
  };
};
