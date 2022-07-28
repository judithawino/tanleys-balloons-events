import React, {useState, useEffect} from "react";

export default function Services(){
    const[service,setService] = useState([]);
    const{id, title, description, price, picture}= serviceObje

    function handleServiceFetch(){
        fetch('https://tanleys.herokuapp.com/services')
        .then((resp)=>resp.json())
        .then((data)=>{
            setService(data)
        
        })
    }
    useEffect(handleServiceFetch,[])
    return (
        <div>
            <h1> Services</h1>
            <p>Our services include ...</p>
            <div key={id}>
                {service}
            </div>
        </div>
    )
}