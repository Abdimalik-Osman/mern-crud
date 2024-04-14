import axios from "axios";
import { createContext, useReducer, useRef, useMemo } from "react";
import jwtDecode from "jwt-decode";
import moment from "moment";
import { useReactToPrint, ReactToPrint } from "react-to-print";
import 'react-toastify/dist/ReactToastify.css';
import {

  FETCH_SINGLE_EMPLOYEE,

  REGISTER_EMPLOYEE_ERROR,
  REGISTER_EMPLOYEE_SUCCESS,

  GET_EMPLOYEE__SUCCESS,
 
  DELETE_EMPLOYEE_SUCCESS,
 
} from "./loginActions";
import reducer from "./loginReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate  } from "react-router-dom";
const API_URL = "http://localhost:5000/api"
export const LoginContex = createContext();
// const addToLocalStorage = (user) => {
//   localStorage.setItem("user", JSON.stringify(user));
//   localStorage.setItem("token", JSON.stringify(user.accessToken));
//   // localStorage.setItem("OTP", JSON.stringify(user.OTP));
// };
const addOTPToLocalStorage = (otp) => {
  localStorage.setItem("OTP", JSON.stringify(otp));
};
const getIDlocalStroge = (id, status, useeer) => {
  localStorage.setItem("_id", JSON.stringify(id));
  localStorage.setItem("status", JSON.stringify(status));
  localStorage.setItem("useeer", JSON.stringify(useeer));
};

const removeIDFromLocalStorage = () => {
  localStorage.setItem("_id", "");
  localStorage.setItem("useeer", "");
};
// addOTPToLocalStorage()
// const removeFromLocalStorage = () => {
//   localStorage.setItem("user", "");
//   localStorage.setItem("OTP", "");
// };

const addToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
const removeFromLocalStorage = () => {
  localStorage.setItem("user", "");
};
const user = localStorage.getItem("user");
const useeer = localStorage.getItem("useeer");
const ottp = localStorage.getItem("OTP");
//console.log(user);
//console.log(ottp);

