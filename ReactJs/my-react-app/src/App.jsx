import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Nav } from './components/Nav'
import { NotFound } from './components/NotFound'
import { Signup } from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className='p-5 bg-primary text-white text-center'>
        <h1>React Routing Demo</h1>
      </div>
      
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
        <div className='col-md-4'></div>
      </div>
    </>
  )
}

export default App
