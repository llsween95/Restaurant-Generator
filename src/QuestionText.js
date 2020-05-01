import React from 'react';

// This is a functional component - just sent up a little differently as an arrow function!
const QuestionText = (props) => (
  <h3 style={props.style}>
    {props.label}
  </h3>
)

export default QuestionText;