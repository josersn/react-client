import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size button by default ', () => {
    const { container } = renderWithTheme(<Button>Buy Now!</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size button ', () => {
    renderWithTheme(<Button size="small">Buy Now!</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size button ', () => {
    renderWithTheme(<Button size="large">Buy Now!</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render the full size button ', () => {
    renderWithTheme(<Button fullWidth>Buy Now!</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render the button with icon  ', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now!</Button>
    )
    expect(screen.getByText(/buy now!/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
