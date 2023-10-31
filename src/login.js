import React from 'react';
import faqBanner from './assets/images/faq_banner.png';

const Login = () => {
  return (
    <>
      <section className='innerSec' style={{backgroundImage: `url(${faqBanner})`}}>
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
                <input id="account" name="radioaccount" type="radio" class="radio radio--invisible"/>
                <div class="form_background">
                  <div class="form-group form-group--account">
                    <h3 class="form-group_title">Sign up</h3>
                    <div className='formGrp'>
                        <input type='email' placeholder='Email Address' id='email'/>
                    </div>
                    <div className='formGrp'>
                        <input type='password' placeholder='Password' id='password'/>
                    </div>
                    <div className='formGrp'>
                        <input type='password' placeholder='Confirm Password' id='cpassword'/>
                    </div>
                    <button type="button" class="butn butn_success button--form">Sign up</button>
                  </div>
                  <div class="form-group form-group--noaccount">
                    <h3 class="form-group_title">Log In</h3>
                    <div className='formGrp'>
                        <input type='email' placeholder='Email Address' id='email'/>
                    </div>
                    <div className='formGrp'>
                        <input type='password' placeholder='Password' id='password'/>
                    </div>
                    <div className='forgot'>
                      <span>Forgot Password?</span>
                    </div>
                    <button type="button" class="butn butn_success button--form">Login</button>
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