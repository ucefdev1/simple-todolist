

const calculateAverage = (feed) => {
    if (feed.length === 0) return 0; // Avoid division by zero
    let total = 0;
    let finalAv;
    feed.forEach(item => { 
        total += item.rating;
    });
    finalAv = total / feed.length;
    return finalAv.toFixed(1);
};

const FeedbackNumbers = ({feedback}) => {
    console.log(feedback)
  return (
    <div className="feedback-stats">
        <h4>{ feedback.length === 1 ? 'Review: '+ feedback.length : feedback.length === 0 ? 'No reviews to show ' : 'Reviews: '+ feedback.length}</h4>
        <h4>{ calculateAverage(feedback) !==0 &&'Averge rating : ' + calculateAverage(feedback)  }</h4>
    </div>
  )
}

export default FeedbackNumbers