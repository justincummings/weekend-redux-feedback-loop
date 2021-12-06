import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, useHistory, } from "react-router-dom";


function review() {
    const dispatch = useDispatch();
    const history = useHistory();
    const feelingReducer = useSelector((store) => store.feelingReducer)
    const understandReducer = useSelector((store) => store.understandReducer)
    const supportReducer = useSelector((store) => store.supportReducer)
    const commentReducer = useSelector((store) => store.commentReducer)
    const feedbackReducer = useSelector( state => state.feedbackReducer);
    console.log('feedbackReducer', feedbackReducer);

    const onSubmit = (event) => {
        event.preventDefault();

console.log('in review before axios');
let feedback = {
    feeling: feelingReducer,
    understanding: understandReducer,
    support: supportReducer,
    comments: commentReducer
}
    axios({
        method:'POST',
        url:'/feedback',
        data: feedback
    }).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
    history.push('/thanks')
};

return (
    <div>
    <h1>Review Your Feedback</h1>
    <form onSubmit = {onSubmit}>
        <p>Feelings: {feelingReducer}</p>
        <p>Understanding: {understandReducer}</p>
        <p>Support: {supportReducer}</p>
        <p>Comments: {commentReducer}</p>
        <br />
        <button>Submit</button>
        </form>
    </div>
)
};

export default review
