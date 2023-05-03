import styled, { css } from 'styled-components/native'

import { theme } from '@theme'
import { BoxStatus } from '@styles/global'

type ContainerProps = {
  status?: Exclude<BoxStatus, 'neutral'>
}

type Variants = {
  [key in Exclude<BoxStatus, 'neutral'>]: {
    backgroundColor: string
  }
}

const variants: Variants = {
  success: {
    backgroundColor: theme.colors['green-light'],
  },
  fail: {
    backgroundColor: theme.colors['red-light'],
  },
} as const

export const Container = styled.View<ContainerProps>`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 32px auto 0;
  padding: 20px 16px;
  border-radius: 6px;
  
  ${({ status = 'success' }) => css`
    background-color: ${variants[status].backgroundColor};
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
