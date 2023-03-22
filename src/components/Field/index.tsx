import { TextInputProps } from 'react-native'
import { Container, Input, Label } from './styles'

type FieldProps = TextInputProps & {
  label: string
}

export function InputField({ label, ...rest }: FieldProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...rest} />
    </Container>
  )
}
