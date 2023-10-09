import {  useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProVider";
import Swal from "sweetalert2";




const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location);
  //  google log in
  const {googleLogIn,logIn } = useContext(AuthContext)
  const handleGoogle =()=>{
     googleLogIn()
  };

  const handleLogin = (e)=>{
    e.preventDefault();
    const form = new FormData (e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email,password);
    logIn(email,password)
    .then(result=>{
      console.log(result.user)
      // location
     navigate(location?.state ? location.state :'/' )
      Swal.fire({
        icon: 'success',
        title: 'done',
        text: 'Wow successfully login',
      })
    })
    .catch(error=>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'opss ',
        text: 'something went wrong',
      })
    })
    
  }
    
 return (
     <div className="hero min-h-screen bg-base-200">
     <div className="hero-content  w-full  flex-col ">
       <div className="text-center  ">
         <h1 className="text-5xl font-bold text-orange-500">Login now!</h1>
       </div>
       <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         <form onSubmit={handleLogin} className="card-body  ">
           <div className="form-control">
             <label className="label">
               <span className="label-text text-xl">Email</span>
             </label>
             <input type="email" name="email" placeholder="email" className="input input-bordered text-xl" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text text-xl">Password</span>
             </label>
             <input type="password" name="password" placeholder="password" className="input input-bordered text-xl" required />
             <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
             </label>
           </div>
           <div className="form-control mt-6">
             <button  className="btn btn-error">Login</button>
           </div>
         </form>
         <div className="py-4 text-center"><button onClick={handleGoogle} className="btn btn-outline btn-accent ">
           Google Login</button></div>
         <p className="text-center text-lg font-medium">New ? Please
         <Link className="text-blue-500  p-2 font-bold" to='/register'>
          Register</Link></p>
       </div>
     </div>
   </div>
);
};

export default Login;