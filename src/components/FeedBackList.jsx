import React from 'react'
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'

const FeedBackList = ({feedback,deleteFeedBack}) => {

    // console.log(feedback,'feed back recieved')
    
  return (
   <>
   <div className="feedback-list">
   
    
    <AnimatePresence>
      {
        feedback.length > 0 ? feedback.map((item)=>(
<motion.div key={item.id} 
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
>
<FeedbackItem  key={item.id}   item = {item} 
          handleDelete = {deleteFeedBack}
          />
</motion.div>
      )) : <h1>NOT FEEDBACK TO SHOW</h1>
      }
    </AnimatePresence>
    
   
   </div>
   </>
  )
}

export default FeedBackList