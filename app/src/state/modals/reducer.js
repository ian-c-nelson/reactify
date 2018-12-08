import { handleActions } from "redux-actions";
import { changeModal, resetModal } from "./actions";

const modalReducer = handleActions({
  [changeModal]: (state, action) => action.payload,
  [resetModal]: (state, action) => null
}, null);

export default modalReducer;
