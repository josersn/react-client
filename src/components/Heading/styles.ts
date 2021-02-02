import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const wrapperModify = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.4rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size }) => css`
    // base css
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors[color!]};

    //modifiers
    ${!!size && wrapperModify[size](theme)}
    ${lineLeft && wrapperModify.lineLeft(theme)}
    ${lineBottom && wrapperModify.lineBottom(theme)}

    //queries css
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}; 
    `};
  `}
`
