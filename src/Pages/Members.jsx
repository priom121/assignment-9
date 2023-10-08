import member1 from '../../public/images/membars1.jpg'
import member2 from '../../public/images/members2.jpg'
import Planning from './Planning';



const Members = () => {
return (
  <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl text-center mt-2 font-semibold">
                              Our event Honour</h2>  
<div className="px-10 py-12 flex   className='text-orange-500 text-4xl' justify-between gap-5">
                              
<div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='bg-cover' src={member1} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Bertran & His Son</h2>
    <p>Click the button to watch on Jetflix app.</p>
  </div>
</div>                                                                                
 <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='h-full bg-cover' src={member2}alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Jenise Safo</h2>
    <p>Click the button to watch on Jetflix app.</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div> */}
  </div>
</div>                                                         
</div>  
  <Planning></Planning>                                                                             
 </div>

);
};

export default Members;