import { useLoaderData } from "react-router-dom";
import ServicesCard from "../Services/ServicesCard";
import Banner from "./Banner";
import Members from "./Members";


const Home = () => {
    const services = useLoaderData();
    // console.log(services);
return (
<div className="max-w-screen-2xl mx-auto">
    <Banner></Banner>
    <ServicesCard services={services}></ServicesCard>
    <Members></Members>
                                                                                         
 </div>
 );
};

export default Home;