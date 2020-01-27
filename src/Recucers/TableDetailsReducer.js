import {
    FETCH_TABLE_DETAILS,
    FETCHED_DETAILS
  } from "../Components/common/Types";
  
  const INITIAL_STATE = {
    tableData: {},
    error: "",
    loading: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    //console.log(action.payload);
    // console.log(action)
    console.log(action.type + action.payload,"hghghg");
    switch (action.type) {     
      case FETCH_TABLE_DETAILS: {
        
        return { ...state, loading: true, error: "" };
      }
      case FETCHED_DETAILS:{
        // console.log(action.type + action.payload);
        return { ...state, ...INITIAL_STATE, tableData: action.payload };
      }
    //   case LOGIN_ADMIN_FAIL:
    //     return { ...state, error: "INCORRECT EMAIL OR PASSWORD", loading: false };
    //   case REGISTER_OWNER: {
    //     console.log(action.type + action.payload);
    //     return { ...state, loading: true, error: "" };
    //   }
    //   case REGISTER_OWNER_SUCESS:
    //     console.log(action.payload.data);
    //     return { ...state, ...INITIAL_STATE, user: action.payload };
  
    //   case REGISTER_OWNER_FAILED:
    //     return { ...state, error: "User Already Registered", loading: false };
    //   case ADD_SHOP:
    //     return { ...state, error: "Add Your Shop to Continue", loading: false };
     }
    return state;
  };