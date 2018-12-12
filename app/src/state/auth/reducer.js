import { handleActions } from "redux-actions";
import { 
  signinReq, 
  logoutReq,
  updateAuth,
} from "./actions";

const defaultState = {
  isSignedIn: true,
  token: "",
  error: "",
  user: {
    name: "Tucker"
  }
}

const authReducer = handleActions({
  [signinReq]: (state, action) => "signedin",
  [updateAuth]: (state, action) => action.payload,
  [logoutReq]: (state, action) => defaultState
}, defaultState);

export default authReducer;
