import styled, { css } from 'styled-components/native'

export const DropShadow = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 0 24px;
`

export const Container = styled.View`
  padding: 40px 24px 24px;
  border-radius: 8px;
  width: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors['gray-700']};
  `}
`

export const Description = styled.Text`
  line-height: 23px;
  text-align: center;
  padding-bottom: 32px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.lg}px;
    color: ${theme.colors['gray-200']};
  `}
`

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
