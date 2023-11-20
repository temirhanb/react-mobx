import axios from 'axios'
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import { App } from "../../../app/App";
import { userEvent } from "@testing-library/user-event";

jest.mock('axios')


describe('Test router', () => {

  test('page routing',  () => {
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
    const peoplesPageLink = screen.getByTestId('link-peoples')
    const favoritesPageLink = screen.getByTestId('link-favorites')
    userEvent.click(favoritesPageLink)
    expect(screen.getByTestId('favorite-page')).toBeInTheDocument()
    userEvent.click(peoplesPageLink)
    expect(screen.getByTestId('peoples-page')).toBeInTheDocument()
  })
})
