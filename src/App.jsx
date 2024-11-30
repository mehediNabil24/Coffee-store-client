
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';

function App() {
  const coffees = useLoaderData();
  

  return (
    <div className='p-14'>
      
      <h1 className='text-4xl text-purple-600 text-center mb-8'>Hoe Hot Cold Cold Coffee:{coffees.length}</h1>
      <div className='grid grid-cols-2 gap-4'>
        {
          coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
     
    </div>
  )
}

export default App
