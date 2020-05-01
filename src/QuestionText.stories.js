import React from 'react';
import { storiesOf } from '@storybook/react';

import QuestionText from './QuestionText';

const style = {
  fontSize: '1.2ren'
}

storiesOf('QuestionText', module)
  .add('Choose category:', () => <QuestionText style={style} label='Choose category:' />)
  .add('Select a price range:', () => <QuestionText style={style} label='Select a price range:' />)
  .add('Share your location:', () => <QuestionText style={style} label='Share your location:' />)
