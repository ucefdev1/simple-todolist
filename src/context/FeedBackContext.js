import { v4 as uuidv4 } from 'uuid';
import { createContext, useEffect, useState } from "react";

const FeedBackContext = createContext();

export const FeedBackprovider = ({ children }) => {
    const [feedback, setFeedback] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // fetch data from API
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await fetch('/feedback');
        const data = await res.json();
        setFeedback(data);
        setIsLoading(false);
    };

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    // edit feedback
    const editFeedBack = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        });
    };

    // Update feedback
    const updateFeedBack = async (id, updItem) => {
        const res = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        });

        const data = await res.json();

        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item));
    };

    // Delete feedback
    const deleteFeedBack = async (id) => {
        if (window.confirm('Are you sure to delete feedback number: ' + id)) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            });

            setFeedback(feedback.filter((feed) => feed.id !== id));
        }
    };

    const addFeedback = async (newFeed) => {
        const res = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeed)
        });

        const data = await res.json();
        setFeedback([data, ...feedback]);
    };

    return <FeedBackContext.Provider value={{
        feedback,
        deleteFeedBack,
        addFeedback,
        editFeedBack, // function of feedback edit
        feedbackEdit, // the actual state
        updateFeedBack,
        isLoading
    }}>
        {children}
    </FeedBackContext.Provider>;
};

export default FeedBackContext;
