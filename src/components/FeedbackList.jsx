import propTypes from "prop-types"
import FeedbackItem from "./FeedbackItem"
function FeedbackList({ feedback, handleDelete }) {
    if(!feedback || feedback.length == 0) return (<div>No feedback to display</div>)
  return (
    <div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
        ))}
    </div>
  )
}
FeedbackList.propTypes = {
  feedback: propTypes.array.isRequired,
    handleDelete: propTypes.func.isRequired,
}

export default FeedbackList