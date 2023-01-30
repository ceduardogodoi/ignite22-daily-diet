import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  padding: 16px;

  ${({ theme }) => css`
    background-color: ${theme.colors['gray-600']};
    border-color: ${theme.colors['gray-600']};
  `}
`

export type YesNo = 'yes' | 'no'

type DotProps = {
  type: YesNo
}

export const Dot = styled.View<DotProps>`
  border-radius: 9999px;
  height: 8px;
  margin-right: 8px;
  width: 8px;

  ${({ theme, type }) => css`
    background-color: ${type === 'yes' ? theme.colors['green-dark'] : theme.colors['red-dark']};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-100']};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm}px;
    line-height: ${theme.lineHeight};
  `}
`