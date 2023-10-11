import { useState } from "react";
import "../Pages/Login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.length === 0 || password.length === 0) {
      setError("Ошибка");
    } else {
      setError("Ok");
      console.log("Username:", username, "Password:", password);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Login:
        <input
          placeholder="Enter your name"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <label>
        Password:
        <input
          placeholder="Enter your name"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button type="submit" className="signInButton">
        Войти
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
}

export default Login;
