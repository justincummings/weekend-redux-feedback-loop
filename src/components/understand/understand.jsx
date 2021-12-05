import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function understand() {
    const [understand, setUnderstand] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const understandSubmit = (event) => {
        event.preventDefault();
        console.log('Support is next');
        dispatch({
            type: 'ADD_UNDERSTAND',
            payload: understand
        });
        history.push('/support');
    }; 


    return (
        <div>
            <h1>How well do you understand the material?</h1>
            <h5>5 = Easy Peezy Lemon Squeezy</h5>
            <h5>1 = Totally Lost</h5>
            <select name = "understand" onChange={(event) => setUnderstand(event.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={understandSubmit}>Next</button>
        </div>
    );
}

export default understand