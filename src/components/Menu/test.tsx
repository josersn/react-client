import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('Should have a action to open or close the menu', () => {
    renderWithTheme(<Menu />)

    const fullMenu = screen.getByRole('navigation', { hidden: true })

    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenu.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenu).toHaveStyle({ opacity: 1 })
    expect(screen.getByLabelText(/close Menu/i)).toBeInTheDocument()

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle({ opacity: 0 })
  })

  it('Should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument()
    expect(screen.queryByText(/My account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
  })

  it('Should show full menu ox when login', () => {
    renderWithTheme(<Menu username="jose" />)

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign Up/i)).not.toBeInTheDocument()

    expect(screen.getByText(/My account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
  })
})
