import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { auth } from '../../Firebase/firebase.init';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Register = () => {
const {createUser} = use(AuthContext)
console.log(createUser)
    const handleSubmit = (e)=>{
e.preventDefault()
const email=e.target.email.value;
const password = e.target.password.value;
console.log(email,password)
createUser(email,password)
.then(result=>console.log(result.user))
.catch(error=>console.log(error))

// createUserWithEmailAndPassword(auth, email,password).then(result=>console.log(result)).catch(error=>console.log(error))

    }

    return (
  
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>already have an account? please <Link to="/login" className='text-blue-500'>Login</Link></p>
        </form>
      </div>
    </div>
    );
};

export default Register;