import Card from './shared/Card'
import { useContext, useState, useEffect } from 'react'
import Button from './Button'
import Rating from './Rating'
import FeedBackContext from '../context/FeedBackContext'





const FeedBackForm = () => {

    const { addFeedback, feedbackEdit,updateFeedBack } = useContext(FeedBackContext)

    useEffect(()=>{ 
            if(feedbackEdit.edit === true){
                setText(feedbackEdit.item.text)
                setRating(feedbackEdit.item.rating)
                setDisabled(false)
            }
        }
    ,[feedbackEdit])

    const [text,setText] = useState('')
    const [msg,setMsg] = useState('')
    const [disabled,setDisabled] = useState(true)
    const [rating,setRating] = useState(0)
    const handleTextChange = (e) =>{
        setText(e.target.value);
        if(text.length < 8){
            setMsg('Must Type At least 8 lettres')
            setDisabled(true)
        }
        else{
            setMsg('')
            setDisabled(false)
        }
        console.log(text)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFeed =  {
            text,
            rating
        }

        if(feedbackEdit.edit === true){
            updateFeedBack(feedbackEdit.item.id,newFeed)
        }else
        {
            addFeedback(newFeed)
        }
       

    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <Rating select={(v)=>setRating(v)}></Rating>
            <h3>Add Your Feedback</h3>
            <div className="input-group">
            <input onChange={handleTextChange} type="text" value={text} placeholder='Write your review'/>
            <Button type={'submit'} isDisabled={disabled}>Send</Button>
            </div>
            <h5>{msg}</h5>
        </form>
    </Card>
  )
}

export default FeedBackForm