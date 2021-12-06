import { useHistory } from "react-router";

function success() {
    const history = useHistory();
    const buttonClick = (event) => {
        event.preventDefault();
        history.push('/');
    }

    return (
        <div>
            <h1>Thanks for your feedback!</h1>
            <button onClick={(event) => buttonClick(event)}>Start New Feedback</button>
        </div>
    )
}

export default success;