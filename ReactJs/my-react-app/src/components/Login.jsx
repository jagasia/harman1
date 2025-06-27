import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useUser();

  function fnLogin() {
    if (username === password) {
      login(username); // context-based login
      navigate('/adminhome');
    } else {
      login(username);
      navigate('/',{state:{name:username}});
    }
  }

  return <>
    Username: <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} />
    Password: <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
    <br />
    <input type="button" value="Login" className="btn btn-info" onClick={fnLogin} />
  </>
}
