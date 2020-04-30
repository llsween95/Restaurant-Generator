import React from 'react';

// This is a functional component - just sent up a little differently as an arrow function!
const Text = (props) => (
  <p>
    {props.label}
  </p>
)

export default Text;