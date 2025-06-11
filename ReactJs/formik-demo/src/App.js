import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Signup } from './components/Signup';

function App() {

  function fnLogin(user){
    alert(JSON.stringify(user))
  }

  function fnLoginAdmin(user){
    alert('Admin login validation: '+user.username+" and "+user.password)
  }

  return (
    <div className="App">
      <div className='p-5 bg-info text-white '>
        <h1>Welcome to React Js</h1>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <Signup />
        </div>
        <div className='col-sm-4'>
          <Login onLogin={fnLogin} />
        </div>
        <div className='col-sm-4'>
          {/* <Login onLogin={fnLoginAdmin} /> */}
          <Register />
        </div>
      </div>
    </div>
  );
}

export default App;
