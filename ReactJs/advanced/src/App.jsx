import { Profiler } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { ProductManager } from './components/ProductManager';

function App() {
  
   function onRenderCallback(
    id, // the "id" prop of the Profiler tree
    phase, // either "mount" or "update"
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) {
    console.log(`[Profiler: ${id}]`);
    console.log(`Phase: ${phase}`);
    console.log(`Actual duration: ${actualDuration.toFixed(2)}ms`);
    console.log(`Base duration: ${baseDuration.toFixed(2)}ms`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
    console.log("Interactions:", interactions);
  }
  
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
          <Profiler id='ProductManager' onRender={onRenderCallback}>
            <ProductManager />
          </Profiler>
        </div>
        <div className='col-md-2'>
          
        </div>
      </div>
    </>
  )
}

export default App
