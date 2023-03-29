import styled, { css } from 'styled-components/native'

import { theme } from '@theme'

import { BoxStatus } from '@styles/global'

type DotProps = {
  status?: BoxStatus
}

type ContainerProps = {
  isSelected?: boolean
  status?: BoxStatus
}

type Variants = {
  [key in BoxStatus]: {
    backgroundColor: string
    dotColor: string
    borderColor: string
  }
}

const variants: Variants = {
  success: {
    backgroundColor: theme.colors['green-light'],
    dotColor: theme.colors['green-dark'],
    borderColor: theme.colors['green-dark'],
  },
  fail: {
    backgroundColor: theme.colors['red-light'],
    dotColor: theme.colors['red-dark'],
    borderColor: theme.colors['red-dark'],
  },
  neutral: {
    backgroundColor: theme.colors['gray-600'],
    dotColor: theme.colors['gray-700'],
    borderColor: theme.colors['gray-700'],
  },
} as const

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  border-width: 1px;
  border-style: solid;
  flex-direction: row;
  justify-content: center;
  padding: 16px;
  border-radius: 6px;

  ${({ isSelected, status = 'neutral' }) => css`
    background-color: ${isSelected ? variants[status].backgroundColor : variants.neutral.backgroundColor};
    border-color: ${isSelected ? variants[status].borderColor : variants.neutral.backgroundColor};
  `}
`

export const Dot = styled.View<DotProps>`
  height: 8px;
  margin-right: 8px;
  width: 8px;
  border-radius: 6px;

  ${({ status = 'neutral' }) => css`
    background-color: ${variants[status].dotColor};
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