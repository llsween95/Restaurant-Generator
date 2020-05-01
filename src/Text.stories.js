import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from './Text';

const style = {
  fontSize: '1.2rem',
  fontFamily: 'Montserrat, sans-serif;',
  color: 'grey'
}

storiesOf('Text', module)
  .add('Luke Sweeney 2020', () => <p style={style} label="Luke Sweeney 2020">Luke Sweeney 2020</p>)
  .add('Yelp API', () => <p style={style} label="Yelp API">Yelp API</p>)