import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function comment() {
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();


const commentSubmit = (event) => {
    event.preventDefault();
    console.log('Understand is next');
    dispatch({
        type: 'ADD_COMMENTS',
        payload: comment
    });
}; 

return (
    <div>
        <h1>Comments? Questions? Concerns?</h1>
        <input type = "text" placeholder = "Comments"
            name="comments" onChange={(event) => setComments(event.target.value)}/>
        <button onClick={commentSubmit}>Submit</button>
    </div>
)
};

export default comment