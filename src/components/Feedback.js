import React from 'react';

export default function Feedback({feed}){
    const {id, custName, content}=feed

    return(
        <div className="card mb-3" style={{maxwidth: "540px"}}>
            <div className="row g-0">                
                <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{custName}</h3>
                    <p className="card-text">{content}</p>                    
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button" style={{background:'#27104e', color:'#FFFFFF'}}>Edit</button>
                    <button class="btn btn-primary" type="button" style={{background:'#27104e', color:'#FFFFFF'}}>Delete</button>
                </div>
                </div> 
            </div>       
        </div>  
    )
    
}