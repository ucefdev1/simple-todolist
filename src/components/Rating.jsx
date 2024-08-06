import { useState, useContext, useEffect } from "react";
import FeedBackContext from '../context/FeedBackContext'

const Rating = ({select}) => {
    const [selected, setSelected] = useState();
    const { feedbackEdit } = useContext(FeedBackContext)

    useEffect(()=>{ 
      if(feedbackEdit.edit === true){
          setSelected((feedbackEdit.item.rating))
      }
  }
,[feedbackEdit])

  
    const handleChange = (event) => {
        const value = parseInt(event.target.value);
        setSelected(value);
        select(value);

      };
  
    const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  return (
    <ul className="rating">
          {ratings.map((rating) => (
        <li key={rating}>
          <input
            type="radio"
            id={`num${rating}`}
            name="rating"
            value={rating}
            onChange={handleChange}
            checked={selected === rating}
          />
          <label htmlFor={`num${rating}`}>{rating}</label>
        </li>
      ))}
    </ul>
  )
}

export default Rating