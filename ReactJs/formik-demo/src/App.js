import './App.css';
import { Prime } from './components/Prime';

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
          {/* <Signup /> */}
        </div>
        <div className='col-sm-4'>
          {/* <Login onLogin={fnLogin} /><br/><br/> */}
          <Prime />
        </div>
        <div className='col-sm-4'>
          {/* <Login onLogin={fnLoginAdmin} /> */}
          {/* <Register /> */}
          {/* <List /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
