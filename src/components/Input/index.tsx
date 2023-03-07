import { useRef } from 'react';
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, CustomTextInput, Label } from './styles';

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
