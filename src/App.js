import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedBackData';
import FeedBackList from './components/FeedBackList';
import FeedbackNumbers from './components/FeedbackNumbers';
import FeedBackForm from './components/FeedBackForm';
import AboutPage from './pages/aboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIcon from './components/AboutIcon';
import { FeedBackprovider } from './context/FeedBackContext';

const App = () => {
  const [Feedback, setFeedback] = useState(FeedbackData); 
  


 

  return (
    <FeedBackprovider>
      <Router>
      <Header />
      <div className="container"> 
    <Routes>
    <Route path='/' element={
      <>
              <FeedBackForm ></FeedBackForm>
      <FeedbackNumbers ></FeedbackNumbers>
        <FeedBackList  /> 

      </>
    }>

        </Route>
        <Route path='/about' element={<AboutPage/>}/>
    </Routes>
      </div>
      <AboutIcon/>
    </Router>
    </FeedBackprovider>
  );
};




export default App;
