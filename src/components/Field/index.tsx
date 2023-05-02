import { TextInputProps } from 'react-native'
import * as masks from '../../utils/masks'
import { ErrorMessage } from '@components/Typography'
import { Container, Input, Label } from './styles'

type FieldProps = TextInputProps & {
  label: string
  fullWidth?: boolean
  mask?: 'date' | 'time'
  error?: string
  mandatory?: boolean
}

export function InputField({ label, mask, fullWidth = false, value, error, mandatory = false, ...rest }: FieldProps) {
  if (mask === 'time') {
    value = masks.toTime(value)
  }

  if (mask === 'date') {
    value = masks.toDate(value)
  }

  return (
    <Container fullWidth={fullWidth}>
      <Label>{label}{mandatory && '*'}</Label>
      <Input {...rest} value={value} />
      {Boolean(error) && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}
