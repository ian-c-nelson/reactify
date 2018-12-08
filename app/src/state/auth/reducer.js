import { handleActions } from "redux-actions";
import { 
  signinReq,
  signinRes, 
  logoutReq,
  logoutRes,
  updateAuth,
} from "./actions";
import API from "../../utils/API";

const defaultState = {
  isSignedIn: false,
  token: "",
  error: ""
}

const authReducer = handleActions({
  [signinReq]: (state, action) => "signedin",
  [updateAuth]: (state, action) => action.payload,
  [logoutReq]: (state, action) => defaultState
}, defaultState);

export default authReducer;
