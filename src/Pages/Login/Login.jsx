import { useContext, useEffect, useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { PiGoogleLogoLight } from "react-icons/pi";
import loginImg from "../../assets/others/register.png";
import "./login.css";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signInUser,googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation()
  const from=location.state?.from?.pathname || '/'

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
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
            title: "Logged in successfully",
          });
        }
        navigate(from,{replace:true})
      })
      .then((error) => {
        console.error(error);
      });

    console.log(email, password);
  };

  const handleValidate = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleGoogleRegister=()=>{
    googleLogin()
    .then((result) => {
      console.log(result.user)
      if (result.user) {
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
          title: "Logged in successfully",
        });
        navigate('/')
      }
    })
    .then((error) => {
      console.log(error);
    });

  }
  return (
    <div className="flex bg-img items-center justify-center mx-2 md:mx-4 min-h-[600px] my-6 lg:my-28  drop-shadow-2xl ">
      <div className="hero-content  flex-col md:flex-row">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>

        <div className="card  w-full max-w-sm ">
          <div>
            <h1 className="text-center text-3xl font-bold">Log In</h1>
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidate}
                type="text"
                name="captcha"
                placeholder="Type here"
                className="input input-bordered"
                required
              />
              {/* <button className="btn btn-outline btn-xs mt-4">Validate</button> */}
            </div>
            <div className="form-control mt-6">
              <button
                disabled={disabled}
                className="btn text-white bg-[#D1A054B2]"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center">
            <h2>
              New here?{" "}
              <Link
                to="/register"
                className="underline text-blue-700 font-bold"
              >
                Create a New Account
              </Link>
            </h2>
            <h4>Or sign in with</h4>
          </div>
          <div className="flex flex-row gap-8 mx-auto mt-4">
            <RiFacebookFill className="text-5xl border-2 rounded-full p-2 cursor-pointer" />
            <PiGoogleLogoLight onClick={handleGoogleRegister} className="text-5xl border-2 rounded-full p-2 cursor-pointer" />
            <FaGithub className="text-5xl border-2 rounded-full p-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
