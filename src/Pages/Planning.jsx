import {  FaHome } from 'react-icons/fa';
import {  BiSolidMessageDots,BiParty } from 'react-icons/bi';
import {  BsPencilSquare } from 'react-icons/bs';

const Planning = () => {
return (
 <div className="px-10 py-10">
       <h3 className="text-4xl text-center font-semibold">
       <span className="text-orange-400">Hello!</span> We Are an Event <span className="text-orange-400">Planning</span> Agency</h3>
       <p className="text-center text-base mt-5 font-normal">As the premier event planning company in the area, we know that it’s not <br></br> “one size fits all”. Each event and client is unique and we believe our services<br/> should be as well. We know that it should be “Can I hire a planner?” not <br/>  “Can I afford one?”.</p> 
       <div className='lg:flex justify-between px-10 py-20'>
         <div>
            <FaHome className='text-orange-500 text-4xl'></FaHome> 
            <p className='text-lg font-medium'>Find the perfect venue <br/>for free</p>
           <p className='text-orange-500 font-black rounded-xl'>1</p>                 
         </div>
         <div>
         <BiSolidMessageDots className='text-orange-500 text-4xl'></BiSolidMessageDots>
            <p className='text-lg font-medium'>Connect with the <br/> best vendor</p>
           <p className='text-orange-500 font-black rounded-xl'>2</p>                 
         </div>
         <div>
            <BsPencilSquare className='text-orange-500 text-4xl'></BsPencilSquare>
            <p className='text-lg font-medium'>Let us help you with <br/> the event</p>
           <p className='text-orange-500 font-black rounded-xl'>3</p>                 
         </div>
         <div>
         <BiParty className='text-orange-500 text-4xl'></BiParty>
            <p className='text-lg font-medium'>Enjoy the party with <br/>your friends</p>
           <p className='text-orange-500 font-black rounded-xl'>4</p>                 
         </div>


      </div>                                                                                  
  </div>
);
};

export default Planning;