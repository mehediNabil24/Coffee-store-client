
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedcoffees = useLoaderData();
  const [coffees,setCoffees] = useState(loadedcoffees)
  

  return (
    <div className='p-14'>
      
      <h1 className='text-3xl text-purple-600  mb-8'>Welcome to our Coffee:{coffees.length}</h1>
      <div className='grid grid-cols-2 gap-4'>
        {
          coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
     
    </div>
  )
}

export default App
