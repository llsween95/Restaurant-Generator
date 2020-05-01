
import React from 'react';
import { Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Header from './Header';

const style = {
  height: '100px',
  backgroundColor: '#990000',
  color: '#f1f1f1f1',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Indie Flower, cursive'
}

const style2 = {
  paddingLeft: '2%'
}

storiesOf('Header', module)
  .add('Header', () => <header style={style}><h1 style={style2}>Find-N-Dine</h1></header>)