import { useContext } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { PiGoogleLogoLight } from "react-icons/pi";
import registerImg from "../../assets/others/register.png";
import "./Register.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { signInUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.error(error);
      });

    console.log(email, password);
  };
  return (
    <div className="flex bg-img items-center justify-center mx-2 md:mx-4 min-h-[600px] my-6 lg:my-28  shadow-2xl ">
      <div className="hero-content  flex-col md:flex-row">
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
              <button className="btn text-white bg-[#D1A054B2]">Login</button>
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
            <RiFacebookFill className="text-5xl border-2 rounded-full p-2" />
            <PiGoogleLogoLight className="text-5xl border-2 rounded-full p-2" />
            <FaGithub className="text-5xl border-2 rounded-full p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
