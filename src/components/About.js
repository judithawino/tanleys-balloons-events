import React from 'react';
import Contact from './Contact';

export default function About(){

    return(
        <div>
            <h1>About Us</h1>
            <center className='lead'>From set up to clean up, we bring your dreams to life while you have the fun. Whether it is a gender reveal, baby shower, bridal shower, graduation, engagement, private party, corporate launch, e.t.c. Talk to us and we will create an experiance of a lifetime. </center>
            <h2>Company History</h2>
            <p>Tanley's Balloons and Events was founded in 2020 by Violet Chrispin and Winfred Ogeya.<br/>
             Their main aim for starters was to just provide a creative event decor using purely balloons. As the demand grew so did they had to restrategize and expand their creativity baseline. The company is currently located in Kisumu along Swan Center, Oginga Odinga street. 
            </p>
            <h3>Mission</h3>
            <p>To be the world leading Event Company that delivers high quality, value-driven and Creative services while focusing on the originality of our clients’ project.</p>
            <h3>Vision</h3>
            <p>To ensure client satisfaction and personalization as we deliver personal and unique experiences that are beyond customer expectations and create long term loyal relationships by consistently providing outstanding services that creates an overall extraordinary event experience.</p>
            <h3>Core Values</h3>
            <p>Our Core values employ us to strive hard in building our reputation within the industry and develop good connections with our clients to understand their needs and requirements. Our attention to every detail on events is the norm and the highest value of our company. Our values are broadly outlined as:</p>

            <div className="row" style={{marginLeft: "100px"}}>
                <div className="col-md-3">
                    <div className='card' style={{width: 18 + 'rem'}}>
                        <div className="card-body"> 
                            <ul className="list-group list-group-right">
                                <h3 className='card-title'>Integrity</h3>                    
                                <p>We operate on a foundation of trust, integrity and respect which are fundamental for the success of our business and personal relations. </p>                     
                            </ul>
                        </div>    
                    </div>
                </div>               
           
                <div className="col-md-3">
                    <div className='card' style={{width: 18 + 'rem'}}>
                        <div className="card-body">                           
                            <ul className="list-group list-group-right">                                 
                                <h3 className='card-title'>Communication</h3>                    
                                <p>We believe communication is key; we endeavor to ensure our clients are well informed and receive regular updates. We also value communication for impact among our employees.</p>                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className='card' style={{width: 18 + 'rem'}}>
                        <div className="card-body">                           
                            <ul className="list-group list-group-right">                                 
                                <h3 className='card-title'>Teamwork</h3>                    
                                <p>At Tanley's we believe that two hands are better than one. We also believe that there is no outstanding project that can be worked on by one person. Hence, we embrace working with others</p>                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
            
            <div className="row" style={{marginLeft: "100px"}}>
                <div className="col-md-3">
                    <div className='card' style={{width: 18 + 'rem'}}>
                        <div className="card-body"> 
                            <ul className="list-group list-group-right">
                                <h3 className='card-title'>Network</h3>                    
                                <p>Tanley's is a business built on the value of strong networks. Our focus is to continually grow our industry connections, ensuring our clients are offered cost-effective and quality services. </p>                     
                            </ul>
                        </div>    
                    </div>
                </div>               
           
                <div className="col-md-3">
                    <div className='card' style={{width: 18 + 'rem'}}>
                        <div className="card-body">                           
                            <ul className="list-group list-group-right">                                 
                                <h3 className='card-title'>Creativity</h3>                    
                                <p>Our out of the box approach allows for a different way of thinking and ultimately a unique experience for those attending events decorated by Tanley's Balloons and Events.</p>                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className='card' style={{width: 18 + 'rem'}}>
                        <div className="card-body">                           
                            <ul className="list-group list-group-right">                                 
                                <h3 className='card-title'>Work Environment</h3>                    
                                <p>We provide our employees with conducive work environments that enables them to effectively manage stress. Providing a supportive and fun culture has been key to our growth.</p>                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
            {/* <Contact />       */}
        </div>
    )
}