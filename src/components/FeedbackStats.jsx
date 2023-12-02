import propTypes from 'prop-types'
function FeedbackStats({feedback}) {

    // Calculate the average rating
    const averageRating = feedback.reduce((total, item) => total + item.rating, 0) / feedback.length
    averageRating.toFixed(1).replace(/\.0$/, '')
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(averageRating)? 0 : averageRating}</h4>
    </div>
  )
}
FeedbackStats.propTypes = {
    feedback: propTypes.array.isRequired,
}
export default FeedbackStats