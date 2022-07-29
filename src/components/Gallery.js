import React from 'react';

export default function Gallery({gallery}){
    const{id, workName, imageUrl}=gallery
    return(
        <div>
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                <img src={imageUrl} alt="Picture illustartion" className="img-fluid rounded-start" style={{width:"300px",height: "300px"}} />
                <div class="card-body">
                    <h5 class="card-title">{workName}</h5>                    
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <img src={imageUrl} alt="Picture illustartion" className="img-fluid rounded-start" style={{width:"300px",height: "300px"}} />
                <div class="card-body">
                    <h5 class="card-title">{workName}</h5>                    
                </div>
                </div>
            </div>
        </div>
        <div class="row">
        <div class="col-sm-6">
            <div class="card">
            <img src={imageUrl} alt="Picture illustartion" className="img-fluid rounded-start" style={{width:"300px",height: "300px"}} />
            <div class="card-body">
                <h5 class="card-title">{workName}</h5>                    
            </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card">
            <img src={imageUrl} alt="Picture illustartion" className="img-fluid rounded-start" style={{width:"300px",height: "300px"}} />
            <div class="card-body">
                <h5 class="card-title">{workName}</h5>                    
            </div>
            </div>
        </div>
    </div>
    </div>
    )
}