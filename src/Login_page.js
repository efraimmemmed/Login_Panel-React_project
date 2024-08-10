import React, { useState } from 'react';
import './App.css';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';



const Login_page = () => {
  const [shift, setShift] = useState(0);
 
  const handleClick = () => {
    setShift(shift === 0 ? -100 : 0); 
   
  };

  return (
    <div className='login-page'>
      <div className='container'>
     
        <div className='sign-in'>
        <h1>SIGN IN</h1>

        <div className='social-icon'>
        
        <a href='#'><FaYoutube style={{ color: 'brown',margin:"20px", fontSize: '2rem' }}/></a>
        <a href='#'><FaInstagram style={{ color: '#FD1D1D',margin:"20px", fontSize: '2rem' }}/></a>
        <a href='#'><FaFacebook style={{ color: 'blue',margin:"20px", fontSize: '2rem' }}/></a>
        <a href='#'><FaTwitter style={{ color: '#1DA1F2',margin:"20px", fontSize: '2rem' }}/></a>
   
        </div>

        <p className='description'>or use your email password</p>
        <input type="email" id="pwd" name="pwd" placeholder='E-mail'></input>

       
        <input type="password" id="pwd" name="pwd" placeholder='Password'></input>
         <p className='description'>Forgot your Password</p>
        <button>SIGN IN</button>
  
        <p className='registration'>Not a user?<button id='reg'onClick={handleClick}>Sign up</button></p>
        </div>
        <div className='sign-up'>   
            <h1>Create Account</h1>
            <div className='social-icon'>
        
        <a href='#'><FaYoutube style={{ color: 'brown',margin:"20px", fontSize: '2rem' }}/></a>
        <a href='#'><FaInstagram style={{ color: '#FD1D1D',margin:"20px", fontSize: '2rem' }}/></a>
        <a href='#'><FaFacebook style={{ color: 'blue',margin:"20px", fontSize: '2rem' }}/></a>
        <a href='#'><FaTwitter style={{ color: '#1DA1F2',margin:"20px", fontSize: '2rem' }}/></a>
   
        </div>
        <p className='description'>or use your email for registeration</p>
            <input type="text" name="name" placeholder='Name'></input>
            <input type="email"  name="mail" placeholder='E-mail'></input>
            <input type="password" name="pwd" placeholder='Password'></input>

        <button>SIGN UP</button>

        <p>Do you have a new account?<button id='sign' onClick={handleClick}>Sign in</button></p> 
        </div>
       
        <div className='transition' style={{ transform: `translateX(${shift}%)`, transition: 'transform 0.5s ease-in-out' }}> 
        </div>
            
            </div>
    </div>
  );
};

export default Login_page;
