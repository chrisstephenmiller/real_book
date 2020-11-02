import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('app components render', () => {
  const { getByText } = render(<App />)
  const login = getByText('login')
  expect(real_book).toBeInTheDocument()
})