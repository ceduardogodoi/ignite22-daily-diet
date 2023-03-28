import styled, { css } from 'styled-components/native'

import { theme } from '@theme'

const variants = {
  good: {
    color: theme.colors['green-dark'],
  },
  bad: {
    color: theme.colors['red-dark'],
  },
}

type Variant = {
  variant?: keyof typeof variants
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text<Variant>`
  line-height: 31px;
  margin-bottom: 8px;

  ${({ theme, variant = 'bad' }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.xl}px;
    color: ${variants[variant].color};
  `};
`

export const Highlight = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors['gray-100']};
  `};
`

export const Description = styled.Text`
  line-height: 21px;
  margin-bottom: 40px;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors['gray-100']};
  `};
`

export const Image = styled.Image`
  margin-bottom: 32px;
`
