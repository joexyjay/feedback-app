import {createContext, useState, useEffect} from 'react';
import propTypes from 'prop-types';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    //Add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch("http://localhost:5000/feedback", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newFeedback),
        
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
      }

      //Delete feedback
    const deleteFeedback = async (id) => {
        window.confirm("Are you sure you want to delete this feedback?") &&
        await fetch(`http://localhost:5000/feedback/${id}`, {
            method: "DELETE",
        })
          setFeedback(feedback.filter((item) => item.id !== id))
      }

      //Update feedback
    const updateFeedback = async (id, updatedFeedback) => {
        const response = await fetch(`http://localhost:5000/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updatedFeedback),
        })
        const data = await response.json()
        
        
        setFeedback(
          feedback.map((item) => (item.id === id ? { ...item, ...data } : { ...item}))
        )
      }
    
      //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }  

    return (
        <FeedbackContext.Provider value={{
            feedback, 
            feedbackEdit,
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
            }}>
            {children}
        </FeedbackContext.Provider>
    );
};

FeedbackProvider.propTypes = {
    children: propTypes.node.isRequired
};

export default FeedbackContext;