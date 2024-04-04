import { useState } from 'react';
import './App.css';
import Description from './components/Description';
import Options from './components/Options'
import Notification from './components/Notification ';
import Feedback from './components/FeedBack';

function App() {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const updateFeedback = (feedbackCount) => {
    setFeedbackCounts(prevState => ({
      ...prevState,
      [feedbackCount]: prevState[feedbackCount] + 1
    }));
  };

    const totalFeedback = feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;


  return (
    <div className="App">
      <Description />
      <Feedback updateFeedback={updateFeedback} />
      <Options feedbackCounts={feedbackCounts} />
      {totalFeedback > 0 ? <Feedback feedbackTypes={feedbackCounts} totalFeedback={totalFeedback} /> : <Notification />}

    </div>
  );
}

export default App;