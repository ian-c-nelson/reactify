import { createAction } from "redux-actions";
import { CHANGE_MODAL, RESET_MODAL } from "../action-types";

export const changeModal = createAction(CHANGE_MODAL);
export const resetModal = createAction(RESET_MODAL);
