import './App.css';
import { Login } from './components/Login';

function App() {

  function fnLogin(user){
    alert(JSON.stringify(user))
  }

  return (
    <div className="App">
      <div className='p-5 bg-info text-white '>
        <h1>Welcome to React Js</h1>
      </div>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <Login onLogin={fnLogin} />
        </div>
        <div className='col-sm-4'></div>
      </div>
    </div>
  );
}

export default App;
