import "./login.css";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      username: username,
      password: password,
    };

    setUsername("");
    setPassword("");

    axios
      .post("http://localhost:5000/users/login", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} id="root">
        <h1 className="title">JK Store</h1>
        <h2 className="subtitle">Login</h2>
        <input
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          className="input1"
          placeholder="  Username"
        />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className="input2"
          type="password"
          placeholder="  Password"
        />
        <br />
        <button className="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
