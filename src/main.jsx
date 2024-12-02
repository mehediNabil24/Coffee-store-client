import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Layout from './Components/Layout.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider, { AuthContext } from './Components/Provider/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children :[

  
  {
    path: "/",
    element: <App></App>,
    loader:()=> fetch('http://localhost:5000/coffee')
  },
  {
    path:'/addCoffee',
    element: <AddCoffee></AddCoffee>

  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)

  },
  {
    path: '/signIn',
    element: <SignIn></SignIn>
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  }
]
}
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
