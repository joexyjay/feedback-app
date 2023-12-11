import {FaTimes} from "react-icons/fa"
import { useContext } from "react"
import propTypes from 'prop-types'
import Card from "./shared/Card"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackItem({item}) {
  const { deleteFeedback } = useContext(FeedbackContext)


  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={()=>deleteFeedback(item.id)}>
            <FaTimes />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item :propTypes.object.isRequired,
}
export default FeedbackItem