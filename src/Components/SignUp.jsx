import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
  const {createUser} = useContext(AuthContext)
  const handleSignUp = e=>{
    e.preventDefault();

    const email =e.target.email.value;
    const name =e.target.name.value;
    const password =e.target.password.value;

   

    createUser(email,password)
    .then(result=>{
      
      console.log(result.user)
      const createdAt = result.user.metadata.creationTime;
      const newUser = {name,email,createdAt}
      fetch('http://localhost:5000/users',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(res=>res.json())
      .then(data=>{console.log('user created at db', data)
        if(data.insertedId){
          Swal.fire({
            icon: "success",
            title: "Successfully User added",
            
          });
        }
      })
    })
    .catch(error=>{
      console.log('error', error.message)
    })
    
  }
    return (
        <div className=" bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;