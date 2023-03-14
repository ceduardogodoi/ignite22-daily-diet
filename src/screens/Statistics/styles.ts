import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.colors['green-light']};
  `};
`

export const Header = styled.View`
  padding: 34px 24px;

  ${({ theme }) => css`
    background-color: ${theme.colors['green-light']};
  `};
`

export const BackButton = styled.TouchableOpacity``

export const Percentage = styled.Text`
  line-height: 42px;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.xxl}px;
    color: ${theme.colors['gray-100']};
  `};
`

export const Description = styled.Text`
  line-height: 18px;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors['gray-200']};
  `};
`

export const MainContent = styled.View`
  flex: 1;
  border-radius: 20px;
  padding: 34px 24px 0;

  ${({ theme }) => css`
    background-color: ${theme.colors['gray-700']};
  `};
`

export const Heading = styled.Text``

export const Box = styled.View``

export const BoxTitle = styled.Text``

export const BoxDescription = styled.Text``
