import styled, { css } from 'styled-components/native'

import { theme } from '@theme'

export const Container = styled.View`
  padding: 14px 16px 14px 12px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  border-radius: 6px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors['gray-500']};
  `};
`

export const TimeContainer = styled.View`
  padding-right: 12px;

  border-right-width: 1px;
  border-right-style: solid;

  ${({ theme }) => css`
    border-right-color: ${theme.colors['gray-400']};
  `};
`;

export const Time = styled.Text`
  line-height: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.xs}px;
    color: ${theme.colors['gray-100']};
  `};
`

export const MealContainer = styled.Text`
  padding-left: 12px;
  flex: 1;
`

export const Meal = styled.Text`
  line-height: 21px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors['gray-200']};
  `};
`

const statusColor = {
  bad: theme.colors['red-mid'],
  good: theme.colors['green-mid'],
}

type StatusType = {
  status: keyof typeof statusColor
}

export const Status = styled.View<StatusType>`
  width: 14px;
  height: 14px;
  border-radius: 9999px;
  
  ${({ status }) => css`
    background-color: ${statusColor[status]};
  `};
`
