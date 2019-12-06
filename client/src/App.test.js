import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />)
});

test('Test that players title is rendered to the screen', () => {
  const {getByTestId} = render(<App />);

  getByTestId('title');
});

test('Test that dark mode button is rendered to the screen', () => {
  const {getByTestId} = render(<App />);

  getByTestId('darkModeButton');
})

test('Test that tight mode button is rendered to the screen', () => {
  const {getByTestId} = render(<App />);

  getByTestId('tightModeButton');
})

// do stretch then see about other tests... make the stretch hook use a function that I can do unit testing on