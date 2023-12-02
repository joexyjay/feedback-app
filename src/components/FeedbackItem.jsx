import propTypes from 'prop-types'
import Card from "./shared/Card"
function FeedbackItem({item}) {

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item :propTypes.object.isRequired
}
export default FeedbackItem