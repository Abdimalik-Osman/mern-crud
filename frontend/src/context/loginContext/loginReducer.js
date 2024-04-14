import {
 
  REGISTER_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_SUCCESS,

  GET_EMPLOYEE__SUCCESS,
  FETCH_EMPLOYEESTOASSIGN_SUCCESS,


  FETCH_SINGLE_EMPLOYEE,

  FETCH_EMPLOYEE_REPORT

} from "./loginActions";

const reducer = (state, action) => {
 

  /// Employee


  if (action.type === GET_EMPLOYEE__SUCCESS) {
    return {
      ...state,
      Employees: action.payload.data,
    };
  }
  
  // fetch single Employee
  if (action.type === FETCH_SINGLE_EMPLOYEE) {
    return {
      ...state,
      singleEmployee: action.payload.data,
    };
  }

 
  return state;
};

export default reducer;
