import styled, { css } from 'styled-components/native'

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
