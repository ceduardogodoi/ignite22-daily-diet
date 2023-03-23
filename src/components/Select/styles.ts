import styled, { css } from 'styled-components/native'

import { theme } from '@theme'

export type YesNo = 'yes' | 'no'

type DotProps = {
  type: YesNo
}

type ContainerProps = {
  isSelected?: boolean
}

type Variants = {
  [key in YesNo]: {
    backgroundColor: string,
    borderColor: string,
  }
}

const variants: Variants = {
  yes: {
    backgroundColor: theme.colors['green-light'],
    borderColor: theme.colors['green-dark'],
  },
  no: {
    backgroundColor: theme.colors['red-light'],
    borderColor: theme.colors['red-dark'],
  },
} as const

export const Container = styled.TouchableOpacity<ContainerProps & DotProps>`
  align-items: center;
  border-width: 1px;
  border-style: solid;
  flex-direction: row;
  justify-content: center;
  padding: 16px;
  border-radius: 6px;

  ${({ theme, isSelected, type }) => css`
    background-color: ${isSelected ? variants[type].backgroundColor : theme.colors['gray-600']};
    border-color: ${isSelected ? variants[type].borderColor : theme.colors['gray-600']};
  `}
`

export const Dot = styled.View<DotProps>`
  height: 8px;
  margin-right: 8px;
  width: 8px;
  border-radius: 6px;

  ${({ theme, type }) => css`
    background-color: ${type === 'yes' ? theme.colors['green-dark'] : theme.colors['red-dark']};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-100']};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm}px;
    line-height: 18px;
  `}
`