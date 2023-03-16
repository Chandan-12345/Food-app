import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = () => {
    const { name, email, password } = user;

    fetch("https://chromato-ea63a-default-rtdb.firebaseio.com/Register.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, password}),
    });
  };

  return (
    <div className="App">
      <div className="App__form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={getUserData}
          autoComplete="off"
        />
        <br />

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={getUserData}
          autoComplete="off"
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={getUserData}
          autoComplete="off"
        />
        <br />
        <button onClick={postData}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
