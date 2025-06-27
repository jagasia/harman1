import { useState } from 'react'
import './App.css'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ProductForm } from './components/ProductForm'
import { ProductGrid } from './components/ProductGrid'

function App() {
  const [count, setCount] = useState(0)
  const [id, setId]=useState(0);

  function fnSelect(id){
    setId(id);
    console.log("app received id as :"+id);
    
  }


  return <div>
    <div className="App">
      <div className="p-5 bg-primary text-center">
        <h1 className="text-white">Welcome to Home page</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          {id}
          </div>        
        <div className="col-md-4">
          <ProductForm id={id} />
        </div>        
        <div className="col-md-4"></div>        
      </div>
      <div className="row">
        <div className="col-md-2"></div>        
        <div className="col-md-8">
        <ErrorBoundary>
          <ProductGrid onSelect={fnSelect} />  
        </ErrorBoundary>
        </div>        
        <div className="col-md-2"></div>        
      </div>
    </div>
  </div>
}

export default App
