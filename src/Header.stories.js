
import React from 'react';
import { Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router'

import Header from './Header';

const style = {
  height: '100px',
  backgroundColor: '#990000',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Indie Flower, cursive',
  textDecoration: 'none',
  fontSize: '1rem',
  width: '100%',
  color: '#f1f1f1'
}

const style2 = {
  paddingLeft: '2%'
}

storiesOf('Header', module)
  .addDecorator(StoryRouter())
  .add('Header', () => <Header style={style} />)
