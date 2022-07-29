import React from 'react';

export default function Service({serviceObje}){
    const{id, title, description, price, picture}= serviceObje

    return(
        <div className="card mb-3" style={{maxwidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={picture} alt="Picture illustartion" class="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <p className='lead'>
                    Price Ranges from <strong> {price}</strong> and above
                    </p>
                </div>
                </div> 
            </div>       
        </div>  

    )
}