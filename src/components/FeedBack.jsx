const Feedback = ({ feedbackCounts, totalFeedback, positivePercentage }) => {
  return (
    <>
      <p>Good: {feedbackCounts.good}</p>
      <p>Neutral: {feedbackCounts.neutral}</p>
      <p>Bad: {feedbackCounts.bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive Feedback Percentage: {positivePercentage}%</p>
    </>
  );
};

export default Feedback;