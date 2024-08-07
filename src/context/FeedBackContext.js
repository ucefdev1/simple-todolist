import {v4 as uuidv4} from 'uuid';
import { createContext, useState } from "react";
const FeedBackContext = createContext();




export const FeedBackprovider = ({children}) =>{
    const [feedback,setFeedback] = useState(
        [
            {
                id:1,
                text: 'This is item 1',
                rating: 10
            },            {
                id:2,
                text: 'This is item 2',
                rating: 10
            },            {
                id:3,
                text: 'This is item 3',
                rating: 10
            },            {
                id:4,
                text: 'This is item 4',
                rating: 10
            },            {
                id:5,
                text: 'This is item 5',
                rating: 10
            },
        ]
    )


    const [feedbackEdit, setFeedbackEdit] = useState(
        {
            item: {},
            edit: false
        }
    )


    // edit feedback
    const editFeedBack = (item) =>{
        setFeedbackEdit(
             {
             item: item,
             edit: true
             }
        )
    }

    // Update feedback
    const updateFeedBack = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item));
    };


    const deleteFeedBack = (id) => {
        
        if(window.confirm('are you sure to delete feedback number: '+ id)){
          setFeedback( feedback.filter(
            (feed) => feed.id !== id
          ) )
        }
      }


      const addFeedback = (newFeed) => {
  
        newFeed.id = uuidv4()
        setFeedback([newFeed,...feedback])
        }


return <FeedBackContext.Provider value={{
    feedback,
    deleteFeedBack,
    addFeedback,
    editFeedBack, // function of feedback edit
    feedbackEdit,// the actual state
    updateFeedBack

}}>
    {children}
</FeedBackContext.Provider>
}

export default FeedBackContext