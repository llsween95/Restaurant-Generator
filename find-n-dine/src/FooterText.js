import React from 'react';
import Footer from './Footer';

// This is a functional component - just sent up a little differently as an arrow function!
const FooterText = (props) => (
  <p>
    {props.label}
  </p>
)

export default FooterText;