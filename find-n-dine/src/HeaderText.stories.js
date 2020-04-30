
import React from 'react';
import { storiesOf } from '@storybook/react';

import HeaderText from './HeaderText';

storiesOf('HeaderText', module)
  .add('HeaderText', () => <h1 onClick={() => { this.props.onClick() }}>Find-N-Dine</h1>)