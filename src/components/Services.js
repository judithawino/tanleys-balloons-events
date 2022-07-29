import React, {useState, useEffect} from "react";
import Service from "./Service";

export default function Services(){
    const[service,setService] = useState([]);
   

    function handleServiceFetch(){
        fetch('https://tanleys.herokuapp.com/services')
        .then((resp)=>resp.json())
        .then((data)=>{
            setService(data)
        
        })
    }
    useEffect(handleServiceFetch,[])
    
    const serviceList=service.map((services)=>(
        <Service key={services.id}
        serviceObje={services}        
        />
      ))
    return (
        <div>
            <h1> Services</h1>
            <p>Our services include ...</p>
            <div>
                {serviceList}
            </div>
        </div>
    )
}