import React, {useState, useEffect} from 'react';
import Feedback from './Feedback';

export default function FeedbackCard(){
    const [feedback, setFeedback] =useState([])

    function handleFeedbackFetch(){
        fetch('https://tanleys.herokuapp.com/feedback')
        .then((resp)=>resp.json())
        .then((data)=>{
            setFeedback(data);
        })
    }
    useEffect(handleFeedbackFetch,[])

    const feedbackList=feedback.map((feedData)=>(
        <Feedback key={feedData.id}
        feed={feedData}
        />
    ))
    return(
        <div>
            <h1>Feedbacks</h1>
            {feedbackList}
        </div>
    )
}