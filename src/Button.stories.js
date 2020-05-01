
import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

const style = {
  width: '250px',
  padding: '10% 0',
  margin: '1%',
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)'
}

storiesOf('Button', module)
  .add('American', () => <Button style={style} label="American" />)
  .add('Asian', () => <Button style={style} label="Asian" />)
  .add('Italian', () => <Button style={style} label="Italian" />)
  .add('Mediterranian', () => <Button style={style} label="Mediterranian" />)
  .add('Healthy', () => <Button style={style} label="Healthy" />)