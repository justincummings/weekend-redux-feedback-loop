import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function feeling() {
    const [feeling, setFeeling] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const feelingSubmit = (event) => {
        event.preventDefault();
        console.log('Understand is next');
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        });
        history.push('/understand');
    }; 


    return (
        <div>
            <h1>How are you feeling today?</h1>
            <select name = "feeling" onChange={(event) => setFeeling(event.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={feelingSubmit}>Next</button>
        </div>
    );
}

export default feeling
