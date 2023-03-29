import { SvgProps } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

import { BoxStatus, boxStatus, ContainerProps } from '@styles/global';

import LeftArrow from '@assets/left-arrow.svg'

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;

  ${({ status = 'neutral' }) => css`
    background-color: ${boxStatus[status]};
  `};
`

export const Header = styled.View<ContainerProps>`
  padding: 34px 24px;

  ${({ status = 'neutral' }) => css`
    background-color: ${boxStatus[status]};
  `};
`

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
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 34px 24px 0;

  ${({ theme }) => css`
    background-color: ${theme.colors['gray-700']};
  `};
`

export const Heading = styled.Text`
  line-height: 18px;
  text-align: center;
  margin-bottom: 23px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors['gray-100']};
  `};
`

type BoxProps = {
  status?: BoxStatus
  fullWidth?: boolean
}

export const Box = styled.View<BoxProps>`
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;

  ${({ status = 'neutral', fullWidth = true }) => css`
    width: ${fullWidth ? '100%' : '167px'};
    background-color: ${boxStatus[status]};
  `};
`

export const BoxTitle = styled.Text`
  line-height: 31px;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.xl}px;
    color: ${theme.colors['gray-100']};
  `};
`

export const BoxDescription = styled.Text`
  line-height: 18px;
  text-align: center;
  margin-top: 8px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors['gray-200']};
  `};
`

const arrowStatus = {
  neutral: 'gray',
  success: 'green',
  fail: 'red',
} as const

type LeftArrowButtonProps = SvgProps & {
  status?: keyof typeof arrowStatus
};

export function LeftArrowButton({ status = 'neutral', ...rest }: LeftArrowButtonProps) {
  return <LeftArrow {...rest} stroke={arrowStatus[status]} />
}

export const StatusBar = styled.StatusBar.attrs<ContainerProps>(({ status = 'neutral' }) => ({
  backgroundColor: boxStatus[status],
}))``
