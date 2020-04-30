import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './Footer';

const style = {
  backgroundColor: 'brown',
  height: '8vh'
}

storiesOf('Footer', module)
  .add('Footer', () => <Footer style={style} label="Footer" />)
