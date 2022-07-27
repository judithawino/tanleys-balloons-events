import React from 'react';
import babyshower from './images/babyshower.jpg'

export default function Home(){

    return(
        <div>
        <div className="home">
            <h1>Tanley's Balloons and Events Kenya</h1>
            <p className='lead'>Welcome to Tanley's balloons and events.<br/>
             This is where all the magic styling of your events happen. We strive to give you quality at all times.<br/>
             We work with your given timeline and you choice of style. Hence, we are your number one event company. <br/>
             We are located in Kisumu but we come to you our client wherever you are.<br/>
             Our packages include:
            </p>
        </div>        
            <div className="row">
                <div className="col-md-3">
                    <div className='card' style={{width: 18 + 'rem'}}>
                        <div className="card-body"> 
                          <div className='bronze'>                          
                            <ul className="list-group list-group-right">
                                <li className="list-item"> 
                                    <h3 className='card-title'>Bronze Package</h3>                    
                                    <ul>
                                        <li className="list-item">High Peak tent</li>
                                        <li className="list-item">Plast seats dressed in spandex</li>
                                        <li className="list-item">3 rectangular dressed tables with runners</li>
                                        <li className="list-item">Themed printed backdrop with a garland</li>
                                        <li className="list-item">Centerpieces, charger plates and napkins</li>
                                        <li className="list-item">labour</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>    
                        </div>
                    </div>
                </div> 
                
           
                <div className="col-md-3">
                    <div className='card' style={{width: 18 + 'rem'}}>
                        <div className="card-body">                           
                            <ul className="list-group list-group-right">
                                <li className="list-group-item"> 
                                    <h3 className='card-title'>Silver Package</h3>                    
                                    <ul>
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
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>                
                <div className="col-md-3">
                    <div className='card' style={{width: 18 + 'rem'}}>
                        <div className="card-body">                           
                            <ul className="list-group list-group-right">
                                <li className="list-group-item"> 
                                    <h3 className='card-title'>Gold Package</h3>                    
                                    <ul>
                                        <li className="list-item">Pergola tent</li>
                                        <li className="list-item">Luxe seats</li>
                                        <li className="list-item">3 rectangular dressed tables with mirrored runners</li>
                                        <li className="list-item">Themed printed backdrop with organic garland, flowers props and lights</li>
                                        <li className="list-item">Decorated welcoming signage</li>
                                        <li className="list-item">Pedestal Cake stands</li>
                                        <li className="list-item">Centerpieces with flowers and candles, charger plates, napkins and rings</li>
                                        <li className="list-item">Cutlery, Glasses and labour</li>
                                        <li className="list-item">Thank you cards</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>                     
            </div>        
        
        </div>
    )
}