import { useRef } from 'react';
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from 'react-native';
import styled, { css, useTheme } from 'styled-components/native';

type InputProps = NativeTextInputProps & {
  fullWidth?: boolean;
  label: string;
};

export function Input({ label, fullWidth = false, ...rest }: InputProps) {
  const textInputRef = useRef<NativeTextInput>(null);
  const theme = useTheme();

  function focusedInput() {
    textInputRef.current?.setNativeProps({
      style: {
        borderWidth: 1,
        borderColor: theme.colors['gray-300'],
        borderStyle: 'solid',
      },
    })
  }

  function blurredInput() {
    textInputRef.current?.setNativeProps({
      style: {
        borderWidth: 1,
        borderColor: theme.colors['gray-500'],
        borderStyle: 'solid',
      },
    })
  }

  return (
    <Container fullWidth={fullWidth}>
      <Label>Label</Label>
      <CustomTextInput
        ref={textInputRef}
        onFocus={focusedInput}
        onBlur={blurredInput}
        {...rest}
      />
    </Container>
  );
}

const Container = styled.View<{ fullWidth: boolean }>`
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
`;

const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm}px;
    line-height: 18px;
    color: ${theme.colors['gray-200']};
  `}
`;

const CustomTextInput = styled.TextInput`
  ${({ theme }) => css`
    padding: 14px;
    border: 1px solid ${theme.colors['gray-500']};
    border-radius: ${theme.borderRadius.default}px;
    font-size: ${theme.fontSizes.md}px;
    line-height: 21px;
    color: ${theme.colors['gray-100']};
  `};
`;
