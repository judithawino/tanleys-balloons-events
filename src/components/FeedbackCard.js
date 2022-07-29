import React, {useState, useEffect} from 'react';
import Feedback from './Feedback';
import NewFeedForm from './NewFeedForm';

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


  function handleDelete(deletedFeed) {
    const newFeedList=feedback.filter((feedback)=>
    feedback.id!==deletedFeed.id);
    setFeedback(newFeedList);
  }


    // function handleFeedUpdate(){
    //     fetch(`https://tanleys.herokuapp.com/feedback/${id}`, {
    //         method: 'POST',
    //         headers:{
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //           "content":"",  
    //         })
    //     })
    //     .then((resp)=>resp.json())
    //     .then((data)=>{
    //         setFeedback(data)
    //     })
    // }

    const feedbackList=feedback.map((feedData)=>(
        <Feedback key={feedData.id}
        feed={feedData}
        onDelete={handleDelete}
        />
    ))
    return(
        <div>
            <h1>Feedbacks</h1>
            {feedbackList}
            <NewFeedForm />
        </div>
    )
}