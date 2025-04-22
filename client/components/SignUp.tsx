import React from 'react';
import Lottie from 'react-lottie';
import logo from '../assets/LinguaiLogo.png'; 
import glogo from '../assets/GoogleLogo.png'; 
import animation from '../assets/LinguaiBackgroundAnimation.json'; 
import '../styles/signIn.css'; 

const SignUp = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    height: 'auto', 
    width: 'auto',
    animationData: animation,
  };

  return (
    <div className='container'>
      <div className='left-container'>
        <div className='inner-container'>
          <div className='lottie-container'>
          <Lottie
            options={defaultOptions}
          />
          </div>
        </div>
      </div>
      <div className='right-container'>

        <div className='top-right-container'>
        <div className='welcome-portion'>
          <h1 className='logo'>
            <img src={logo} alt='Linguai Logo' style={{height:60, width:210}}></img>
          </h1>
          <h2 className='welcome'>Welcome back!</h2>
          <h3 className='sign-in-p'>Get started on your language learning</h3>
          <h3 className='sign-in-p'>journey</h3>
        </div>
        <div className='input-portion'>
          <div className='name-area'>
            <h3 className='name-p'>Name</h3>
            <div className='names'>
              <input className='first-name-input' type='first-name' placeholder='First name'></input>
              <input className='last-name-input' type='last-name' placeholder='Last name'></input>
            </div>
          </div>
          <div className='email-area'>
            <h3 className='email-p'>Email</h3>
            <input className='input' type='email' placeholder='Enter your email'></input>
          </div>
          <div className='password-area'>
            <h3 className='password-p'>Password</h3>
            <input className='input' type='password' placeholder='Enter your password'></input>
          </div>
          <div className='support-area'>
            <div className='remember-box'>
              {/* Checkbox component */}
              {/* <p>Remember me</p> */}
            </div>
            {/* <p className='forgot-pw'>Forgot Password?</p> */}
          </div>
        </div>
        <div className='button-portion'>
          <button className='sign-in-button'>Sign up</button>
          <p className='or-p'>OR</p>
          <button className='google-sign-in-button'>
            <img className='google-logo' src={glogo} alt='Google Logo' style={{height: 15, width: 15}}></img>
            <p className='google-sign-in-p'>Sign up with Google</p>
          </button>
          <p className='no-account-p'>Already have an account? <span className='no-account-span'>Sign in</span></p>
        </div>

        </div>

        <div className='copyright-portion'>
          <footer className='signin-footer'>
            <p className='copyright-p'>&copy; 2025 Linguai</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 