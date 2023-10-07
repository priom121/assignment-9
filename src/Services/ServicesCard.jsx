import Card from "./Card";

const ServicesCard = ({services}) => {
//  console.log(services);
 return (
  <div>
      <h1 className="text-4xl mt-5 text-center font-bold">Our Services </h1>
    <div className=" max-w-screen-2xl mx-auto  py-10 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {
         services.map(service=><Card key={service.id} service={service}></Card>)
      }                       
</div>                                                                                  
 </div>
 );
};

export default ServicesCard;