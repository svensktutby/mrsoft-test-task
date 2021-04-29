import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders main link', () => {
  render(<App />);
  const element = screen.getByText(/масштабные решения/i);
  expect(element).toBeInTheDocument();
});
