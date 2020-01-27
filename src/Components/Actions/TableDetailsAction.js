import axios from "axios";
import { FETCH_TABLE_DETAILS, FETCHED_DETAILS } from "../common/Types";

export function fetchTableData(){
    return dispatch => {
        dispatch({ type: FETCH_TABLE_DETAILS });

axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
    fetchsucess(dispatch, response);
  });
}
}
const fetchsucess = (dispatch, data) => {
    // console.log(data.data,"jhjhj");
    dispatch({
      type: FETCHED_DETAILS,
      payload: data.data
    });
  };