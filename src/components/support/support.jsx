import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function support() {
        const [support, setSupport] = useState('');
        const history = useHistory();
        const dispatch = useDispatch();
    

    const supportSubmit = (event) => {
        event.preventDefault();
        console.log('Comments are next');
        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        });
        history.push('/comment');
    }; 


    return (
        <div>
            <h1>How supported do you feel?</h1>
            <h5>5 = Firth of Forth Bridge - strongest bridge in the world</h5>
            <h5>1 = Pensacola Bay Bridge - most deficient bridge in the US</h5>
            <select name = "understand" onChange={(event) => setSupport(event.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={supportSubmit}>Next</button>
        </div>
    );
}

export default support