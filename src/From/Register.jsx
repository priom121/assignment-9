import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProVider";
import Swal from "sweetalert2";

const Register = () => {
  const {register  }= useContext(AuthContext)
// console.log(updateProfile);

  const handleRegister= (e)=>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData (e.currentTarget);
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name,email,password);
    // password validation
    if(password.length < 6){
      Swal.fire({
        icon: 'error',
        title: 'opps ',
        text: 'password must be 6 characters',
      })
      return;
    }
    else if(!/[A-Z]/.test(password)){
      Swal.fire({
        icon: 'error',
        title: 'oopss ',
        text: 'password must be one capital letter',
      })
      return;
    }
    else if(!/[#$%&?]/.test(password)){
      Swal.fire({
        icon: 'error',
        title: 'oopss ',
        text: 'password must be a special character',
      })
      return;
    }
    
// set user
    register(email,password)
    .then(result=>{
      console.log(result.user)
      Swal.fire({
        icon: 'success',
        title: 'done',
        text: 'your register have successfully',
      })
    })
    .catch(error=>{
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'oopss ',
        text: 'something went wrong',
      })
    })
  }


return (
  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content  w-full  flex-col ">
    <div className="text-center  ">
      <h1 className="text-5xl font-bold text-orange-500">Register!</h1>
    </div>
    <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body  ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered text-xl" required />
        </div>
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
          <button className="btn btn-error">Register</button>
        </div>
      </form>
      <p className="text-center text-lg font-medium">
        Already an account ? Please <Link className="text-blue-500  p-2 font-bold" to='/login'>Log in</Link></p>
    </div>
  </div>
</div>
);
};

export default Register;