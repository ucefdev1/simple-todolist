import { FaEdit, FaTimes } from 'react-icons/fa'
import Card from "./shared/Card"
import { useContext, useEffect } from 'react'
import FeedBackContext from '../context/FeedBackContext'



const FeedbackItem = ({item}) => {
  const {deleteFeedBack, editFeedBack} = useContext(FeedBackContext)
 
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>(deleteFeedBack(item.id))} className='close'>
          <FaTimes color='purple'></FaTimes>
        </button>
        <button onClick={()=>(editFeedBack(item))}  className='edit'>
          <FaEdit color='purple'></FaEdit>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem