import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 32px auto 0;
  padding: 20px 16px;
  border-radius: 8px;

  ${({ theme }) => css`
    background-color: ${theme.colors['green-light']};
  `};
`

export const Percentage = styled.Text`
  line-height: 42px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.xxl}px;
    color: ${theme.colors['gray-100']};
  `};
`

export const Description = styled.Text`
  line-height: 18px;
  
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors['gray-200']};
  `};
`

export const OpenIcon = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
`
