import React from 'react';

export default function Service({serviceObje}){
    const{title, description, price, picture}= serviceObje

    return(
        <div className="card" style={{width: "100%"}}>
            <div className="row g-0">
            <img src={picture} alt="Event Snapshot" className="img-fluid rounded-start" style={{width:"300px",height: "300px"}} />
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



