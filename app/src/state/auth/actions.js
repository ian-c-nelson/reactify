import { createAction } from "redux-actions";
import API from "../../utils/API";

export const signinReq = createAction("SIGNIN_REQ");
export const logoutReq = createAction("LOGOUT_REQ");
export const signinRes = createAction("SIGNIN_REQ");
export const logoutRes = createAction("LOGOUT_REQ");
export const updateAuth = createAction("UPDATE_AUTH");

export function signin(email, password) {
  return function(dispatch) {
    dispatch(signinReq());
    return API.signIn(email, password).then(res => dispatch(updateAuth(res.data)));
  }
}
