import React, { useState } from "react";
import LoginModal from "./LoginModal";
import {router} from '@inertiajs/react'
import { Inertia, Method } from '@inertiajs/inertia';



export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginModal, setLoginModal] = useState(false);


    function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    router.post('/login', { email, password });  
    }
  

  return (
    <>
      {loginModal && <LoginModal setLoginModal={setLoginModal} />}
      <div className="h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center" style={{backgroundImage: 'url(/img/bg-login.png)' }} >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl mb-6">Login:</h1>
          <p className="mb-4 text-grey-600 italic ">
            Please login with your Accont credentials...
          </p>
          <label htmlFor="email"></label>
          <input
            className="mb-1 bg-white/90 max-w-[400px] p-2 rounded-[8px] shadow-xl backdrop-blug-lg "
            value={email}
            id="email"
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          ></input><br></br>
          <label htmlFor="password"></label>
          <input
            value={password}
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="mb-1 bg-white/90 max-w-[400px] p-2 rounded-[8px] shadow-xl backdrop-blug-lg "

          />
          <br></br>
          <button onClick={handleLogin} className="    outline-none
    border-2
    border-gray-700
    rounded-full
    -mb-4
    px-12
    py-0.5
    bg-inherit
    text-gray-700
    hover:bg-gray-700 
    hover:text-white 
    hover:border-white
    transition-colors
    duration-300
    cursor-pointer">
            Login
          </button>
          <br></br>
          <button onClick={() => setLoginModal(!loginModal)} className="outline-none 
          text-white 
          bg-gray-700 
          border-2 
          border-gray-700 
          px-12 py-0.5 
          rounded-full mb-4    
          hover:border-white
          hover:text-white
          hover:bg-inherit
          transition-colors
          duration-300
 ">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}
