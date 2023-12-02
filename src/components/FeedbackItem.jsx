import {FaTimes} from "react-icons/fa"
import propTypes from 'prop-types'
import Card from "./shared/Card"
function FeedbackItem({item, handleDelete}) {


  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={()=>handleDelete(item.id)}>
            <FaTimes />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item :propTypes.object.isRequired,
    handleDelete: propTypes.func.isRequired
}
export default FeedbackItem