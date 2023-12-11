import {createContext, useState} from 'react';
import propTypes from 'prop-types';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'This item is from context',
        rating: 10
    }]);

    return (
        <FeedbackContext.Provider value={{feedback, setFeedback}}>
            {children}
        </FeedbackContext.Provider>
    );
};

FeedbackProvider.propTypes = {
    children: propTypes.node.isRequired
};

export default FeedbackContext;