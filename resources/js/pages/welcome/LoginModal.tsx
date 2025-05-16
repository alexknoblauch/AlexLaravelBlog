import { useState } from "react";

export default function LoginModal({ setLoginModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    const res = await fetch("http://localhost/alex_blogging/signUp.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);
    setLoginModal(false);
  }

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal-content">
        <div>
          <h1>Create an Account:</h1>
          <p className="login-text">only with your E-mail and Password</p>
          <label htmlFor="email"></label>
          <input
            value={email}
            id="email"
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="password"></label>
          <input
            value={password}
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button onClick={handleSignIn} className="sign-in-button-modal">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}
