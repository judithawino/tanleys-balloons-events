import React, { useState, useEffect} from 'react';
import Gallery from './Gallery';

export default function GalleryList(){
    const [image, setImage]=useState([])

    function handleFetchImage(){
        fetch('https://tanleys.herokuapp.com/prev-work')
        .then((resp)=>resp.json())
        .then((data)=>{
            setImage(data)
        })
    };

    useEffect(handleFetchImage,[]);

    const images=image.map((imageData)=>(
        <Gallery key={imageData.id}
        gallery={imageData}
        />
    ))
    return(
        <div>
            <h1>Samples of Previous Work</h1>
            <p className='lead'>The following are the pictorial representation of our past work</p>
            <div className='row'>
                {images}
            </div>
        </div>
    )

}