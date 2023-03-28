import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  line-height: 31px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.xl}px;
    color: ${theme.colors['green-dark']};
  `};
`

export const Description = styled.Text`
  line-height: 21px;
  margin-bottom: 40px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors['gray-100']};
  `};
`

export const Image = styled.Image`
  margin-bottom: 32px;
`
