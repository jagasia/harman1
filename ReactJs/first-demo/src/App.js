import './App.css';
import Login from './components/Login';
import { Register } from './components/Register';
import { Signup } from './components/Signup';


function App() {

  function fnLogin(username, password){
    alert("logging in using : "+username+" and "+password);
  }


  return (
    <div className="App">
      <div className="p-5 bg-primary text-center">
        <h1 className="text-white">Welcome to Home page</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          {/* <Maths /> */}
          {/* <Color /> */}
          {/* <ColorRange /> */}
          <Login onLogin={fnLogin} />
        </div>
        <div className="col-md-4">
          {/* <Login title="Login page" /> */}
          <Register />
        </div>
        <div className="col-md-4">
          {/* <Counter heading="Counter ... " /> */}
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default App;
