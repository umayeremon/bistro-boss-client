import { useEffect, useRef, useState } from "react";
import loginImg from "../../assets/others/register.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = ({createUser}) => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled]=useState(true)

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
   
    const email = form.email.value;
    const password = form.password.value;
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
    })
    .then(error=>{
      console.error(error)
    })
   
    console.log(email, password);
  };

  const handleValidate=()=>{
    const user_captcha_value=captchaRef.current.value;
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  }
  return (
    <div className="flex bg-img items-center justify-center mx-2 md:mx-4 min-h-[600px] my-8 md:my-12 lg:my-36  shadow-2xl border-4 border-[rgba(0, 0, 0, 0.25)]">
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
                placeholder="Email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="captcha"
                className="input input-bordered"
                required
              />
              <button onClick={handleValidate} className="btn btn-outline btn-xs mt-4">Validate</button>
            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} className="btn text-white bg-[#D1A054B2]">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
