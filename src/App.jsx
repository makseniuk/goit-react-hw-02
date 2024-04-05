import { useEffect, useState } from 'react';
import Description from './components/Description';
import Options from './components/Options'
import Notification from './components/Notification ';
import Feedback from './components/FeedBack';
import './App.css';

function App() {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

useEffect(() => {
    const savedCounts = JSON.parse(window.localStorage.getItem("savedFeedbackCounts"));
    if (savedCounts) {
      setFeedbackCounts(savedCounts);
    }
  }, []);

useEffect(() => {
  window.localStorage.setItem("savedFeedbackCounts", JSON.stringify(feedbackCounts));
}, [feedbackCounts]);

useEffect(() => {
  const handleBeforeUnload = () => {
    window.localStorage.setItem("savedFeedbackCounts", JSON.stringify(feedbackCounts));
  };
  window.addEventListener("beforeunload", handleBeforeUnload);
  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
}, [feedbackCounts]);

const updateFeedback = feedbackCount => {
  setFeedbackCounts(prevState => ({
    ...prevState,
    [feedbackCount]: prevState[feedbackCount] + 1
  }));
};

const resetFeedback = () => {
  setFeedbackCounts({
    good: 0,
    neutral: 0,
    bad: 0
  });
};

const totalFeedback = feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
const positivePercentage = totalFeedback > 0 ? Math.round((feedbackCounts.good / totalFeedback) * 100) : 0;
return (
 <div className="App">
   <Description />
   <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
   {totalFeedback === 0 ? <Notification /> : null}
   {totalFeedback > 0 ? <Feedback feedbackCounts={feedbackCounts} totalFeedback={totalFeedback} /> : null}
    {totalFeedback > 0 && (
     <>
       <p>Positive Feedback Percentage: {positivePercentage}%</p>
     </>
   )}
 </div>
 );
}


export default App;