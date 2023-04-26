import { TextInputProps } from 'react-native'
import * as masks from '../../utils/masks'
import { Container, Input, Label } from './styles'

type FieldProps = TextInputProps & {
  label: string
  fullWidth?: boolean
  mask?: 'date' | 'time'
}

export function InputField({ label, mask, fullWidth = false, value, ...rest }: FieldProps) {
  if (mask === 'time') {
    value = masks.toTime(value)
  }

  if (mask === 'date') {
    value = masks.toDate(value)
  }

  return (
    <Container fullWidth={fullWidth}>
      <Label>{label}</Label>
      <Input {...rest} value={value} />
    </Container>
  )
}
