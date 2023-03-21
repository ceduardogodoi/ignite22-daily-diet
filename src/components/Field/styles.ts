import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  height: 100px;
`

export const Label = styled.Text`
  line-height: 18px;
  margin-bottom: 4px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors['gray-200']};
  `};
`

export const Input = styled.TextInput`
  padding: 14px;
  border-radius: 6px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors['gray-500']};
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors['gray-100']};
  `};
`
