import propTypes from "prop-types"
import FeedbackItem from "./FeedbackItem"
function FeedbackList({ feedback }) {
    if(!feedback || feedback.length == 0) return (<div>No feedback to display</div>)
  return (
    <div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
        ))}
    </div>
  )
}
FeedbackList.propTypes = {
  feedback: propTypes.array.isRequired,
}

export default FeedbackList