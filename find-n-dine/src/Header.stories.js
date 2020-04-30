
import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header';

const style = {
  height: '100px',
  backgroundColor: 'brown'
}

storiesOf('Header', module)
  .add('Header', () => <header style={style}></header>)