import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import TableDetailsReducer from "./TableDetailsReducer";

export default combineReducers({
  form: formReducer,
  tableDetails : TableDetailsReducer
});