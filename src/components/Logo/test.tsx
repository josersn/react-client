import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the white label by default', () => {
    //render component "render"
    //selecionar o elemento de teste "screen" (queries)
    //expect "assertion"
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render the black label when color is passed', () => {
    //render component "render"
    //selecionar o elemento de teste "screen" (queries)
    //expect "assertion"
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
})
