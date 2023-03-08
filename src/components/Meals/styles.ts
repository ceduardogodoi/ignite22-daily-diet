import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  margin-top: 40px;
`

export const Header = styled.View`
  margin-bottom: 32px;
`

export const Title = styled.Text`
  margin-bottom: 8px;
  line-height: 21px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors['gray-100']};
  `};
`

export const DayAndMeals = styled.View``

export const Day = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.lg}px;
    color: ${theme.colors['gray-100']};
  `};
`
