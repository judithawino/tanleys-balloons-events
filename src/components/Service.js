import React from 'react';

export default function Service({serviceObje}){
    const{id, title, description, price, picture}= serviceObje
    return(
        
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <img src={picture} alt="Picture illustartion" />
              <p>
              Price Ranges from <strong> {price}</strong> and above
              </p>
            </div>  

    )
}