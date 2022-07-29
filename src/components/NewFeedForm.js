import React, {useEffect, useState} from 'react';

export default function NewFeedForm(){
    const [feed, setFeed]=useState({
      custName:"",
      content:"",  
    })

    function inputChange(event){
        setFeed({
            ...feed,
            [event.target.name]:event.target.value
        })
    }

    function handleFeedPost(event){
        event.preventDefault();
        fetch('https://tanleys.herokuapp.com/feedback',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"},
            body:JSON.stringify({
                custName:feed.custName,
                content:feed.content
            })
        })
        // form.reset()
    }
    
    return (
        <form onSubmit={ handleFeedPost }>
            <div class="row mb-3">
                <label class="col-sm-2">Name</label>
                <div class="col-sm-10">
                {/* <input type="email" class="form-control" id="inputEmail3"/> */}
                <input
                    class="form-control" 
                    name="custName"
                    placeholder="Enter your Name"
                    value={feed.name}
                    onChange={ inputChange}
                    required="true"
                />  
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-2">Feedback</label>
                <div class="col-sm-10">
                <textarea 
                    class="form-control"
                    name="content"
                    placeholder="Write your feedback here" 
                    rows={10} 
                    value={feed.content}
                    onChange={ inputChange}
                    required="true"
                />
                </div>
            </div>          
          <input type="submit" value="Add Feedback" />          
        </form>
      );
}