const initialState = {
  User: user ? JSON.parse(user) : null,
  Otp: ottp ? JSON.parse(ottp) : null,
  OTPNumber: "",
  allUsers: [],
  showAlert: false,
  showAlertText: "",
  theUser: user && user != "undefined" ? JSON.parse(user) : null,
  GetByIdEmployee: [],

  Employees: [],
  singleEmployee: []

  
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useNavigate ();

  const componentRef = useRef();

  // // registering users
  // const registerUser = async (user) => {
  //   //console.log(user);
  //   try {
  //     const res = await axios.post("/register", user);
  //     toast.success(res.message, {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //     dispatch({ type: REGISTER_USER });
  //     getAllUsers();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

 
  

  // const UpdateUser = async (user) => {
  //   //console.log(user);
  //   try {
  //     const res = await axios.patch(`/register/update/${user.id}`, user);
  //     toast.success(res.message, {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //     dispatch({ type: REGISTER_USER });
  //     getAllUsers();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getCurrentUserId = () => {
  //   const { _id } = localStorage.getItem("userData");
  //   //  let user= jwtDecode(jwt);
  //   return _id;
  // };

  // const cleaState = () => {
  //   dispatch({ type: "CLEAR_THE_STATE" });
  // };
  // // const getCurrentUserId=()=>{
  // //    const jwt = localStorage.getItem("token");
  // //    let user= jwtDecode(jwt);
  // //    return user.id;
  // // }
  // const showToastMessage = (message) => {
  //   toast.error(message, {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };
  // // const loginUser = async (user) => {
  // //   //console.log(user);
  // //   try {
  // //     dispatch({ type: "REGISTER_LOGIN|_FIRST" });
  // //     const res = await axios.post("/login", user);
  // //     //console.log(res.message);
  // //     //console.log(res);
  // //     // addToLocalStorage(res);
  // //     getIDlocalStroge(res?.data?.user?._id, res.data.status, res);

  // //     dispatch({ type: "REGISTER_LOGIN", payload: { res } });
  // //     if (res.status == "fail") {
  // //       dispatch({ type: "REGISTER_LOGIN_Fail", payload: { res } });
  // //       //console.log("wronggggggggggggggggggggggggggggggggggggggg");
  // //       toast.error(res.message, {
  // //         position: toast.POSITION.TOP_RIGHT,
  // //       });
  // //       //console.log("ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
  // //       return;
  // //     } else {
  // //       //console.log("wronggssssssssssssssssssssssssssssss");
  // //       //console.log(res.message);

  // //       toast.success("User logged in succefully", {
  // //         position: toast.POSITION.TOP_RIGHT,
  // //       });
  // //       //console.log("sucesssssssssssssssssssssssssssssssssss");
  // //     }
  // //   } catch (error) {
  // //     // console.log(error);
  // //     showToastMessage("Invalid credentials");
  // //     dispatch({ type: "REGISTER_LOGIN_Fail" });
  // //   }
  // // };

  // const loginUser = async (user) => {
  //   //console.log(user);
  //   dispatch({ type: "REGISTER_LOGIN_BEGIN" });
  //   try {
  //     const res = await axios.post("/login", user);
  //     //console.log(res.message);
  //     //console.log(res);
  //     if (res?.data?.status == "success") {
  //       addToLocalStorage(res);
  //     }

  //     dispatch({ type: "REGISTER_LOGIN", payload: { res } });
  //     if (res.status == "fail") {
  //       toast.error(res.message, {
  //         position: toast.POSITION.TOP_RIGHT,
  //       });
  //       //console.log("ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
  //       return;
  //     } else {
  //       toast.success(res.message, {
  //         position: toast.POSITION.TOP_RIGHT,
  //       });
  //       //console.log("sucesssssssssssssssssssssssssssssssssss");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // // const confirmOTPP = async (OTTP) => {

  // //   //console.log(OTTP);
  // //   try {
  // //     dispatch({ type: "OTTP_BEGIN_KOOW" });
  // //     const res = await axios.post("/checkOtp", OTTP);
  // //     // addToLocalStorage(res);

  // //     dispatch({ type: OTTP_BEGIN, payload: { res } });
  // //     // dispatch({ type: "OTTP_BEGIN" });
  // //     //console.log(res);
  // //     //console.log(res?.data?.user?.OTP);

  // //     if (res.data.status === "success") {
  // //       const data = {
  // //         name: "OTP",
  // //         otpNumber: res?.data?.user?.OTP,
  // //       };
  // //       addToLocalStorage(res);

  // //       addOTPToLocalStorage(data);
  // //       toast.success(res.message, {
  // //         position: toast.POSITION.TOP_RIGHT,
  // //       });

  // //       if (res?.data?.user?.OTP == OTTP.OTP) {
  // //         setTimeout(() => {
  // //           history("/dashboard");
  // //         }, 500);
  // //       }
  // //     } else {
  // //       toast.error(res.message, {
  // //         position: toast.POSITION.TOP_RIGHT,
  // //       });
  // //     }
  // //   } catch (error) {
  // //     dispatch({ type: "OTTP_BEGIN_ERROR" });
  // //     toast.error("invalid credentials", {
  // //       position: toast.POSITION.TOP_RIGHT,
  // //     });
  // //   }
  // // };

  // const resetOTPnum = () => {
  //   dispatch({ type: "RESET_OTP_NUM" });
  // };
  // // const = (number)=>{
  // //   //console.log(number);
  // //   try {
  // //     dispatch({ type: "GET_OTP_NUM" , payload:{number} });
  // //   } catch (error) {
  // //     console.log(error);
  // //   }
  // // }

  // const getAllUsers = async () => {
  //   dispatch({ type: "REGISTER_USER_BEGINN" });
  //   try {
  //     const data = await axios.get("/users");
  //     dispatch({ type: GET_ALL_USER, payload: { data } });
  //     //console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const openIptvs = async (status) => {
  //   dispatch({ type: OPEN_IPTV_BEGIN });
  //   try {
  //     const data = await axios.get(`/nasiye/iptvs/report`);
  //     dispatch({ type: OPEN_IPTV, payload: { data } });
  //     //console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const logoutUser = () => {
  //   dispatch({ type: LOGUT_USER });
  //   removeFromLocalStorage();
  //   removeIDFromLocalStorage();
  //   // removeCartItems()
  // };

  //customer list


  // BIGGINING OF REGISTER Employee /////////////////////////////////////////////

  const EmployeeRegister = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:5000/api/employees", data);
      fetchEmployees();
      dispatch({ type: REGISTER_EMPLOYEE_SUCCESS });
      if (res.status == "success") {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      dispatch({ type: REGISTER_EMPLOYEE_ERROR });
      console.log(error);
      toast.error(error.message);
    }
  };

  // Employee fetching
  const fetchEmployees = async () => {
    try {
      const res = await axios.get(`${API_URL}/employees`);
      // console.log(res.data);
      let data = res.data.employees
      dispatch({ type: GET_EMPLOYEE__SUCCESS, payload: { data } });
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  ///delete employee
  const deleteEmployee = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/employees/${id}`);
      dispatch({ type: DELETE_EMPLOYEE_SUCCESS });
      fetchEmployees();
      toast.error(res.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // Update Employee
  const updateEmployee = async (data) => {
    //console.log(data);
    try {
      const updatedEmp = await axios.patch(`${API_URL}/employee/${data.id}`, data);
      toast.success(updatedEmp.message);
      fetchEmployees();
      //console.log(updatedEmp);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  const getSingleEmployee = async (id) => {
    try {
      const data = await axios.get(`${API_URL}/employees/${id}`);
      dispatch({ type: FETCH_SINGLE_EMPLOYEE, payload: { data } });

    } catch (error) {
      console.log(error);
    }
  };


  

  
  return (
    <LoginContex.Provider
      value={{
        ...state,
        getSingleEmployee,
        EmployeeRegister,
        fetchEmployees,
   
        deleteEmployee,
        updateEmployee,
        removeIDFromLocalStorage,
        removeFromLocalStorage,
   
      }}
    >
      {children}
    </LoginContex.Provider>
  );
};

export default AppProvider;
