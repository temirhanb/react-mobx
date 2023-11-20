import React from 'react';
import { render, screen } from "@testing-library/react";
import { MainPage } from "../../../pages";

test('react', () => {
  render(<MainPage/>)

  const count = screen.getByText(/Favorite count/i);
  expect(count).toBeInTheDocument()
})
