import {v4 as uuidv4} from 'uuid';
import { createContext, useState } from "react";
const FeedBackContext = createContext();




export const FeedBackprovider = ({children}) =>{
    const [feedback,setFeedback] = useState(
        [
            {
                id:1,
                text: 'text from context',
                rating: 10
            }
        ]
    )


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
    addFeedback

}}>
    {children}
</FeedBackContext.Provider>
}

export default FeedBackContext