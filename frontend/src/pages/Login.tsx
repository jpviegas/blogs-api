import axios from "axios";
import { useState } from "react";

function Login() {
  const [token, setToken] = useState("");
  async function loginHandler() {
    const url = "http://localhost:3002/login";

    axios
      .post(url, {
        email: "lewishamilton@gmail.com",
        password: "123456",
      })
      .then((res) => {
        setToken(res.data.token);
        console.log(res);
      })
      .catch(() => {
        console.log("wrong");
      });
  }
  const getUsers = () => {
    const url = "http://localhost:3002/user";
    async function fetchApi() {
      const res = await fetch(url, {
        headers: {
          authorization: token,
        },
      });
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <main>
      <h1>login</h1>
      <button type="button" onClick={loginHandler}>
        login
      </button>
      <button type="button" onClick={getUsers}>
        fetch
      </button>
    </main>
  );
}

export default Login;
