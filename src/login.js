import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';
import faqBanner from './assets/images/faq_banner.png';
import { colors } from "@mui/material";

const Login = () => {

  // const dev_url= process.env.DEV_URL
  const [cookies, setCookie] = useCookies(["token"]); // Initialize setCookie
// const token = cookies['token'];


  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [inputLoginValue, setInputLoginValue] = useState({
    email: "",
    password: "",
  });
  const { email, password, username } = inputValue;
  // const { email, password } = inputValue;
  const { loginemail, loginpassword } = inputLoginValue;
  const handleOnChange = (e) => {
    console.log(e.target);

    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleLoginOnChange = (e) => {
    console.log(e.target);

    const { name, value } = e.target;
    setInputLoginValue({
      ...inputLoginValue,
      [name]: value,
    });
  };
const handleError = (err) =>
  toast.error(err, {
    position: "top-left",
  });
const handleSuccess = (msg) =>
  toast.success(msg, {
    position: "top-right",
  });
const handleSignUp = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      // "http://localhost:4000/signup",
      // "https://busy-pink-dalmatian-ring.cyclic.app/signup",
'https://signtruckapi.signtruck.ca/signup',

      {
        ...inputValue,
      },
      { withCredentials: true }
    );
    const { success, message,token } = data;
    if (success) {
      setCookie("token", token, { path: "/" });

      handleSuccess(message);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      handleError(message);
    }
  } catch (error) {
    console.log(error);
  }
  setInputValue({
    ...inputValue,
    email: "",
    password: "",
    username: "",
  });
};
const handleLogIn = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      // "http://localhost:4000/login",
      // "https://busy-pink-dalmatian-ring.cyclic.app/login",
'https://signtruckapi.signtruck.ca/login',


      {
        ...inputLoginValue,
      },
      { withCredentials: true }
    );
    const { success, message,token } = data;
    if (success) {
      setCookie("token", token, { path: "/" });

      handleSuccess(message);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      handleError(message);
    }
  } catch (error) {
    console.log(error);
  }
  setInputValue({
    ...inputValue,
    email: "",
    password: "",
    username: "",
  });
};

const [isLogSignup, setLogSignup] = useState(false);

const logSignupClick = event => {
  setLogSignup(current => !current);
};
  return (
    <>
    {/* <section className="innerSecBgHeader">
      <div className="custom-container">
        <h2>Login / SignUp</h2>
      </div>
    </section> */}

      <section className='innerSec' style={{backgroundImage: `url(${faqBanner})`}}>
        <div className='custom-container'>
          <h1>Login/Signup</h1>
        </div>
      </section>
      <section className='login_sec'>
        <div className='login_inner'>
          <div className='custom-container'>
            <div className='loginForm'>
              <form action="" className="form">
                <div className={isLogSignup ? 'form_background signup' : 'form_background'}>
                  <div className="form-group form-group--account">
                    <h3 className="form-group_title">Sign up</h3>
                    <div className='formGrp'>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        placeholder="Username"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className='formGrp'>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="Email Address"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className='formGrp'>
                      <input
                          type="password"
                          name="password"
                          value={password}
                          placeholder="Password"
                          onChange={handleOnChange}
                          id='password'
                        />
                    </div>
                    {/* <div className='formGrp'>
                      <input type='password' placeholder='Confirm Password' id='cpassword' />
                    </div> */}
                    <button type="button" className="butn butn_success button--form" onClick={handleSignUp}>Sign up</button>
                  </div>
                  <div className="form-group form-group--noaccount">
                    <h3 className="form-group_title">Log In</h3>
                    <div className='formGrp'>
                      <input
                          type="email"
                          name="email"
                          id="loginemail"
                          value={loginemail}
                          placeholder="Email Address"
                          onChange={handleLoginOnChange}
                      />
                    </div>
                    <div className='formGrp'>
                      <input
                        type="password"
                        name="password"
                        value={loginpassword}
                        placeholder="Password"
                        onChange={handleLoginOnChange}
                        id='loginpassword'
                      />
                    </div>
                    <div className='forgot'>
                      <a href="/forget-password" style={{color:"rgb(21 132 60)"}}>Forgot Password?</a>
                    </div>
                    <button type="button" className="butn butn_success button--form" onClick={handleLogIn}>Login</button>
                  </div>
                </div>
                <fieldset className='fieldset noaccount'>
                  <h2>Returning Signtruck user?</h2>
                  <p>Log in to continue driving your brand forward.</p>
                  <div className="form_content form_content--noaccount"></div>
                  <label className='button' onClick={logSignupClick}>login</label>
                </fieldset>
                <fieldset className='fieldset account'>
                  <h2>Missed the Signtruck?</h2>
                  <p>Sign up now and unlock the road to advertising excellence.</p>
                  <div className="form_content form_content--noaccount"></div>
                  <label className='button' onClick={logSignupClick}>Signup</label>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;