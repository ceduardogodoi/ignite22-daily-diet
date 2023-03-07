import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const LayoutContainer = styled(SafeAreaView)`
  flex: 1;
  ${({ theme }) => css`
    background-color: ${theme.colors['gray-700']};
  `};
`

export const HeaderContainer = styled.View`
  padding: 32px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 9999px;

  ${({ theme }) => css`
    border: 2px solid ${theme.colors['gray-200']};
  `};
`