import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'
import FeedBackContext from '../context/FeedBackContext'


const FeedBackList = () => {

    const {feedback} = useContext(FeedBackContext)
    
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
<FeedbackItem  key={item.id}   item = {item} />
</motion.div>
      )) : <h1>NOT FEEDBACK TO SHOW</h1>
      }
    </AnimatePresence>
    
   
   </div>
   </>
  )
}

export default FeedBackList