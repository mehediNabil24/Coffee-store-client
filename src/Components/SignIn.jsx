import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
    const {signInUser} =useContext(AuthContext)
    const handleSignIn = e=>
    {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email,password)
        .then(result=>{console.log(result.user)
    const lastSignInTime = result?.user?.metadata?.lastSignInTime;
    const loginInfo ={email, lastSignInTime};

    fetch('http://localhost:5000/users',{
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        body : JSON.stringify(loginInfo)
    })
    .then(res=>res.json())
    .then(data=>console.log('sign in updated',data))

})
        .catch(error=>console.log('error', error.message))


    }
    return (
        <div className=" bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
      <form onSubmit={handleSignIn} className="card-body">
        
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
          <button className="btn btn-primary">Sign In</button>
        </div>
        <p>Don't have an account? <NavLink to={'/signUp'} className={'text-blue-500'}>Sign Up </NavLink></p>
      </form>
      
    </div>
  </div>
</div>
    );
};

export default SignIn;