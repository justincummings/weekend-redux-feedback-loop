import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'


function review() {
    const dispatch = useDispatch();
    const history = useHistory();
    const feelingReducer = useSelector((store) => store.feelingReducer)
    const understandReducer = useSelector((store) => store.understandReducer)
    const supportReducer = useSelector((store) => store.supportReducer)
    const commentReducer = useSelector((store) => store.commentReducer)

    const thanks = () =>{
        history.push('/thanks');
    }

    const onSubmit = () => {
        const feedbackInput = {
            feeling: feelingReducer,
            understand: understandReducer,
            support: supportReducer,
            comment: commentReducer
        }
console.log('in review before axios');
    axios({
        method: 'POST',
        url: '/feedback',
        data: feedbackInput,
    }).then((response) => {
        console.log(response, 'holy shit it works');
    }).catch((err) => {
        console.log(err);
    });
    thanks();
};

return (
    <div>
    <h1>Review Your Feedback</h1>
        <p>Feelings: {feelingReducer}</p>
        <p>Understanding: {understandReducer}</p>
        <p>Support: {supportReducer}</p>
        <p>Comments: {commentReducer}</p>
        <br />
        <button onClick={onSubmit}>Submit</button>
    </div>
)
};

export default review
