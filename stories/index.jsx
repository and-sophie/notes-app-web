import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Hello from '../src/components/hello';
import Heading from '../src/components/common/Text';

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}><span role="img" aria-label="goat">🐐</span><span role="img" aria-label="octopus">🐙</span></button>
  ));

storiesOf('Hello', module)
  .add('default', () => (
    <Hello />
  ));

storiesOf('Heading', module)
  .add('blue text', () => (
    <Heading>I love emojis</Heading>
  ));
