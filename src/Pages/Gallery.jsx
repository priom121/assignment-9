import baby from '../../public/images/Baby.jpg'
import Retirement from '../../public/images/Retirement.jpg'
import img from '../../public/images/img.jpg'
import imggg from '../../public/images/imggg.jpg'
import imgggs from '../../public/images/imggggggg.jpg'
import engage from '../../public/images/enegement.jpg'
const Gallery = () => {
return (
 <div className="max-w-screen-xl mx-auto">
        <h3 className="text-4xl font-bold text-orange-500 mt-5">Our Gallery</h3> 
<div className="grid grid-cols-2">
                              
<img className='mt-5 w-[400px] h-[200px]' src={baby} alt="" />                                                                                 
        <img className='mt-5 w-[400px] h-[200px]' src={Retirement} alt="" />                                                                                 
        <img className='mt-5 w-[400px] h-[200px]' src={img} alt="" />                                                                                 
        <img className='mt-5 w-[400px] h-[200px]' src={imggg} alt="" />                                                                                 
        <img className='mt-5 w-[400px] h-[200px]' src={ imgggs} alt="" />                               
        <img className='mt-5 w-[400px] h-[200px]' src={ engage} alt="" />                               
                              
</div>                                                                             
 </div>
);
};

export default Gallery;