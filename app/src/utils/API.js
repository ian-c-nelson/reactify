import Axios from "axios";

export default {
  signIn(email, password){
    return Axios.post("/v1/signin", {email, password});
  }
}

