
import { useEffect } from 'react';
import member1 from '../../public/images/membars1.jpg'
import member2 from '../../public/images/members2.jpg'
import Planning from './Planning';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Members = () => {
 useEffect(()=>{
    AOS.init({
      duration:1000,
      delay:3000000000,
    });
 },[])
return (

  <div  className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl text-center mt-2 font-semibold">
                              Our event Honour</h2>
<div  data-aos="fade-right" className="px-10 py-12 flex className='text-orange-500 text-4xl' justify-between gap-5">
                              
          <div className="card card-side bg-base-100 shadow-xl">
          <figure><img  className='bg-cover' src={member1} alt="Movie"/></figure>
          <div className="card-body">
              <h2 className="card-title">Bertran & His Son</h2>
                  <p></p>
                  </div>
                 </div>                                                                                
                 <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className='h-full bg-cover' src={member2}alt="Movie"/></figure>
                          <div className="card-body">
            <h2 className="card-title">Jenise Safo</h2>
                  <p></p>
                     </div>
                       </div>                                                         
                       </div>
      
      
     
  
  <Planning></Planning>                                                                             
 </div>

);
};

export default Members;