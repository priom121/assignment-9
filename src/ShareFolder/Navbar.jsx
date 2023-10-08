import { NavLink } from "react-router-dom";



const Navbar = () => {
 const navLinks = <>
   <ul className="lg:flex  items-center gap-5 text-xl font-medium">
    <li>
    <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400" : ""
  }
>
  Home
</NavLink>
    </li>

    {/* <li>
    <NavLink
  to="/pages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400" : ""
  }
>
Pages
</NavLink>
    </li> */}

    <li>
    <NavLink
  to="/blog"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400" : ""
  }
>
 Blog
</NavLink>
    </li>

    <li>
      
  <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400" : ""
  }
>
 Login
</NavLink>
    </li>

    <li>
    <NavLink
  to="/register"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400" : ""
  }
>
 Register
</NavLink>
    </li>
   </ul>
 </>
return (
  <div>
      <div className="navbar bg-gray-300 p-5 shadow-lg text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content
       mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-3xl "><span className="text-orange-500">Social</span> Events</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div> 
                                                                                        
 </div>
 );
};

export default Navbar;