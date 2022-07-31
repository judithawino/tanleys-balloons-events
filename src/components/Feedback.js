import React from 'react';

export default function Feedback({feed, onDelete}){
    const {custName, content}=feed

    function handleDeleteClick() {
        fetch(`https://tanleys.herokuapp.com/feedback/${feed.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDelete(feed));
      }
    return(
        <div className="card mb-3" style={{maxwidth: "540px"}}>
            <div className="row g-0">                
                <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{custName}</h3>
                    <p className="card-text">{content}</p>                    
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary me-md-2" type="button" style={{background:'#27104e', color:'#FFFFFF'}}>Edit</button>
                    <button className="btn btn-primary" type="button" style={{background:'#27104e', color:'#FFFFFF'}} onClick={handleDeleteClick}>Delete</button>
                </div>
                </div> 
            </div>       
        </div>  
    )
    
}