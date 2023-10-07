import { Outlet } from "react-router-dom";
import Navbar from "../ShareFolder/Navbar";
import Footer from "../ShareFolder/Footer";


const MainLayOut = () => {
return (
 <div>
       <Navbar></Navbar>
      <div className="min-h-screen">
      <Outlet></Outlet> 
      </div>
      <Footer></Footer>                                                                                   
 </div>
);
};

export default MainLayOut;