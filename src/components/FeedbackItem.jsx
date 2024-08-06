import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card"
import { useContext } from 'react'
import FeedBackContext from '../context/FeedBackContext'



const FeedbackItem = ({item}) => {
  const {deleteFeedBack} = useContext(FeedBackContext)

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>(deleteFeedBack(item.id))} className='close'>
          <FaTimes color='purple'></FaTimes>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem