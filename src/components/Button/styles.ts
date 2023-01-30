import styled, { css } from 'styled-components/native'

import { Icon as IconComponent } from './components/Icon'

export const Container = styled.TouchableOpacity`
  border-radius: 6px;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors['gray-200']};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm}px;
    line-height: ${theme.lineHeight.default}px;
  `}
`

export const Icon = styled(IconComponent).attrs(({ theme }) => ({
  color: theme.colors.white,
}))`
  margin-right: 12px;
`
