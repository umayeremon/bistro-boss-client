import { useContext } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { PiGoogleLogoLight } from "react-icons/pi";
import registerImg from "../../assets/others/register.png";
import "./Register.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, userProfileUpdate,googleLogin } = useContext(AuthContext);
  const navigate=useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name=form.name.value;
    const photo=form.photoUrl.value
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
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
            title: "Registered successfully",
          });
          userProfileUpdate(name,photo)
          .then()
          .then()
          navigate('/')
        }
      })
      .then((error) => {
        console.log(error);
      });
      form.reset()

    console.log(email, password);
  };
  const handleGoogleLogin=()=>{
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
          title: "Registered successfully",
        });
        navigate('/')
      }
    })
    .then((error) => {
      console.log(error);
    });

  }
  return (
    <div className="flex bg-img items-center justify-center mx-2 md:mx-4 min-h-[600px] my-6 lg:my-28  shadow-2xl ">
      <div className="hero-content  flex-col md:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={registerImg} alt="" />
        </div>

        <div className="card  w-full max-w-sm ">
          <div>
            <h1 className="text-center text-3xl font-bold">Register</h1>
          </div>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered"
                required
              />
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
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photoUrl"
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
            <div className="form-control mt-6">
              <button className="btn text-white bg-[#D1A054B2]">
                Register
              </button>
            </div>
          </form>
          <div className="text-center">
            <h2>
              Already registered? Go to
              <Link
                to="/login"
                className="underline ml-2 text-blue-700 font-bold"
              >
                Login
              </Link>
            </h2>
            <h4>Or sign up with</h4>
          </div>
          <div className="flex flex-row gap-8 mx-auto mt-4">
            <RiFacebookFill className="text-5xl border-2 rounded-full p-2 cursor-pointer" />
            <PiGoogleLogoLight onClick={handleGoogleLogin} className="text-5xl border-2 rounded-full p-2 cursor-pointer" />
            <FaGithub className="text-5xl border-2 rounded-full p-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
