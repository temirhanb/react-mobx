import axios from 'axios'
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import { App } from "../../../app/App";

jest.mock('axios')


describe('Test router', () => {

  test('wrong routing', () => {
    render(
      <MemoryRouter initialEntries={['/fdafs']}>
        <App/>
      </MemoryRouter>
    )

    expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
  })
})
