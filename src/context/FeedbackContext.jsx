import { v4 as uuidv4 } from "uuid"
import {createContext, useState} from 'react';
import propTypes from 'prop-types';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'First item from context',
        rating: 10
    },
    {
        id: 2,
        text: 'Second item from context',
        rating: 7
    },
    {
        id: 3,
        text: 'Third item from context',
        rating: 9
    }
]);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }

    const deleteFeedback = (id) => {
        window.confirm("Are you sure you want to delete this feedback?") &&
          setFeedback(feedback.filter((item) => item.id !== id))
      }

    return (
        <FeedbackContext.Provider value={{
            feedback, 
            setFeedback,
            deleteFeedback,
            addFeedback}}>
            {children}
        </FeedbackContext.Provider>
    );
};

FeedbackProvider.propTypes = {
    children: propTypes.node.isRequired
};

export default FeedbackContext;