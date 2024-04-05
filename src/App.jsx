import { useEffect, useState } from 'react';
import Description from './components/Description';
import Options from './components/Options'
import Notification from './components/Notification ';
import Feedback from './components/FeedBack';
import './App.css';

function App() {
// const [feedbackCounts, setFeedbackCounts] = useState(() => {
//   const savedFeedbackCounts = JSON.parse(localStorage.getItem("savedFeedbackCounts")) ?? {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }
//   if (savedFeedbackCounts !== null) {
//     return savedFeedbackCounts;
//   }
//   return {};
// });

const [feedbackCounts, setFeedbackCounts] = useState(() => {
  const savedFeedbackCounts = localStorage.getItem("savedFeedbackCounts");
  if (savedFeedbackCounts !== null) {
    return JSON.parse(savedFeedbackCounts);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0
  };
});
  
useEffect(() => {
  window.localStorage.setItem("savedFeedbackCounts", JSON.stringify(feedbackCounts));
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

const totalFeedback = feedbackCounts ? feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad : 0;
const positivePercentage = totalFeedback > 0 ? Math.round((feedbackCounts.good / totalFeedback) * 100) : 0;

  
return (
  <div className="App">
    <Description />
    <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
    {totalFeedback === 0 ? <Notification /> : null}
    {totalFeedback > 0 ? <Feedback feedbackCounts={feedbackCounts} totalFeedback={totalFeedback} positivePercentage={positivePercentage} /> : null}
 </div>
 );
}

export default App;