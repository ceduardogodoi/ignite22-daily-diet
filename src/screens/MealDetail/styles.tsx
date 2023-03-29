import { Dimensions } from 'react-native';
import { SvgProps } from 'react-native-svg';
import styled, { css } from 'styled-components/native'

import { boxStatus, ContainerProps } from '@styles/global'

import LeftArrow from '@assets/left-arrow.svg'
import { Select } from '@components/Select';

const { height } = Dimensions.get('window');

export const Container = styled.View<ContainerProps>`
  flex: 1;
  padding-top: 30px;
  min-height: ${height}px;

  ${({ status = 'neutral' }) => css`
    background-color: ${boxStatus[status]};
  `};
`

export const Header = styled.View<ContainerProps>`
  padding: 34px 24px;
  flex-direction: row;

  ${({ status = 'neutral' }) => css`
    background-color: ${boxStatus[status]};
  `};
`

export const TitleContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  line-height: 23px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.lg}px;
    color: ${theme.colors['gray-100']};
  `};
`

export const MainContent = styled.View`
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 24px 28px;

  ${({ theme }) => css`
    background-color: ${theme.colors['gray-700']};
  `};
`

export const MealName = styled.Text`
  line-height: 26px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.lg}px;
    color: ${theme.colors['gray-100']};
  `};
`

export const MealDescription = styled.Text`
  line-height: 21px;
  margin-bottom: 24px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors['gray-200']};
  `};
`

export const DateAndTime = styled.Text`
  line-height: 18px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors['gray-100']};
  `};
`

export const DateAndTimeText = styled.Text`
  line-height: 21px;
  margin-bottom: 24px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors['gray-200']};
  `};
`

export const Tag = styled(Select)`
  padding: 8px 16px;
  border-radius: 9999px;
  align-self: flex-start;
`

export const ActionsContainer = styled.View`
  margin-top: auto;
  min-height: 108px;
  justify-content: space-between;
`

export const LeftArrowButtonContainer = styled.TouchableOpacity`
  background-color: transparent;
`

const arrowStatus = {
  neutral: 'gray',
  success: 'green',
  fail: 'red',
} as const

type LeftArrowButtonProps = SvgProps & {
  status?: keyof typeof arrowStatus
}

export function LeftArrowButton({ status = 'neutral', ...rest }: LeftArrowButtonProps) {
  return <LeftArrow {...rest} stroke={arrowStatus[status]} />
}
