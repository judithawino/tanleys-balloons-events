import React from 'react';
import babyshower from './images/babyshower.jpg'
import balloon_hug from './images/balloon_hug.jpg';
import img from './images/img.jpg'
import lux from './images/lux.jpg'
import table_setting from './images/table_setting.jpg'

export default function Home(){

    return(
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={table_setting} className="d-block w-100" alt="..." style={{height:500 +'px'}}/>
                        <div className="carousel-caption d-none d-md-block" style={{color:'black'}}>
                            <h1>Tanley's Balloons and Events Kenya</h1>
                            <p className='lead'>Welcome to Tanley's balloons and events.<br/>
                                This is where all the magic styling of your events happen. 
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                    <img src={babyshower} className="d-block w-100" alt="..." style={{height:500 +'px'}}/>
                    <div className="carousel-caption d-none d-md-block" style={{color:'black'}}>
                            <h1>Tanley's Balloons and Events Kenya</h1>
                            <p className='lead'>we strive to give you quality at all times.<br/>
                                We work with your given timeline and you choice of style and theme color. 
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src={img} className="d-block w-100" alt="..." style={{height:500+'px'}}/>
                        <div class="carousel-caption d-none d-md-block" style={{color:'black'}}>
                            <h1>Tanley's Balloons and Events Kenya</h1>
                            <p className='lead'>What makes us your number one event company country wide, <br/>
                                is that we not only promise to work dilligently, but to also deliver beyond your expectations. 
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src={balloon_hug} className="d-block w-100" alt="..." style={{height:500+'px'}}/>
                        <div className="carousel-caption d-none d-md-block" style={{color:'black'}}>
                            <h1>Tanley's Balloons and Events Kenya</h1>
                            <p className='lead'>We are located in Kisumu, along Swan Center</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src={lux} className="d-block w-100" alt="..." style={{height:500+'px'}}/>
                        <div className="carousel-caption d-none d-md-block" style={{color:'black'}}>
                            <h1>Tanley's Balloons and Events Kenya</h1>
                            <p className='lead' style={{flush:'left'}}>However, we are flexible and ready to travel whenever duty calls.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden" style={{bgcolor: 'black'}}>Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>     
            <h3>Packages</h3>
            <p className='lead'>Our packages include:</p>         
               
            <div className="row">
                <div className="col-md-3">
                    <div className='card' style={{width: 18 + 'rem'}}>
                        <div className="card-body"> 
                            <ul className="list-group list-group-right">
                                <h3 className='card-title'>Bronze Package</h3>                    
                                <ul style={{background:'#64379f', color:'#fff'}}>
                                    <li className="list-item">High Peak tent</li>
                                    <li className="list-item">Plast seats dressed in spandex</li>
                                    <li className="list-item">3 rectangular dressed tables with runners</li>
                                    <li className="list-item">Themed printed backdrop with a garland</li>
                                    <li className="list-item">Centerpieces, charger plates and napkins</li>
                                    <li className="list-item">labour</li>
                                </ul>                             
                            </ul>
                        </div>    
                    </div>
                </div>               
           
                <div className="col-md-3">
                    <div className='card' style={{width: 18 + 'rem'}}>
                        <div className="card-body">                           
                            <ul className="list-group list-group-right">                                 
                                <h3 className='card-title'>Silver Package</h3>                    
                                <ul style={{background:'#9854cb', color:'#fff'}}>
                                    <li className="list-item">Pergola tent</li>
                                    <li className="list-item">Chiavari seats</li>
                                    <li className="list-item">3 rectangular dressed tables with runners</li>
                                    <li className="list-item">Decorated welcoming signage</li>
                                    <li className="list-item">Cake tables</li>
                                    <li className="list-item">Themed printed backdrop of organic garland with flower</li>
                                    <li className="list-item">Centerpieces, charger plates and napkins</li>
                                    <li className="list-item">Cutlery and Glasses</li>
                                    <li className="list-item">labour</li>    
                                </ul>                                        
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className='card' style={{width: 18 + 'rem'}}>
                        <div className="card-body">                           
                            <ul className="list-group list-group-right">                                   
                                <h3 className='card-title'>Gold Package</h3>                    
                                <ul style={{background:'#ddacf5'}}>
                                    <li className="list-item">Pergola tent</li>
                                    <li className="list-item">Luxe seats</li>
                                    <li className="list-item">3 rectangular dressed tables with mirrored runners</li>
                                    <li className="list-item">Themed printed backdrop with organic garland, flowers props and lights</li>
                                    <li className="list-item">Decorated welcoming signage</li>
                                    <li className="list-item">Pedestal Cake stands</li>
                                    <li className="list-item">Centerpieces with flowers and candles, charger plates, napkins and rings</li>
                                    <li className="list-item">Cutlery, Glasses and labour</li>
                                    <li className="list-item">Thank you cards</li>
                                    {/* <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                        15 PAX @<br/>Ksh.41,000/
                                    </span> */}
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className='card' style={{width: 18 + 'rem'}}>
                        <div className="card-body">                           
                            <ul className="list-group list-group-right">                                
                                <h3 className='card-title'>Diamond Package</h3>                    
                                <ul style={{background:'#75e8e7'}}>
                                    <li className="list-item">B-line tent</li>
                                    <li className="list-item">Dior seats</li>
                                    <li className="list-item">Round or rectangular dressed tables with mirrored runners</li>
                                    <li className="list-item">Themed printed backdrop with organic garland, flowers, props and lights</li>
                                    <li className="list-item">Decorated welcoming signage</li>
                                    <li className="list-item">Cake</li>
                                    <li className="list-item">Floor Carpet</li>
                                    <li className="list-item">Centerpieces with flowers and candles, charger plates, napkins and rings</li>
                                    <li className="list-item">Cutlery, Glasses</li>
                                    <li className="list-item">Thank you cards</li>
                                    <li className="list-item">Labour</li>
                                </ul>                                
                            </ul>
                        </div>
                    </div>
                </div>                                          
            </div>        
        
        </div>
    )
}