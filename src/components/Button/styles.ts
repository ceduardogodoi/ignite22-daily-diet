import styled, { css } from 'styled-components/native'

import { Icon as IconComponent } from './components/Icon'

import { theme } from '@theme'

export type Variant = 'solid' | 'outline'

type Variants = Record<Variant, { [key: string]: string }>

export const variants: Variants = {
  solid: {
    backgroundColor: theme.colors['gray-200'],
    color: theme.colors.white,
    borderColor: theme.colors['gray-200'],
    pressedBackground: theme.colors['gray-100'],
  },
  outline: {
    backgroundColor: theme.colors.white,
    color: theme.colors['gray-100'],
    borderColor: theme.colors['gray-100'],
    pressedBackground: theme.colors['gray-500'],
  },
}

type Props = {
  variant: Variant
}

export const Container = styled.Pressable<Props>`
  padding: 16px 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  
  ${({ variant }) => css`
    background-color: ${variants[variant].backgroundColor};
    border-color: ${variants[variant].borderColor};
    border-style: solid;
    border-width: 1px;
  `}
`

export const Title = styled.Text<Props>`
  ${({ variant }) => css`
    color: ${variants[variant].color};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm}px;
    line-height: 18px;
  `}
`

export const Icon = styled(IconComponent).attrs(({ variant = 'solid' }) => ({
  color: variants[variant].color,
}))`
  margin-right: 12px;
`
