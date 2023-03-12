import styled, { css } from 'styled-components/native'

export const Container = styled.View<{ fullWidth: boolean }>`
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm}px;
    line-height: 18px;
    color: ${theme.colors['gray-200']};
  `}
`;

export const CustomTextInput = styled.TextInput`
  border-radius: 6px;

  ${({ theme }) => css`
    padding: 14px;
    border: 1px solid ${theme.colors['gray-500']};
    font-size: ${theme.fontSizes.md}px;
    line-height: 21px;
    color: ${theme.colors['gray-100']};
  `};
`;