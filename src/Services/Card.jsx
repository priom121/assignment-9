import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Card = ({service}) => {
useEffect(()=>{
  AOS.init({
    duration:2000,
    delay:2000000000,
  })
},[])
const {id,Event ,Image , Price, Description} = service
return (
 <div className="">
      <div data-aos="fade-left" className="card card-compact w-96  h-96 bg-base-100 shadow-xl">
  <figure><img className="bg-cover" src={Image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{Event}</h2>
    <p className="text-base font-medium">{Description.slice(0,100)}.....</p>
    <p className="text-xl font-medium">{Price}</p>
    <Link to={`/pages/${id}`} >
    <div className="card-actions  ">
     <button className="btn btn-secondary w-full">Details</button>
    </div>
    </Link>
    
  </div>
</div>                                                                              
 </div>
);
};

export default Card;