import {motion, AnimatePresence} from "framer-motion"
import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import Spinner from "./shared/Spinner"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackList() {
   const { feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length == 0)) return (<div>No feedback to display</div>)

  return isLoading ? (<Spinner />) : (
    <div className="feedback-list">
        <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <FeedbackItem key={item.id} item={item} />
                </motion.div>
            ))}
        </AnimatePresence>
    </div>
    // <div className="feedback-list">
    //     {feedback.map((item) => (
    //         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    //     ))}
    // </div>
  )
}


export default FeedbackList