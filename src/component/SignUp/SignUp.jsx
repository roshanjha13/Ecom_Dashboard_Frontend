import { useState } from "react";
import React from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitData = () => {
    console.log(name, email, password);
  };
  return (
    <div className="register">
      <div className="register_inner">
        <h1>Register</h1>
        <input
          className="inputbox"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter name"
        />
        <input
          className="inputbox"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter email"
        />
        <input
          className="inputbox"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter password"
        />
        <button onClick={submitData} className="button" type="button">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default SignUp;
