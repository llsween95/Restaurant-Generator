import React from 'react'
import Text from './Text'

export default function Footer(props) {
  return (
    <footer style={props.style}>
      <Text label="Luke Sweeney 2020" />
      <Text label="Yelp API" />
    </footer>
  )
}
