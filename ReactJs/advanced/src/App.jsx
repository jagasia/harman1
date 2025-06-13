import './App.css'
import { Counter } from './components/Counter'
import { ProductForm } from './components/ProductForm'

function App() {
  
  return (
    <>
      <div className='p-5 bg-secondary text-center text-white'>
        <h1>Adv React</h1>
      </div>
      <div className='row text-center'>
        <div className='col-md-4'>
          <Counter />
        </div>
        <div className='col-md-4'>
          <ProductForm />
        </div>
        <div className='col-md-4'></div>
      </div>
    </>
  )
}

export default App
