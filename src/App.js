import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedBackData';
import FeedBackList from './components/FeedBackList';
import FeedbackNumbers from './components/FeedbackNumbers';
import FeedBackForm from './components/FeedBackForm';
import {v4 as uuidv4} from 'uuid'
import AboutPage from './pages/aboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIcon from './components/AboutIcon';

const App = () => {
  const [Feedback, setFeedback] = useState(FeedbackData); 
  
  const deleteFeedBack = (id) => {
    if(window.confirm('are you sure to delete feedback number: '+ id)){
      setFeedback( Feedback.filter(
        (feed) => feed.id !== id
      ) )
    }
  }

  const handleAddFeedback = (newFeed) => {
  
    newFeed.id = uuidv4()
    setFeedback([newFeed,...Feedback])
    }

  return (
    <Router>
      <Header />
      <div className="container"> 
    <Routes>
    <Route path='/' element={
      <>
              <FeedBackForm addFeedback={handleAddFeedback}></FeedBackForm>
      <FeedbackNumbers feedback={Feedback}></FeedbackNumbers>
        <FeedBackList feedback={Feedback} deleteFeedBack={deleteFeedBack} /> 

      </>
    }>

        </Route>
        <Route path='/about' element={<AboutPage/>}/>
    </Routes>
      </div>
      <AboutIcon/>
    </Router>
  );
};




export default App;
