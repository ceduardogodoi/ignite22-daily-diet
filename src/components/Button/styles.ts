import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  border-radius: 6px;
  padding: 16px 24px;

  ${({ theme }) => css`
    background-color: ${theme.colors['gray-200']};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm}px;
  `}
`
