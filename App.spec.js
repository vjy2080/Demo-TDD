import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  describe('clicking send', () => {
    it('clears the message field', () => {
      render(<App />);

      fireEvent.changeText(screen.getByPlaceholderText('Message'), 'Hello world');
      fireEvent.press(screen.getByText('Send'));

      expect(screen.getByPlaceholderText('Message')).toHaveProp('value', '');
    });
  });
});