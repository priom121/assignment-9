
const DetailsPage = ({details}) => {
 const {id,Event,Image,Price,Description} =details

return (
<div className="card mt-8  mb-5 card-compact w-[600px]  bg-base-100 shadow-2xl">
  <figure><img src={Image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{Event}</h2>
    <p>{Price}</p>
    <p>{Description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
);
};

export default DetailsPage;