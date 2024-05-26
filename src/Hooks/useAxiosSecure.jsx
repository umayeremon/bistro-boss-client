import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const navigate=useNavigate();
  const {logOut}=useContext(AuthContext)
  //interceptors request
  axiosSecure.interceptors.request.use(
    function (config) {
      const token=localStorage.getItem('access-token')
      console.log('request stopped by the interceptors', token)
      config.headers.authorization=`Bearer ${token}`
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  //interceptors response
  axiosSecure.interceptors.response.use(function(response){
    return response
  },
  function(error){
    const status=error.response.status
    console.log(status)
    if(status===401 || status === 403){
      logOut()
      navigate('/login')
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "info",
        title: "Your Session is expired. Please Login"
      });
    }
    return Promise.reject(error)
  }
)
  return axiosSecure;
};

export default useAxiosSecure;
