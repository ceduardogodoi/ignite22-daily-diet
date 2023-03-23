import styled, { css } from 'styled-components/native'

export const Label = styled.Text`
  line-height: 18px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors['gray-200']};
  `};
`
