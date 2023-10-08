import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsPage from "./DetailsPage";


const Pages = () => {
     const [details , setDetails] =useState([]);
     const page = useLoaderData()
     //  console.log(page);
      const {id} =useParams()
     //  console.log(id);
     useEffect(()=>{
        const pages =page.find(page=> page.id ===id);
        setDetails(pages)
     },[id,page])
return (
 <div className="max-w-screen-xl mx-auto mt-10">
      <h4 className="text-4xl font-bold">
      <span className="text-orange-500">Details</span> Pages</h4> 
      <div className="max-w-screen-xl mx-auto">
      <DetailsPage details={details}></DetailsPage>      
     </div>                                                                                  
 </div>
);
};

export default Pages;