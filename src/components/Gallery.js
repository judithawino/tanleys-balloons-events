import React from 'react';

export default function Gallery({gallery}){
    const{workName, imageUrl}=gallery
    return(
        <div className="card" style={{width: 18 + 'rem'}}>
            <img src={imageUrl} className="card-img-top" alt="event"/>
            <div className="card-body">
                <h5 className="card-title">{workName}</h5>
                
            </div>
        </div>

    )
}