import { TextInputProps } from 'react-native'
import { Container, Input, Label } from './styles'

type FieldProps = TextInputProps & {
  label: string
}

export function Field({ label }: FieldProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input />
    </Container>
  )
}
