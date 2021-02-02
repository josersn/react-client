import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a Black heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white heading by alternative', () => {
    renderWithTheme(<Heading color="white">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a heading  border in the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading  border in the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.4rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('Should render a heading to footer ', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)

    expect(
      screen.getByRole('heading', { name: /won games/i })
    ).toHaveStyleRule({ 'font-size': '1.6rem' })
  })
})
