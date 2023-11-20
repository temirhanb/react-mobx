import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import { MainPage } from "../../../pages";

describe('Base test react app', () => {
  test('simple component test react', () => {
    render(<MainPage/>)

    const count = screen.getByText(/Favorite count/i);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/test text/i);
    expect(count).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })
  test('test react async component', async () => {
    render(<MainPage/>)

    const hello = await screen.findByText(/hi/i);
    expect(hello).toBeInTheDocument()
  })
  test('test react toggle switch', async () => {
    render(<MainPage/>)

    const button = screen.getByTestId('test-button');

    expect(screen.queryByTestId('test-toggle')).toBeNull()
    fireEvent.click(button)
    expect(screen.queryByTestId('test-toggle')).toBeInTheDocument()
    fireEvent.click(button)
    expect(screen.queryByTestId('test-toggle')).toBeNull()
  })
  test('test react input event', async () => {
    render(<MainPage/>)

    const input = screen.getByPlaceholderText(/test text/i);

    expect(screen.getByTestId('test-value')).toContainHTML('')
    fireEvent.input(input, {
      target: {value: 'hello world'}
    })
    expect(screen.getByTestId('test-value')).toContainHTML('hello world')
  })
})
