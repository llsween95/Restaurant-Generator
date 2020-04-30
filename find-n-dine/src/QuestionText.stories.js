import React from 'react';
import { storiesOf } from '@storybook/react';

import QuestionText from './QuestionText';

storiesOf('QuestionText', module)
  .add('Q1', () => <h3 label="Q1">Choose a category:</h3>)
  .add('Q2', () => <h3 label="Q2">Select a price range:</h3>)