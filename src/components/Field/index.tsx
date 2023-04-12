import { TextInputProps } from 'react-native'
import { Container, Input, Label } from './styles'

type FieldProps = TextInputProps & {
  label: string
  fullWidth?: boolean
}

export function InputField({ label, fullWidth = false, ...rest }: FieldProps) {
  return (
    <Container fullWidth={fullWidth}>
      <Label>{label}</Label>
      <Input {...rest} />
    </Container>
  )
}
