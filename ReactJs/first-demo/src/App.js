import './App.css';
import { Counter } from './components/Counter';
import Login from './components/Login';
import Maths from './components/Maths';


function App() {
  return (
    <div className="App">
      <div className="p-5 bg-primary text-center">
        <h1 className="text-white">Welcome to Home page</h1>
      </div>
      <div class="row">
        <div class="col-md-4">
          <Maths />
        </div>
        <div class="col-md-4">
          <Login title="Login page" />
        </div>
        <div class="col-md-4">
          <Counter heading="Counter ... " />
        </div>
      </div>
    </div>
  );
}

export default App;
