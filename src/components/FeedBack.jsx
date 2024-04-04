const Feedback = (feedbackCounts, totalFeedback) => {
    return (
        <>
            <p>Good: {feedbackCounts.good}</p>
            <p>Neutral {feedbackCounts.neutral}</p>
            <p>Bad {feedbackCounts.bad}</p>
            <p>Total feedback: {totalFeedback}</p>
        </>
    )
};

export default Feedback;