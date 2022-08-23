import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://89ff6852-9e47-4f98-8f48-d0f254b6d4df.mock.pstmn.io/login";

const LoginPage = ({ currentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, { username: email, password: password })
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log("bad login error: ", error);
        currentUser(error.response.data);
      });
  };

  useEffect(() => {});

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <input id="email" value={email} onChange={emailChange} />
      <input id="password" value={password} onChange={passwordChange} />
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

export default LoginPage;
