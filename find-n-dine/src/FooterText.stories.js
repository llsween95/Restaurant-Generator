
import React from 'react';
import { storiesOf } from '@storybook/react';

import FooterText from './FooterText';

storiesOf('FooterText', module)
  .add('Primary2', () => <p label="Primary1">Luke Sweeney 2020</p>)
  .add('Secondary', () => <p label="Secondary">Yelp API</p>)