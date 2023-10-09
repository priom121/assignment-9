
const DetailsPage = ({details}) => {
 const {id,Event,Image,Price,Description} =details

return (
<div className="card mt-8 mx-auto  mb-5 card-compact w-[600px]  bg-base-100 shadow-2xl">
  <figure><img src={Image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-bold">{Event}</h2>
    <p className="text-2xl font-bold">{Price}</p>
    <p className="text-xl">{Description}</p>
    <button className="p-3 w-1/6 text-white mx-auto rounded-2xl bg-orange-500">
      Book Now</button>
  </div>
</div>
);
};

export default DetailsPage;