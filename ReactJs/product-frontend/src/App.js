import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { Nav } from './components/Nav';
import { Products } from './components/Products';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="p-5 bg-primary">
        <h1 className="text-white text-center">Product Front end</h1>
      </div>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>    
  );
}

export default App;
