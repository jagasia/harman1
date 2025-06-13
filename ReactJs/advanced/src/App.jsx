import './App.css'
import { Counter } from './components/Counter'
import { ProductManager } from './components/ProductManager'

function App() {
  
  return (
    <>
      <div className='p-5 bg-secondary text-center text-white'>
        <h1>Adv React</h1>
      </div>
      <div className='row text-center'>
        <div className='col-md-2'>
          <Counter />
        </div>
        <div className='col-md-8'>
          {/* <ProductForm /> */}
          <ProductManager />
        </div>
        <div className='col-md-2'>
          
        </div>
      </div>
    </>
  )
}

export default App
