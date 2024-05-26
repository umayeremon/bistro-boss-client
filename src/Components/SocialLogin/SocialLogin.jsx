import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { PiGoogleLogoLight } from "react-icons/pi";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleRegister = () => {
    googleLogin()
      .then((result) => {
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "success",
              title: "Registered successfully. Please Login",
            });
          }
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubRegister = () => {
    githubLogin()
      .then((result) => {
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        axiosPublic.post("/user", userInfo).then((res) => {
          if (res.data.insertedId) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "success",
              title: "Registered successfully. Please Login",
            });
          }
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-row gap-8 mx-auto mt-4">
      <RiFacebookFill className="text-5xl border-2 rounded-full p-2 cursor-pointer" />
      <PiGoogleLogoLight
        onClick={handleGoogleRegister}
        className="text-5xl border-2 rounded-full p-2 cursor-pointer"
      />
      <FaGithub
        onClick={handleGithubRegister}
        className="text-5xl border-2 rounded-full p-2 cursor-pointer"
      />
    </div>
  );
};

export default SocialLogin;
