import { Dimensions } from 'react-native'
import { SvgProps } from 'react-native-svg'
import styled, { css } from 'styled-components/native'

import { boxStatus, ContainerProps } from '@styles/global'

import LeftArrow from '@assets/left-arrow.svg'

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
  padding: 40px 24px 0;

  ${({ theme }) => css`
    background-color: ${theme.colors['gray-700']};
  `};
`

const arrowStatus = {
  neutral: 'gray',
  success: 'green',
  fail: 'red',
} as const

type LeftArrowButtonProps = SvgProps & {
  status?: keyof typeof arrowStatus
}

export const LeftArrowButtonContainer = styled.TouchableOpacity`
  background-color: transparent;
  z-index: 1;
`

export function LeftArrowButton({ status = 'neutral', ...rest }: LeftArrowButtonProps) {
  return <LeftArrow {...rest} stroke={arrowStatus[status]} />
}

export const DateTimeContainer = styled.View`
  flex-direction: row;
  width: 100%;
`

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Option = styled.View`
  min-width: 160px;
`

export const CreateMealButtonContainer = styled.View`
  margin-top: auto;
  margin-bottom: 30px;
`;

export const Separator = styled.View`
  width: 20px;
`
