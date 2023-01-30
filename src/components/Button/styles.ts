import styled, { css } from 'styled-components/native'

import { Icon as IconComponent } from './components/Icon'

import { theme } from '@theme'

export type Variant = 'solid' | 'outline'

type Variants = Record<Variant, { [key: string]: string }>

const variants: Variants = {
  solid: {
    'background-color': theme.colors['gray-200'],
    color: theme.colors.white,
    'border-color': theme.colors['gray-200'],
  },
  outline: {
    'background-color': theme.colors.white,
    color: theme.colors['gray-100'],
    'border-color': theme.colors['gray-100'],
  },
}

type Props = {
  variant: Variant
}

export const Container = styled.TouchableOpacity<Props>`
  border-radius: 6px;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ variant }) => css`
    background-color: ${variants[variant]['background-color']};
    border-color: ${variants[variant]['border-color']};
    border-style: solid;
    border-width: 1px;
  `}
`

export const Title = styled.Text<Props>`
  ${({ variant }) => css`
    color: ${variants[variant].color};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm}px;
    line-height: ${theme.lineHeight.default}px;
  `}
`

export const Icon = styled(IconComponent).attrs(({ variant = 'solid' }) => ({
  color: variants[variant].color,
}))`
  margin-right: 12px;
`