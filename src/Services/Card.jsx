
const Card = ({service}) => {

const {id,Event ,Image , Price, Description} = service
return (
 <div className="">
      <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
  <figure><img className="bg-cover" src={Image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{Event}</h2>
    <p>{Description}</p>
    <p className="text-lg font-medium">{Price}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-secondary">Details</button>
    </div>
  </div>
</div>                                                                              
 </div>
);
};

export default Card;