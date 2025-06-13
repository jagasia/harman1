import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-5 bg-secondary text-center text-white'>
        <h1>Adv React</h1>
      </div>
      <div className='row text-center'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <Counter />
        </div>
        <div className='col-md-4'></div>
      </div>
    </>
  )
}

export default App
