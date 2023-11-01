import React, { useState } from "react";
import faqBanner from './assets/images/faq_banner.png';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [inputLoginValue, setInputLoginValue] = useState({
    email: "",
    password: "",
  });
  // const { email, password, username } = inputValue;
  const { email, password } = inputValue;
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
    position: "bottom-left",
  });
const handleSuccess = (msg) =>
  toast.success(msg, {
    position: "bottom-right",
  });
const handleSignUp = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      "http://localhost:4000/signup",
      {
        ...inputValue,
      },
      { withCredentials: true }
    );
    const { success, message } = data;
    if (success) {
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
      "http://localhost:4000/login",
      {
        ...inputValue,
      },
      { withCredentials: true }
    );
    const { success, message } = data;
    if (success) {
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
// const Login = () => {
  return (
    <>
      <section className='innerSec' style={{ backgroundImage: `url(${faqBanner})` }}>
        <div className='custom-container'>
          <h1>Login</h1>
        </div>
      </section>

      <section className='login_sec'>
        <div className='login_inner'>
          <div className='custom-container'>
            <div className='loginForm'>
              <form action="" class="form">
                <input id="noaccount" name="radioaccount" type="radio" class="radio radio--invisible" checked />
                <input id="account" name="radioaccount" type="radio" class="radio radio--invisible" />
                <div class="form_background">
                  <div class="form-group form-group--account">
                    <h3 class="form-group_title">Sign up</h3>
                    <div className='formGrp'>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className='formGrp'>
                    <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            id='password'
          />
                    </div>
                    {/* <div className='formGrp'>
                      <input type='password' placeholder='Confirm Password' id='cpassword' />
                    </div> */}
                    <button type="button" className="butn butn_success button--form" onClick={handleSignUp}>Sign up</button>
                  </div>
                  <div class="form-group form-group--noaccount">
                    <h3 class="form-group_title">Log In</h3>
                    <div className='formGrp'>
                    <input
                        type="email"
                        name="loginemail"
                        id="email2"
                        value={loginemail}
                        placeholder="Enter your email"
                        onChange={handleLoginOnChange}
                      />                    </div>
                    <div className='formGrp'>
                    <input
            type="password"
            name="loginpassword"
            value={loginpassword}
            placeholder="Enter your password"
            onChange={handleLoginOnChange}
            id='password2'
          />                    </div>
                    <div className='forgot'>
                      <span>Forgot Password?</span>
                    </div>
                    <button type="button" class="butn butn_success button--form" onClick={handleLogIn}>Login</button>
                  </div>
                </div>
                <fieldset className='fieldset noaccount'>
                  <h2>Have an account ?</h2>
                  <p>Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
                  <div class="form_content form_content--noaccount"></div>
                  <label for="noaccount" class="button">login</label>
                </fieldset>
                <fieldset className='fieldset account'>
                  <h2>Don't have an account ?</h2>
                  <p>Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
                  <div class="form_content form_content--noaccount"></div>
                  <label for="account" class="button">Signup</label>
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