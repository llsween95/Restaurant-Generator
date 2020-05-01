import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './Footer';

const style = {
  backgroundColor: 'brown',
  height: '8vh',
  color: '#f1f1f1f1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
}

storiesOf('Footer', module)
  .add('Footer', () => <Footer style={style} label="Footer" />)
